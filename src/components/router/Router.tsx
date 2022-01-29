import { lazy, Suspense } from 'react';
import { Outlet, RouteObject, useRoutes, BrowserRouter } from 'react-router-dom';

// Components
import Header from '../../components/root/Header';

const Loading = () => <p className="p-4 w-full h-full text-center">Loading...</p>;

const IndexScreen = lazy(() => import('~/components/screens/Index'));
const Page404Screen = lazy(() => import('~/components/screens/404'));
const Beta = lazy(() => import('~/components/screens/Beta'));

function Layout() {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
}

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <IndexScreen />,
        },
        {
          path: '/tournaments',
          element: <IndexScreen />,
        },
        {
          path: '/beta',
          element: <Beta />,
        },
        {
          path: '*',
          element: <Page404Screen />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};
