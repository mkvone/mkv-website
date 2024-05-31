import { useValidatorsQuery } from '@/src/entities/validators';
import { StakingPage } from '@/src/views/staking/staking.page';
import { queryClient } from '@/src/shared/lib/react-query';
import { Styled } from '@/src/shared/ui';
import {
    HydrationBoundary,
    dehydrate,
} from '@tanstack/react-query';
import { SnapshotsPage } from '@/src/views/snapshots/snapshots.page';

export default async function Page() {
    return (
        <Styled.MainContainer>
            <SnapshotsPage />
        </Styled.MainContainer>
    );
}
