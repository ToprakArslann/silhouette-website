import HomeContent from './components/HomeContent';

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <HomeContent />;
}