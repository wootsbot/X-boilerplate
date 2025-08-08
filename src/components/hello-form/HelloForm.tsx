"use client";

import Button from "@design-system/button";
import InputField from "@design-system/input-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type * as z from "zod";

import { helloFormSchema } from "@/utils/validations/hello-form";

import type { HelloFormProps } from "./HelloForm.type";

type FormValues = z.infer<typeof helloFormSchema>;

function HelloForm({ onSubmit }: HelloFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(helloFormSchema),
  });

  function handleSubmitValues(data: FormValues) {
    onSubmit({ name: data.nameField });
  }

  return (
    <form style={{ marginTop: "16px" }} onSubmit={handleSubmit(handleSubmitValues)}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <InputField
          placeholder="Hello what's your name"
          isError={Boolean(errors?.nameField)}
          errMsg={errors?.nameField?.message}
          {...register("nameField")}
        />

        <Button style={{ marginTop: "8px" }} type="submit">
          Go to route
        </Button>
      </div>
    </form>
  );
}

export default HelloForm;
