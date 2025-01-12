import { getServerSession } from "next-auth";
import LandingPage  from "../components/Landing/page";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await getServerSession();
    if(session?.user) redirect('/home');
    
    return (
        <main>
            <LandingPage />
        </main>
    );
}
