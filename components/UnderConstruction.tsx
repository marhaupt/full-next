import Link from 'next/link';
import type { FC } from 'react';

export const UnderConstruction: FC = () => {
    return (
        <div className='w-full h-svh flex flex-col items-center justify-center'>
            <h1>Not ready yet</h1>
            <Link href="/" className=''>Go back</Link>
        </div>
    );
};
