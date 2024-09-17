/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

interface InviteEmailProps {
  invitedByUsername?: string;
  inviteLink?: string;
}

const baseUrl = process.env.SITE_URL ?? '';

export const InviteEmail = ({ invitedByUsername = 'X Boilerplate', inviteLink }: InviteEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>{invitedByUsername}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto font-sans bg-white">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img src={`${baseUrl}/email-img.png`} width="40" height="40" alt="Openkit img" className="mx-auto my-0" />
            </Section>

            <Heading className="text-black text-[24px] font-normal text-center p-0 mt-[30px] mb-[16px] mx-0">
              Event
            </Heading>

            <Heading className="text-black text-[24px] font-normal text-center p-0 mb-[30px] mx-0">
              <strong>
                Open Kit - Community <span className="text-blue-700">2023</span>
              </strong>
            </Heading>

            <Text className="text-black text-[14px] leading-[24px]">
              On behalf of the entire <strong>openkit</strong> team, we want to express our sincerest gratitude for
              being part of this event and sharing your valuable knowledge with our community.
            </Text>

            <Section>
              <Text className="text-black text-[14px] leading-[24px]">
                Don't miss out on the action! Make sure to add your talk to your calendar. We eagerly await you!
              </Text>
            </Section>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-[20px] py-[12px]"
                href={inviteLink}
              >
                Join the Talk!
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              Or copy and paste this URL into your browser:{' '}
              <Link href={inviteLink} className="text-blue-600 no-underline">
                {inviteLink}
              </Link>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              🪂 X-boilerplate a starting boilerplate with configuration and best practices for your Nextjs projects, so
              you can only focus on building your product.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
