// import { useEffect } from 'react';
import { Head } from '~/components/shared/Head';
import cod from '~/components/util/cod';

import { useEffect } from 'react';


function Beta() {
  useEffect(()=> {
    console.log('Useeffect');
    console.log(cod('gerroy@gerroy.nl', '14124232aA!'));
  },[])

// const config = {
//   method: 'get',
//   url: 'https://my.callofduty.com/api/papi-client/codfriends/v1/compendium',
//   headers: {
//   }
// };

// useEffect(() => {
//   // GET request using axios with set headers
//   axios.get('https://my.callofduty.com/api/papi-client/codfriends/v1/compendium', {
//     headers: {
//     }
//   })
//       .then(response => console.log(response));
// },[])


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
