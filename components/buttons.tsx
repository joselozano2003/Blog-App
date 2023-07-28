'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";


export function SignInButton(){
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <p className="text-xl font-semibold">Loading...</p>
    }

    if (status === 'authenticated') {
        return (
            <div className="flex items-center">
                <Link href={`/dashboard`}>
                    <img
                    src={session.user?.image ?? '/mememan.webp'}
                    width={30}
                    height={30}
                    alt="Your Name"
                    />
                </Link>
            </div>
        );
    }

    return <button className="btn" onClick={() => signIn()}>Sign In</button>
}

export function SignOutButton(){
    return <button className="btn btn-warning ml-2" onClick={() => signOut()}>Sign Out</button>
}