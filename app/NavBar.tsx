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
                        <li><Link href="/create" className="text-xl font-bold hover:text-white">Post</Link></li>
                        <li><Link href="/users" className="text-xl font-bold hover:text-white">Users</Link></li>
                        <SignOutButton />
                    </AuthCheck>
                    {/* <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost rounded-btn">Dropdown</label>
                        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                        <li><a>Item 1</a></li> 
                        <li><a>Item 2</a></li>
                        </ul>
                    </div> */}
                </ul>
            </div>
        </div>
    )
}