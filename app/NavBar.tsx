import AuthCheck from "@/components/AuthCheck"
import { SignInButton, SignOutButton } from "@/components/buttons"
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
                        <div className="dropdown dropdown-end mobile desktop">  
                        <label className="btn btn-circle swap swap-rotate mx-3 btn-neutral">
                            <input type="checkbox" />

                            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>

                            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                        </label>

                            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-neutral rounded-box w-30 mt-4">
                            <li><Link href="/create">Post</Link></li> 
                            <li><Link href="/users">Users</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}