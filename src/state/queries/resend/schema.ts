import { z } from 'zod';

export const zSendEmailParams = () =>
  z.object({
    emailTo: z.string().email(),
    subject: z.string(),
    inviteLink: z.string(),
    invitedByUsername: z.string().optional(),
  });
export type SendEmailParams = z.infer<ReturnType<typeof zSendEmailParams>>;

export const zEmail = () => zSendEmailParams();
export type Email = z.infer<ReturnType<typeof zEmail>>;

export const zEmailPayload = () =>
  z.object({
    id: z.string().min(1),
  });
export type EmailPayload = z.infer<ReturnType<typeof zEmailPayload>>;
