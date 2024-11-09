import { Inter as FontSans } from 'next/font/google';
import { cn } from '@juggling-hub/frontend/utils';

import { ThemeProvider } from '../components/theme/theme-provider';

import './global.css';

import { Header } from '../components/header/header';
import { Suspense } from 'react';
import Loading from './loading';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans'
});

export const metadata = {
    title: 'Welcome to nx-react-starter',
    description: 'Generated by create-nx-workspace'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex flex-col min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Header />
                        <div className="flex-1 flex flex-col">
                            <Suspense fallback={<Loading />}>{children}</Suspense>
                        </div>

                        <footer className="py-4 border-t text-center">
                            <p>Footer infos</p>
                        </footer>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
