import { useEndpointsQuery } from '@/src/entities/endpoints';
import { queryClient } from '@/src/shared/lib/react-query';

import {
    HydrationBoundary,
    dehydrate,
} from '@tanstack/react-query';

const RootLayout = async ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const Client = queryClient;
    await Client.prefetchQuery(useEndpointsQuery());
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
        </HydrationBoundary>
    );
};
export default RootLayout;
