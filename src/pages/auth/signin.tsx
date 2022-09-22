import type { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { unstable_getServerSession } from 'next-auth/next';
import { getProviders, SessionProvider, signIn } from 'next-auth/react';

import Button from '@design-system/Button';
import ArrowLeftLine from '@design-system/icons/ArrowLeftLine';
import Typography from '@design-system/Typography';
import { Github } from '@icons-pack/react-simple-icons';

import { authOptions } from '@/libs/nextAuth';

import MainLayout from '@/layouts/MainLayout';

function SignIn({ providers }) {
  const router = useRouter();
  console.log('providers', providers);

  function handleGoBack() {
    router.push('/');
  }
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>🛡️</h1>

        <Typography as="h2" size="s">
          Hi NextAuth.js
        </Typography>

        <Typography size="s">Authentication for Next.js, Live Demo.</Typography>
      </div>

      <Button style={{ marginRight: 8 }} onClick={handleGoBack}>
        <ArrowLeftLine color="#fff" style={{ marginRight: 8 }} /> Go back
      </Button>

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
