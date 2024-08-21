import { NextResponse } from 'next/server';

import InviteEmail from '~/app/(marketing)/resend/InviteEmail';

import { Resend } from 'resend';

import { zSendEmailParams } from '#/state/queries/resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const emailContent = zSendEmailParams().parse(json);

    const { data } = await resend.emails.send({
      from: process.env.RESEND_DOMAIN,
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
