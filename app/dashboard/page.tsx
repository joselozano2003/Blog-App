import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ProfileForm } from "./ProfileForm";


export default async function DashBoard(){
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/api/auth/signin')
    }

    const currentUserEmail = session?.user?.email!;

    const user = await prisma.user.findUnique({
        where: {
          email: currentUserEmail,
        },
    });
    
    return(
        <div className="text-center flex flex-col justify-center h-full">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p>Modify {user?.name}'s Profile</p>
            <ProfileForm user={user}/>
        </div>
    )
}