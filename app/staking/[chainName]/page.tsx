import { ValidatorPage } from '@/src/views/staking/validator.page';
import { Styled } from '@/src/shared/ui';
import { StakingPage } from '@/src/views/staking/staking.page';

import { queryClient } from '@/src/shared/lib/react-query';
import {
    HydrationBoundary,
    dehydrate,
} from '@tanstack/react-query';
import { useValidatorQuery } from '@/src/entities/validators';

export default async function Mainnet({
    params,
}: {
    params: { chainName: string };
}) {
    const Client = queryClient;
    await Client.prefetchQuery(
        useValidatorQuery(params.chainName)
    );
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Styled.MainContainer>
                <ValidatorPage params={params.chainName} />
                <StakingPage />
            </Styled.MainContainer>
        </HydrationBoundary>
    );
}
