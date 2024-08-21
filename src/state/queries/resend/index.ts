import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { Email, EmailPayload, zEmailPayload } from './schema';

export * from '#/state/queries/resend/schema';

export const useResendEmailMutation = (config: UseMutationOptions<EmailPayload, Error, Email> = {}) => {
  return useMutation({
    mutationFn: async ({ emailTo, subject, inviteLink }) => {
      const response = await fetch('/api/resend/email', {
        body: JSON.stringify({
          emailTo,
          subject,
          inviteLink,
        }),
        method: 'POST',
      });

      const json = await response.json();
      return zEmailPayload().parse(json);
    },
    ...config,
  });
};