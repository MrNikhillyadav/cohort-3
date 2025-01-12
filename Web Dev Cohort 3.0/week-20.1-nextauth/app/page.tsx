'use client'

import { SessionProvider } from "next-auth/react";
import { Dashboard } from "./Home/page";

export default function Home() {
    return (
        <SessionProvider>
            <Dashboard />
        </SessionProvider>
    );
}
