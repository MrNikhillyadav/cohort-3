import LandingPage from '@/components/landing/landing-page';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Navbar from './../components/Navbar';
import { Providers } from "./Providers";

export default async function Home() {
  const session = await getServerSession()
  if(!session?.user) redirect('/sign-in')

  return (
    <main>
       <Providers>
            <Navbar/>
        </Providers>
      <LandingPage />
    </main>
  );
}