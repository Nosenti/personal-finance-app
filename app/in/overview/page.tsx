import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from '@/app/_components/ui/card';

export default function page() {
	return (
		<div className='w-full'>
			<div className='text-xl'>
				Overview
			</div>
			<div className='cards flex flex-row gap-3 w-full bg-red-400'>
				<Card className='bg-black text-white flex-1'>
					<CardHeader>
						<CardDescription>Current Balance</CardDescription>
					</CardHeader>
					<CardContent>
						<h1 className='text-xl'>$4,836.00</h1>
					</CardContent>
				</Card>
				<Card className='bg-white text-black flex-1'>
					<CardHeader>
						<CardDescription>Income</CardDescription>
					</CardHeader>
					<CardContent>
						<h1 className='text-xl'>$4,836.00</h1>
					</CardContent>
				</Card>
				<Card className='bg-white text-black flex-1'>
					<CardHeader>
						<CardDescription>Expenses</CardDescription>
					</CardHeader>
					<CardContent>
						<h1 className='text-xl'>$4,836.00</h1>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
