'use client'; // Error components must be Client Components

import { ErrorPage } from '@/src/views/error/error.page';
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return <ErrorPage />;
}
