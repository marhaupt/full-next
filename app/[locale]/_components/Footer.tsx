'use client';

import { Link, routing } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations();

    return (
        <footer className="border-t bg-gray-100">
            <div className="flex h-14 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm text-gray-600">
                    © {new Date().getFullYear()} {t('footer.about')}
                </p>
                <div className="flex gap-2">
                    {routing.locales.map((loc) => (
                        <Link locale={loc} key={loc} href="/">
                            {loc.toUpperCase()}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
