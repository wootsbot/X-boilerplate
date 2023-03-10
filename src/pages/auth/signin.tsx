import type { GetServerSidePropsContext } from "next"
import { useRouter } from 'next/router';
import { getServerSession } from "next-auth/next"
import { getProviders, signIn } from 'next-auth/react';

import Button from '@design-system/Button';

import { authOptions } from '@/libs/nextAuth';

import Header from '@/components/Header';
import MainLayout from '@/layouts/MainLayout';

type Providers = {
  id: string;
  name: string;
};

type SignInProps = {
  providers: Array<Providers>;
};
function SignIn({ providers }: SignInProps) {
  const router = useRouter();

  function handleGoBack() {
    router.push('/');
  }

  return (
    <div>
      <Header
        title="🛡️"
        subTitle="Hi"
        name="NextAuth.js"
        message="Authentication for Next.js, Live Demo."
        onGoBack={handleGoBack}
      />

      {Object.values(providers).map((provider) => (
        <div key={provider?.name}>
          <Button onClick={() => signIn(provider?.id)}>Sign in with {provider?.name}</Button>
        </div>
      ))}
    </div>
  );
}

SignIn.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)
  const providers = await getProviders();

  if (session?.user) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: { providers },
    };
  }

  return {
    props: { providers },
  };
}

export default SignIn;
