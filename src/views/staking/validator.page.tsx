'use client';
import stylex from '@stylexjs/stylex';
import { spacing } from '../../shared/tokens/spacing.stylex';
import Image from 'next/image';
import { text } from '../../shared/tokens/fonts.stylex';
import { useTheme } from '@/src/features/theme';
import { colors } from '../../shared/tokens/colors.stylex';
import { useQuery } from '@tanstack/react-query';
import { ErrorPage } from '../error/error.page';
import { Loading } from '../loading/loading.page';
import { useValidatorQuery } from '@/src/entities/validators';
import { StakingCardUI } from '@/src/widgets/Staking';
import { differenceInSeconds } from 'date-fns';
import { SkeletonStakingCard } from '@/src/widgets/Staking/Card-ui/staking-card-ui';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

type paramsProp = {
    chainName: string;
};
export const ValidatorPage = ({
    params,
}: {
    params: string;
}) => {
    const validatorsQueryConfig = useValidatorQuery(params); // Use the existing function to get the query config
    const { data, isLoading, error } = useQuery({
        ...validatorsQueryConfig,
        refetchInterval: 3000, // Refetch data every 3 seconds
    });

    const router = useRouter();
    useEffect(() => {
        if (error && !data) {
            router.push('/staking/error');
        }
    }, [error, data, router]);

    if (isLoading || !data) return <SkeletonStakingCard />;
    const ChainName = data.name;
    const ChainLogo = data.image;
    const ChainId: string = data.chain_id;
    const BlockHeight = data.block_height;
    const BlockTime = data.block_time;
    const Price = data.price;
    const Validator = data.validator;
    const Address = Validator.operator_addr;
    const Rank = Validator.rank;
    const VotingPower = Validator.voting_power;
    const Commission = Validator.commission.rate;
    const Symbol = data.ticker;
    return (
        <>
            <StakingCardUI
                ChainName={ChainName}
                ChainId={ChainId}
                ChainLogo={ChainLogo}
                BlockHeight={BlockHeight}
                BlockTime={BlockTime}
                Price={Price}
                Validator={Validator.description.moniker}
                Address={Address}
                Rank={Rank}
                VotinPower={VotingPower.toString()}
                Commission={Commission}
                Symbol={Symbol}
            />
        </>
    );
};
