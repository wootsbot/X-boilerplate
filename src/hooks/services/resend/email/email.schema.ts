import { z } from 'zod';

export const emailSchema = z.object({
  emailTo: z.string().email(),
  subject: z.string(),
  inviteLink: z.string(),
  invitedByUsername: z.string().optional(),
});

export const emailPayload = z.object({
  id: z.string().min(1),
});

export const zEmail = () => emailSchema;
export type Email = z.infer<ReturnType<typeof zEmail>>;

export const zEmailPayload = () => emailPayload;
export type EmailPayload = z.infer<ReturnType<typeof zEmailPayload>>;
