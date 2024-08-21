import * as z from 'zod';

export const sendEmailSchema = z.object({
  emailToField: z
    .string()
    .email('Write a valid email.')
    .min(1, `"Email To" is a required field`)
    .max(50, `"To" maximum 50 characters`),
  subjectField: z.string().min(5, 'The Email subject must contain at least 5 characters.'),
  inviteLinkField: z.string().url('Write a valid url.'),
});
