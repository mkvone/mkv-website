import { queryClient } from '@/src/shared/lib/react-query';
import { useValidatorsQuery } from '@/src/entities/validators';
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
    await Client.prefetchQuery(useValidatorsQuery());
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
        </HydrationBoundary>
    );
};
export default RootLayout;
