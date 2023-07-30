import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';
import Link from 'next/link';

import { getServerSession } from "next-auth";
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await prisma.post.findUnique({ where: { id: params.id } });
    return { title: `${post?.title}` };
}

export default async function Post({ params }: Props) {
    const post = await prisma.post.findUnique({ where: { id: params.id } });
    const { title, description, content, id } = post ?? {};
    let currentUser = null;

    try{
        const session = await getServerSession(authOptions);
        const currentUserEmail = session?.user?.email!;
        currentUser = await prisma.user.findUnique({
            where: {
            email: currentUserEmail,
            },
        });
    } catch (error) {
        currentUser = null; // We're not logged in
    }

    const author = await prisma.user.findUnique({ where: { id: post?.authorId } });


    return (
        <div className='bg-base-200 shadow-2xl pb-5 rounded flex justify-center'>
            <div className='w-[90%]'>
                <div className='flex flex-col items-center p-5'>
                    <h1 className='text-3xl font-bold text-center'>{title}</h1>
                    <hr className="border-2 border-primary rounded w-[100%] m-5"/>
                    <h2 className='text-center text-2xl font-semibold'>{description}</h2>
                    {/* <p className='text-center'>{content}</p> */}
                    <ContentCard content={content} />
                    <p>Created By: <Link href={`/users/${author?.id}`}>{author?.name}</Link>
                    </p>
                    {currentUser?.id == post?.authorId ? (
                        <div className='flex flex-row justify-center'>
                            <a href={`/edit/${id}`} className='btn btn-primary mt-5 mx-2'>Edit Post</a>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    );
}

function ContentCard({content}: any) {
    return (
        <div className='bg-base-300 m-5 shadow-2xl rounded p-5 text-center'>
            <p>{content}</p>
        </div>
    )
}