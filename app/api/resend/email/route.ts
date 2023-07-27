import { NextResponse } from 'next/server';

import InviteEmail from '~/app/(marketing)/resend/InviteEmail';
import env from '~/env';

import { Resend } from 'resend';

import { emailSchema } from '@/hooks/services/resend/email/email.schema';

const resend = new Resend(env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const emailContent = emailSchema.parse(json);

    const data = await resend.emails.send({
      from: env.RESEND_DOMAIN,
      to: emailContent.emailTo,
      subject: emailContent.subject,
      react: InviteEmail({ ...emailContent }),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log('error', error);
    return NextResponse.json({ error });
  }
}
