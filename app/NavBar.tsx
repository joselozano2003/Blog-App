import AuthCheck from "@/components/AuthCheck"
import { SignInButton, SignOutButton, MobileSignOutButton } from "@/components/buttons"
import Link from "next/link"

export default function NavBar() {
    return (
        <div className="navbar text-neutral-content bg-neutral sticky top-0 z-50">
            <div className="flex-1">
                <Link href="/home" className="btn btn-ghost normal-case text-xl">Da Blog.</Link>
            </div>
            <div className="flex justify-between">
                <ul className="mobile menu menu-horizontal">
                    <SignInButton />
                    <AuthCheck>
                        <li><Link href="/create" className="text-xl font-bold hover:text-white">Post</Link></li>
                        <li><Link href="/users" className="text-xl font-bold hover:text-white">Users</Link></li>
                        <SignOutButton />
                    </AuthCheck>
                </ul>

                <div className="desktop">
                    <div className="flex flex-row ">
                        <SignInButton />
        
                        <div className="dropdown dropdown-end desktop">
                            <label tabIndex={0} className="btn btn-ghost rounded-btn">Menu</label>
                            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-neutral rounded-box w-32 mt-4 items-center">
                            <AuthCheck>
                                <li><Link href="/create" className="text-center">Post</Link></li>
                                <li><Link href="/users">Users</Link></li>
                                <li><MobileSignOutButton /></li>
                            </AuthCheck> 
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}