'use client';
import stylex from '@stylexjs/stylex';
import { spacing } from '../../shared/tokens/spacing.stylex';
import Image from 'next/image';
import { text } from '../../shared/tokens/fonts.stylex';
import { useTheme } from '@/src/features/theme';
import { colors } from '../../shared/tokens/colors.stylex';
import { useQuery } from '@tanstack/react-query';
import { useValidatorsQuery } from '@/src/entities/validators';
import { Styled } from '@/src/shared/ui';
import { ChainsCardUI } from '@/src/widgets/Staking';

export const StakingPage = () => {
    const theme = useTheme();
    const { data } = useQuery(useValidatorsQuery());

    return (
        <Styled.Container
            style={styles.section(theme)}
            flexDirection="column"
            justify="center"
            gap="md"
        >
            {' '}
            <Styled.Text.H3
                style={styles.sectionTitle(theme)}
            >
                Networks
            </Styled.Text.H3>
            <Styled.Wrapper
                style={styles.cardWrapper(theme)}
            >
                {' '}
                {data?.map((validator, index) => (
                    <ChainsCardUI
                        key={index}
                        path={validator.path}
                        img={validator.image}
                        name={validator.name}
                        theme={theme}
                        link="/staking/"
                    />
                ))}
            </Styled.Wrapper>
        </Styled.Container>
    );
};

const styles = stylex.create({
    section: (theme) => ({
        margin: spacing.lg,
        // padding: spacing.md,
        borderRadius: spacing.sm,
        padding: '0 10vw',
    }),
    testBorder: {
        borderWidth: 1,
        borderColor: 'red',
        borderStyle: 'solid',
    },

    cardWrapper: (theme) => ({
        display: 'grid',
        gridTemplateColumns:
            'repeat(auto-fill, minmax(200px, 1fr))',
        // gap: spacing.md,
        gridGap: spacing.md,
    }),

    sectionTitle: (theme) => ({
        textAlign: 'center',
        color:
            theme === 'light'
                ? colors.CORE_RED
                : colors.CORE_GREEN,
    }),
});
