import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export default function Header() {
    const t = useTranslations();

    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="font-bold">{t('header.title')}</span>
                </Link>
                <Button asChild variant="ghost">
                    <Link href="/login">{t('header.login')}</Link>
                </Button>
            </div>
        </header>
    );
}
