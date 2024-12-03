export default function Footer() {
    return (
        <footer className="border-t bg-gray-100">
            <div className="flex h-14 w-full items-center justify-center px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} MovieMania. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
