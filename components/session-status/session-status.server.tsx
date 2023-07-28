import { getServerSession } from 'next-auth/next';

import Typography from '@design-system/typography';

import { authOptions } from '@/libs/auth';

async function SessionStatus() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session?.user && (
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Typography size="s">Already Authenticated</Typography>
          <div style={{ backgroundColor: '#46a758', width: 12, height: 12, borderRadius: 18, marginLeft: 8 }} />
        </div>
      )}

      {!session?.user && (
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Typography size="s">Unauthenticated</Typography>
          <div style={{ backgroundColor: '#e5484d', width: 12, height: 12, borderRadius: 18, marginLeft: 8 }} />
        </div>
      )}
    </>
  );
}

export default SessionStatus;
