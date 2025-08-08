"use client";

import Button from "@design-system/button";
import InputField from "@design-system/input-field";
import { toast } from "@design-system/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";

import { sendEmailAction } from "#/state/actions/resend";
import type { SendEmailSchema } from "#/state/actions/resend/schema";
import { zSendEmailSchema } from "#/state/actions/resend/schema";

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<SendEmailSchema>({
    resolver: zodResolver(zSendEmailSchema()),
  });

  const sendEmail = useAction(sendEmailAction, {
    onSuccess: () => {
      toast.success("Congratulations, you have successfully sent an email.");
      reset();
    },
    onError: ({ error }) => {
      toast.error(`It seems we couldn't send the email, please try again.`, {
        description: error?.serverError,
      });
    },
  });

  function handleSendEmail(data: SendEmailSchema) {
    sendEmail.execute(data);
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleSendEmail)}>
      <InputField
        placeholder="Email to"
        isError={Boolean(errors?.emailTo)}
        errMsg={errors?.emailTo?.message}
        {...register("emailTo")}
      />

      <InputField
        placeholder="Email subject"
        isError={Boolean(errors?.subject)}
        errMsg={errors?.subject?.message}
        {...register("subject")}
      />

      <InputField
        placeholder="Invite link"
        isError={Boolean(errors?.inviteLink)}
        errMsg={errors?.inviteLink?.message}
        {...register("inviteLink")}
      />

      <Button type="submit" disabled={!isValid || sendEmail.isPending}>
        {sendEmail.isPending ? "Sending Email..." : "Send Email"}
      </Button>
    </form>
  );
}
