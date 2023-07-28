import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email!;

    const user = await prisma.user.findUnique({
        where: {
            email: currentUserEmail,
        },
    }).then((user) => user?.id!);
    
    const data = await req.json();

    const post = await prisma.post.create({
        data: {
            title: data.title,
            content: data.content,
            authorId: user,
        },
    });
    
    return NextResponse.json(post);   
}

export async function GET(req: NextRequest) {
    // const session = await getServerSession(authOptions);
    // const currentUserEmail = session?.user?.email!;

    // const user = await prisma.user.findUnique({
    //     where: {
    //         email: currentUserEmail,
    //     },
    // }).then((user) => user?.id!);

    // const content = await prisma.post.findMany({
    //     where: {
    //         authorId: user,
    //     },
    //     take: 10,
    //     orderBy: {
    //         createdAt: "desc",
    //     },
    // });

    // return NextResponse.json(content);
}

export async function DELETE(req: NextRequest) {
    
}