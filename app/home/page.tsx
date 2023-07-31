import HomePage from '@/components/HomePage';

export const metadata = {
    title: 'Home',
    description: 'Home page',
};

export default function Home() {
    return (
        <main className='text-center'>
            <h1 className='text-center font-semibold'>Home</h1>
            <HomePage/>
        </main>
    )
}