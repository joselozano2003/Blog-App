
import { AnonCheck } from '@/components/AuthCheck'
import Link from 'next/link';

export const metadata = {
    title: 'Da Blog',
    description: 'Home page',
};

export default async function Home() {

	return (
		<main className='text-center'>
			<h1 className="text-4xl font-bold underline">Welcome to Da Blog</h1>
			<br/>
			<AnonCheck>
				<h2 className='text-3xl font-bold'>Please Log-In to Create Posts</h2>
			</AnonCheck>
			<Link href='/home'><button className='btn btn-primary'>Go Home</button></Link>
		</main>
	)
}
