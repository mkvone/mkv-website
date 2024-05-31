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
    return <div>{children}</div>;
};
export default RootLayout;
