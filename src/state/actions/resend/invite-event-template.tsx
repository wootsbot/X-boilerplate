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
} from "@react-email/components";

import type { SendEmailSchema } from "#/state/actions/resend/schema";

type InviteEmailProps = Pick<SendEmailSchema, "invitedByUsername" | "inviteLink">;

const baseUrl = process.env.SITE_URL ?? "";

export const InviteEmail = ({ invitedByUsername = "X Boilerplate", inviteLink }: InviteEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>{invitedByUsername}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto font-sans bg-white">
          <Container className="border border-solid border-[#eaeaea] rounded-sm my-10 mx-auto p-5 w-[465px]">
            <Section className="mt-8">
              <Img src={`${baseUrl}/email-img.png`} width="40" height="40" alt="Openkit img" className="mx-auto my-0" />
            </Section>

            <Heading className="text-black text-[24px] font-normal text-center p-0 mt-[30px] mb-4 mx-0">Event</Heading>

            <Heading className="text-black text-[24px] font-normal text-center p-0 mb-[30px] mx-0">
              <strong>
                Open Kit - Community <span className="text-blue-700">2023</span>
              </strong>
            </Heading>

            <Text className="text-black text-[14px] leading-6">
              On behalf of the entire <strong>openkit</strong> team, we want to express our sincerest gratitude for
              being part of this event and sharing your valuable knowledge with our community.
            </Text>

            <Section>
              <Text className="text-black text-[14px] leading-6">
                Don't miss out on the action! Make sure to add your talk to your calendar. We eagerly await you!
              </Text>
            </Section>

            <Section className="text-center mt-8 mb-8">
              <Button
                className="bg-[#000000] rounded-sm text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={inviteLink}
              >
                Join the Talk!
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-6">
              Or copy and paste this URL into your browser:
              <Link href={inviteLink} className="text-blue-600 no-underline">
                {inviteLink}
              </Link>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-6">
              🪂 X-boilerplate a starting boilerplate with configuration and best practices for your Nextjs projects, so
              you can only focus on building your product.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
