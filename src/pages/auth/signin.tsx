import type { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { unstable_getServerSession } from 'next-auth/next';
import { getProviders, SessionProvider, signIn } from 'next-auth/react';

import Button from '@design-system/Button';

import { authOptions } from '@/libs/nextAuth';

import Header from '@/components/Header';
import MainLayout from '@/layouts/MainLayout';

function SignIn({ providers }) {
  const router = useRouter();
  console.log('providers', providers);

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
  const session = await unstable_getServerSession(context.req, context.res, authOptions);
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
