'use client';
import { queryClient } from '@/src/shared/lib/react-query';
import { ReactNode } from 'react';
import { QueryClientProvider as TanStackQueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HydrateAtoms } from '@/src/shared/lib/react-query/queryClient';
import { Provider } from 'jotai';

type QueryClientProviderProps = {
    children: ReactNode;
};

export function QueryClientProvider(
    props: QueryClientProviderProps
) {
    const { children } = props;
    return (
        <TanStackQueryClientProvider client={queryClient}>
            <Provider>
                <HydrateAtoms>{children}</HydrateAtoms>
                {/* {children} */}
            </Provider>
            <ReactQueryDevtools />
        </TanStackQueryClientProvider>
    );
}
