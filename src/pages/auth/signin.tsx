import type { GetServerSidePropsContext } from 'next';
import { unstable_getServerSession } from 'next-auth/next';
import { getProviders, SessionProvider, signIn } from 'next-auth/react';

import Button from '@design-system/Button';
import { Github } from '@icons-pack/react-simple-icons';

import { authOptions } from '@/libs/nextAuth';

import MainLayout from '@/layouts/MainLayout';

function SignIn({ providers }) {
  console.log('providers', providers);

  return (
    <div>
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
