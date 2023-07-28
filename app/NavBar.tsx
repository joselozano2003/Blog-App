import AuthCheck from "@/components/AuthCheck"
import { SignInButton, SignOutButton } from "@/components/buttons"
import Link from "next/link"

export default function NavBar() {
    return (
        <div className="navbar text-neutral-content bg-neutral sticky top-0 z-50">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">Da Blog</Link>
            </div>
            <div className="flex justify-between">
                <ul className="mobile menu menu-horizontal">
                    <SignInButton />
                    <AuthCheck>
                        <li><Link href="/create" className="text-xl font-bold hover:text-white hover:font-bold">Posts</Link></li>
                        <li><Link href="/users" className="text-xl font-bold hover:text-white hover:font-bold">Users</Link></li>
                        <SignOutButton />
                    </AuthCheck>
                </ul>
            </div>
        </div>
    )
}