'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import Button from '@design-system/Button';
import InputField from '@design-system/InputField';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { sendEmailSchema } from '@/utils/validations/send-email';

import Header from '@/components/Header';
import { useResendEmail } from '@/hooks/services/resend/email/use-resend-email.hook';

type FormValues = z.infer<typeof sendEmailSchema>;

function ResendPage() {
  const router = useRouter();

  const { t, i18n } = useTranslation(['common', 'resend']);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(sendEmailSchema),
  });

  const { mutate: handleResendEmail, isLoading } = useResendEmail({
    onSuccess: (data) => {
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

  function handleChangueL() {
    i18n.changeLanguage('es_mx');
  }

  return (
    <>
      <p>{t('languages.en')}</p>
      <Header
        title={`✉️ ${t('resend:header.title')}`}
        subTitle="Hi "
        name="Example with Resend, @react-email and TanStack Query"
        message="Example of sending an email with an invitation design to participate in an event, including a link."
        onGoBack={handleGoBack}
      />

      <button onClick={handleChangueL}>Changue lenguaje</button>

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

            <Button style={{ marginTop: '8px' }} type="submit" disabled={isLoading}>
              {isLoading ? 'Sending Email...' : '   Send Email'}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ResendPage;
