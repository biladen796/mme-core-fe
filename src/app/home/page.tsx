import dynamic from 'next/dynamic';

const Home = dynamic(() => import('@/screens/home'), {
  ssr: false,
});

export default function C1000HomeView() {
  return <Home />;
}
