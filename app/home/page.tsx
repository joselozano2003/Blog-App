import HomePage from '@/components/HomePage';

export const metadata = {
    title: 'Home',
    description: 'Home page',
};

export default function Home() {
    return (
        <main className='text-center'>
            <HomePage/>
        </main>
    )
}