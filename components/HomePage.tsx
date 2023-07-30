import PostCard from '@/components/PostCard'
import { prisma } from '@/lib/prisma';


export default async function HomePage() {

    const posts = await prisma.post.findMany({
		orderBy: {
			createdAt: 'desc',
		},

	});


    return (
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
    )
}