'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import Button from '@design-system/button';
import InputField from '@design-system/input-field';
import { toast } from '@design-system/toast';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { sendEmailSchema } from '@/utils/validations/send-email';

import Header from '@/components/header';
import { useResendEmail } from '@/hooks/services/resend/email/use-resend-email.hook';

type FormValues = z.infer<typeof sendEmailSchema>;

function ResendPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(sendEmailSchema),
  });

  const { mutate: handleResendEmail, isPending } = useResendEmail({
    onSuccess: (_data) => {
      toast.success('Congratulations, you have successfully sent an email.');
      reset();
    },
    onError: (_error) => {
      toast.error(`It seems we couldn't send the email, please try again.`);
    },
  });

  function handleGoBack() {
    router.push('/');
  }

  function handleSubmitValues(data: FormValues) {
    console.log('data', data);
    handleResendEmail({ emailTo: data.emailToField, subject: data.subjectField, inviteLink: data.inviteLinkField });
  }

  return (
    <>
      <Header
        title="✉️ Resend"
        subTitle="Hi "
        name="Example with Resend, @react-email and TanStack Query"
        message="Example of sending an email with an invitation design to participate in an event, including a link."
        onGoBack={handleGoBack}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <form style={{ marginTop: 16 }} onSubmit={handleSubmit(handleSubmitValues)}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <InputField
                placeholder="Email to"
                isError={Boolean(errors?.emailToField)}
                errMsg={errors?.emailToField?.message}
                {...register('emailToField')}
              />

              <InputField
                placeholder="Email subject"
                isError={Boolean(errors?.subjectField)}
                errMsg={errors?.subjectField?.message}
                {...register('subjectField')}
              />

              <InputField
                placeholder="Invite link"
                isError={Boolean(errors?.inviteLinkField)}
                errMsg={errors?.inviteLinkField?.message}
                {...register('inviteLinkField')}
              />
            </div>

            <Button style={{ marginTop: '8px' }} type="submit" disabled={isPending}>
              {isPending ? 'Sending Email...' : '   Send Email'}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ResendPage;
