import { Button } from '@/components/ui/button';
import { Library } from 'lucide-react';

import React from 'react';

export default function Home() {
	console.log('this it a log');
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<Button variant={"outline"} ><Library /> ShadCN</Button>
		</div>
	);
}
