import type { Metadata } from 'next';
import Header from '../_components/Header';
import Footer from '../_components/Footer';

export const metadata: Metadata = {
    title: 'NextMovies',
    description: 'Full stack battle',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
