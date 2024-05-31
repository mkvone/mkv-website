import { useValidatorsQuery } from '@/src/entities/validators';
import { StakingPage } from '@/src/views/staking/staking.page';
import { queryClient } from '@/src/shared/lib/react-query';
import { Styled } from '@/src/shared/ui';
import {
    HydrationBoundary,
    dehydrate,
} from '@tanstack/react-query';

export default async function Page() {
    return (
        <Styled.MainContainer>
            <StakingPage />
        </Styled.MainContainer>
    );
}
