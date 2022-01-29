import { useEffect } from 'react';
import { Head } from '~/components/shared/Head';
import cod from '~/components/util/cod';

function Beta() {

 useEffect(()=> {
    async function fetchAccount() {
      const client = await cod()
      await client.Identity()
    }

    fetchAccount();
  },[])


  return (
    <>
      <Head title="Beta | Tournaments" />
      <div className="hero min-h-screen">
        <div className="text-center hero-content">
          <div>
            <h1 className="text-3xl font-bold">Beta check console log</h1>
            <p className="mt-4 text-lg">
              Beta area to test the COD API
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Beta;
