import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";


export default async function Create() {
    return(
        <>
            <h1>Make New Post</h1>
        </>
    )
}