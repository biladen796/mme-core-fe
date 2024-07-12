import dynamic from 'next/dynamic';

const HomeScreen = dynamic(() => import('@/screens/home'), {
  ssr: false,
});

export default function Home() {
  return <HomeScreen />;
}
