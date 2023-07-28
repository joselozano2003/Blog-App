import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import PostForm from "./PostForm";


export default async function Create() {

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
        <div>
            <h1 className="text-center font-bold text-3xl">Make New Post for {user?.name}</h1>
            <PostForm user={user}/>
        </div>
    )
}