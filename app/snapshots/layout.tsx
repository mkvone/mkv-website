import { useSnapshotsQuery } from '@/src/entities/snapshots';
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
    await Client.prefetchQuery(useSnapshotsQuery());

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
        </HydrationBoundary>
    );
};
export default RootLayout;
