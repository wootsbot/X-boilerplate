"use server";

import { resend } from "#/lib/resend";
import { actionClient } from "#/lib/safe-action";

import { InviteEmail } from "./invite-event-template";
import { zSendEmailSchema } from "./schema";

export const sendEmailAction = actionClient
  .inputSchema(zSendEmailSchema())
  .metadata({
    name: "send-email",
  })
  .action(async ({ parsedInput }) => {
    const emailContent = zSendEmailSchema().parse(parsedInput);

    const { data } = await resend.emails.send({
      from: `X Boilerplate <${process.env.RESEND_DOMAIN}>`,
      to: parsedInput.emailTo,
      subject: parsedInput.subject,
      react: InviteEmail({ ...emailContent }),
    });

    return data;
  });
