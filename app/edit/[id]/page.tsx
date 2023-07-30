import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Metadata } from 'next';
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import EditPost from "./EditPost";

interface Props {
    params: {
      id: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await prisma.post.findUnique({ where: { id: params.id } });
    return { title: `${post?.title}` };
}

export default async function Edit({ params }: Props) {

    let author, user, post, title, description, content, postID = null;


    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/api/auth/signin')
    }

    try {
        const currentUserEmail = session?.user?.email!;

        user = await prisma.user.findUnique({
            where: {
              email: currentUserEmail,
            },
        });

        author = await prisma.user.findUnique({ where: { id: user?.id } });

        if (author?.id != user?.id) {
            redirect('/404')
        }

        post = await prisma.post.findUnique({ where: { id: params.id } });
        title = post?.title!;
        description = post?.description;
        content = post?.content;
        postID = post?.id;


    }
    catch (error) {
        console.log(error)
        redirect('/500')
    }

    return (
        <div>
            <h1 className="text-center font-bold text-3xl">Edit Post</h1>
            <EditPost title={title} description={description} content={content} id={postID} author={post?.authorId}/>
        </div>
    )
}

