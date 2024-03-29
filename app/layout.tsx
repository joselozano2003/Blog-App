import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from "./NavBar"
import AuthProvider from './AuthProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
	}

export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode
}) {
	return (
		<AuthProvider>
		<html lang="en" className=''>
			<body className="">
			<NavBar />
			<div className='m-10 min-h-[calc(100vh-80px)]'>
				{children}
			</div>
			</body>
		</html>
		</AuthProvider>
	)
}
