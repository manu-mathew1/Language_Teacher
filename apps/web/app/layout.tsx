import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'LinguaMentor — AI Language Teacher',
    description: 'Learn a new language with an AI teacher that acts like a strict, experienced instructor.',
    keywords: ['language learning', 'AI teacher', 'French', 'Spanish', 'German', 'Japanese'],
    authors: [{ name: 'LinguaMentor' }],
    viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
