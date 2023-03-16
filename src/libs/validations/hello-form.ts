import * as z from 'zod';

export const helloFormSchema = z.object({
  nameField: z.string().min(1),
});
