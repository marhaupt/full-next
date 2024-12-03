import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from './_components/Header';
import Footer from './_components/Footer';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <section className="relative flex min-h-[100svh] items-center justify-center bg-black text-white">
                <Image
                    src="/placeholder.svg?height=1080&width=1920"
                    alt="Movie collage"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="relative z-10 px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                        Welcome to MovieMania
                    </h1>
                    <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-300 sm:text-xl md:text-2xl">
                        Discover, Watch, and Love Movies
                    </p>
                    <Button asChild className="mt-8">
                        <Link href="/movies">Explore Movies</Link>
                    </Button>
                </div>
            </section>

            <section className="bg-gray-100 py-16 md:py-24">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Join Our Movie Community
                        </h2>
                        <p className="mx-auto max-w-[700px] text-balance text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Get personalized recommendations, create watchlists, and connect with
                            fellow movie enthusiasts.
                        </p>
                        <Button asChild>
                            <Link href="/signup">Sign Up Now</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
