import type { FC } from 'react';
import { Button } from './ui/button';
import { Link } from '@/i18n/routing';

export const UnderConstruction: FC = () => {
    return (
        <div className="flex h-svh w-full flex-col items-center justify-center">
            <h1 className="text-lg font-bold">Not ready yet</h1>
            <Button asChild className="mt-2">
                <Link href="/">Go home</Link>
            </Button>
        </div>
    );
};
