import { QueryClient } from '@tanstack/query-core';
import React from 'react';
import { useHydrateAtoms } from 'jotai/react/utils';
import {
    atomWithQuery,
    queryClientAtom,
} from 'jotai-tanstack-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            // refetchOnWindowFocus: false, // Refetch data when the window gains focus
            staleTime: 0, // Set the cache to never go stale
            gcTime: 0, // Set the cache to never garbage collect
            // refetchOnWindowFocus: true,
            // refetchOnMount: true,
            // refetchOnReconnect: true,
        },
    },
});
export const HydrateAtoms = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    useHydrateAtoms([[queryClientAtom, queryClient]]);
    return children;
};
