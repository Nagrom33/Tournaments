import { Dialog } from '@headlessui/react';
import { useRef, useState } from 'react';
import { useAuthState } from '~/components/contexts/UserContext';
import { SignInButton } from '~/components/domain/auth/SignInButton';
import { SignOutButton } from '~/components/domain/auth/SignOutButton';
import { Head } from '~/components/shared/Head';

function Index() {
  const { state } = useAuthState();

  return (
    <>
      <Head title="Dashboard | Tournaments" />
      <div className="hero min-h-screen">
        <div className="text-center hero-content">
          <div>
            <h1 className="text-3xl font-bold">E-Sport Tournaments</h1>
            <p className="mt-4 text-lg">
              We connect, challange and game. <b>All together</b>
            </p>
            <div className="mt-4 grid gap-2">
              {state.state === 'UNKNOWN' ? null : state.state === 'SIGNED_OUT' ? <SignInButton /> : <SignOutButton />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
