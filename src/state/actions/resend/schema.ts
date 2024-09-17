import { z } from 'zod';

export const zSendEmailSchema = () =>
  z.object({
    emailTo: z
      .string()
      .email('Write a valid email.')
      .min(1, `"Email To" is a required field`)
      .max(50, `"To" maximum 50 characters`),
    subject: z.string().min(5, 'The Email subject must contain at least 5 characters.'),
    inviteLink: z.string().url('Write a valid url.'),
    invitedByUsername: z.string().optional(),
  });
export type SendEmailSchema = z.infer<ReturnType<typeof zSendEmailSchema>>;

export const zEmailPayloadSchema = () =>
  z.object({
    id: z.string().min(1),
  });
export type EmailPayloadSchema = z.infer<ReturnType<typeof zEmailPayloadSchema>>;
