import AuthCheck from "@/components/AuthCheck"
import { SignInButton, SignOutButton } from "@/components/buttons"

export default function NavBar() {
    return (
        <div className="navbar text-neutral-content bg-neutral">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost normal-case text-xl">Jose's Blog</a>
            </div>
            <div className="flex justify-between">
                <ul className="menu menu-horizontal">
                    <SignInButton />
                    <AuthCheck>
                        <li><a className="text-xl font-bold hover:text-white hover:font-bold">Posts</a></li>
                        <SignOutButton />
                    </AuthCheck>
                </ul>
            </div>
        </div>
    )
}