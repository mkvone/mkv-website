import { ValidatorPage } from '@/src/views/staking/validator.page';
import { Styled } from '@/src/shared/ui';
import { StakingPage } from '@/src/views/staking/staking.page';

import { queryClient } from '@/src/shared/lib/react-query';
import {
    HydrationBoundary,
    dehydrate,
} from '@tanstack/react-query';
import { SnapshotPage } from '@/src/views/snapshots/snapthot.page';
import { useSnapshotQuery } from '@/src/entities/snapshots';
import { SnapshotsPage } from '@/src/views/snapshots/snapshots.page';

export default async function Mainnet({
    params,
}: {
    params: { chainName: string };
}) {
    const Client = queryClient;
    await Client.prefetchQuery(
        useSnapshotQuery(params.chainName)
    );

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Styled.MainContainer>
                <SnapshotPage params={params.chainName} />
                {/* <SnapshotsPage /> */}
            </Styled.MainContainer>
        </HydrationBoundary>
    );
}
