import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';

import PostCard from "@/components/PostCard"
interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const user = await prisma.user.findUnique({ where: { id: params.id } });
	return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({ params }: Props) {

	const user = await prisma.user.findUnique({ where: { id: params.id } });
	const { name, bio, image, id } = user ?? {};

	const posts = await prisma.post.findMany({
		where: {
			authorId: id,
		},
	});

	return (
		<>
			<div className='bg-base-300 pb-5 rounded'>
				<div className='flex flex-row justify-center m-5'>
					<div className='w-[50%] flex flex-col items-center'>
						<h1 className='text-3xl font-bold text-center m-5'>{name}</h1>
						<img
						width={300}
						src={image ?? '/mememan.webp'}
						alt={`${name}'s profile`}
						/>

					</div>
					<div className='flex flex-col text-center min-w-[50%] justify-center'>
						<h3 className='font-semibold text-2xl'>About Me</h3>
						<p className='text-center'>{bio}</p>
					</div>
				</div>
			</div>

			<div className='bg-base-300 pb-5 rounded'>
				<div className='flex flex-row justify-center m-5'>
					<div className='w-[50%] flex flex-col items-center'>
						<h1 className='text-3xl font-bold text-center m-5'>Posts</h1>
						<div className='flex flex-row'>
							{posts.map((post: any) => (
							<PostCard post={post}/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}