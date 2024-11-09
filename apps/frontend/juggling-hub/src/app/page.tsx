import { Button } from '@juggling-hub/primitives';
import Link from 'next/link';

export default function Index() {
    return (
        <div className="flex flex-col flex-1">
            <h1 className="text-4xl font-bold text-center pt-10">
                <span className="block text-indigo-600">Hello there,</span>
                Welcome to JuggleHub 👋
            </h1>
            <p className="text-center text-lg pt-4">
                Your one-stop destination for all things juggling. Discover conventions, meetups,
                and more!
            </p>
            <div className="mt-10 flex justify-center">
                <Link href="/events">
                    <Button size="lg" variant="default">
                        Explore Events
                    </Button>
                </Link>
            </div>
        </div>
    );
}
