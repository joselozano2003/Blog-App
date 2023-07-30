import Image from 'next/image'
import { AnonCheck } from '@/components/AuthCheck'
import PostCard from '@/components/PostCard'
import { prisma } from '@/lib/prisma';

export const metadata = {
    title: 'Da Blog',
    description: 'Home page',
};

export default async function Home() {
	const posts = await prisma.post.findMany({
		orderBy: {
			createdAt: 'desc',
		},

	});
	return (
		<main className='text-center'>
		<h1 className="text-4xl font-bold underline">Welcome to Da Blog</h1>
		<br/>
		<AnonCheck>
			<h2 className='text-3xl font-bold'>Please Log-In to Create Posts</h2>
		</AnonCheck>
		
		<div className='bg-base-300 pb-5 rounded'>
					<div className='flex flex-row justify-center m-5'>
						<div className='w-[50%] flex flex-col items-center'>
							<h1 className='text-3xl font-bold text-center m-5'>Recent Posts</h1>
							<div className='flex flex-row flex-wrap justify-center'>
								{posts.map((post: any) => (
								<PostCard post={post}/>
								))}
							</div>
						</div>
					</div>
				</div>
		</main>
	)
}
