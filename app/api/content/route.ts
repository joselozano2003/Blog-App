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
            description: data.description,
            authorId: user,
        },
    });
    
    return NextResponse.json(post);   
}

export async function PUT(req: NextRequest) {

    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email!;

    const user = await prisma.user.findUnique({
        where: {
            email: currentUserEmail,
        },
    })

    const data = await req.json();

    if (data.authorId !== user?.id) {
        return NextResponse.json({ message : "You are not the author of this post" }, { status: 403 })
    }

    const post = await prisma.post.update({
        where: {
            id: data.id,
        },
        data: {
            title: data.title,
            content: data.content,
            description: data.description
        },
    });

    return NextResponse.json(post);
}

export async function DELETE(req: NextRequest) {
    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email!;

    const user = await prisma.user.findUnique({
        where: {
            email: currentUserEmail,
        },
    })

    const data = await req.json();

    if (data.authorId !== user?.id) {
        return NextResponse.json({ message : "You are not the author of this post" }, { status: 403 })
    }
  
    console.log(`Deleting post with id: ${data.id}`);

    const post = await prisma.post.delete({
        where: {
            id: data.id,
        },
    });

    return NextResponse.json(post);
}