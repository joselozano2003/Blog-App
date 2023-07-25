import Image from 'next/image'
import { AnonCheck } from '@/components/AuthCheck'

export default function Home() {
  return (
    <main className='text-center'>
      <h1 className="text-4xl font-bold underline">Welcome to Da Blog</h1>
      <br/>
      <AnonCheck>
        <h2 className='text-3xl font-bold'>Please Log-In to enter</h2>
      </AnonCheck>
      
    </main>
  )
}
