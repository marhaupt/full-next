import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="font-bold">MovieMania</span>
                </Link>
                <Button asChild variant="ghost">
                    <Link href="/login">Login</Link>
                </Button>
            </div>
        </header>
    );
}
