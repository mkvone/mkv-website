'use client';

import { Styled } from '@/src/shared/ui';
import stylex from '@stylexjs/stylex';
import { spacing } from '../../../shared/tokens/spacing.stylex';
import {
    ChainSection,
    ValidatorSection,
} from './ChainSection-ui';
import { StakingCardUIProps } from './model';
import { useTheme } from '@/src/features/theme';
import { colors } from '../../../shared/tokens/colors.stylex';
import { SkeletonUI } from '@/src/shared/ui/@naming';

export const SkeletonStakingCard = () => {
    const theme = useTheme();
    return (
        <Styled.Wrapper
            align="center"
            justify="center"
            flexDirection="unset"
        >
            {' '}
            <Styled.Container
                flexDirection="column"
                style={styles.Main(theme)}
                gap="md"
            >
                <SkeletonUI
                    height={'40vh'}
                    width={'50vw'}
                />
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export const StakingCardUI = ({
    ChainName,
    ChainId,
    ChainLogo,
    BlockHeight,
    BlockTime,
    Price,
    Validator,
    Address,
    Rank,
    VotinPower,
    Commission,
    Symbol,
}: StakingCardUIProps) => {
    const theme = useTheme();

    return (
        <Styled.Wrapper
            align="center"
            justify="center"
            flexDirection="unset"
        >
            {' '}
            <Styled.Container
                flexDirection="column"
                style={styles.Main(theme)}
                gap="md"
            >
                <ChainSection
                    ChainId={ChainId}
                    ChainName={ChainName}
                    ChainLogo={ChainLogo}
                    BlockHeight={BlockHeight}
                    BlockTime={BlockTime}
                    Price={Price}
                />
                <ValidatorSection
                    Validator={Validator}
                    Address={Address}
                    Rank={Rank}
                    VotingPower={VotinPower}
                    Commission={Commission}
                    Symbol={Symbol}
                />
            </Styled.Container>
        </Styled.Wrapper>
    );
};

const styles = stylex.create({
    Main: (theme) => ({
        padding: spacing.md,
        margin: spacing.md,
        minWidth: '40vw',
        // width: '60vw',
        maxWidth: '60vw',
        borderRadius: spacing.sm,
        boxShadow:
            theme === 'light'
                ? '0 0 10px rgba(0, 0, 0, 0.5)'
                : '0 0 10px rgba(255, 255, 255, 1)',
        backgroundColor:
            theme === 'light'
                ? colors.GRAY10
                : colors.GRAY800,
        opacity: 0.9,
    }),
});
