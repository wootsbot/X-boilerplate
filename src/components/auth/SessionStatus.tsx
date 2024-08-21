'use server';

import Typography from '@design-system/typography';

import { auth } from '@/libs/auth';

export async function SessionStatus() {
  const session = await auth();

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
