export default function NavBar() {
    return (
        <div className="navbar text-neutral-content bg-neutral">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost normal-case text-xl">Jose's Blog</a>
            </div>
            <div className="flex justify-between">
                <ul className="menu menu-horizontal">
                    <li><a className="text-xl font-bold hover:text-white hover:font-bold">Profile</a></li>
                    <li><a className="text-xl font-bold hover:text-white hover:font-bold">Posts</a></li>
                    <li><a className="text-xl font-bold hover:text-white hover:font-bold">Log Out</a></li>
                </ul>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><a className="text-xl font-bold hover:text-white hover:font-bold">Log In</a></li>
                </ul>
            </div>
        </div>
    )
}