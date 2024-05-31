'use client';
import { useSnapshotsQuery } from '@/src/entities/snapshots';
import { useTheme } from '@/src/features/theme';
import { spacing } from '@/src/shared/tokens/spacing.stylex';

import { Styled } from '@/src/shared/ui';

import { EndpointsListUI } from '@/src/widgets/Resources/Endpoints/Endpoints-list-ui';
import { ChainsCardUI } from '@/src/widgets/Staking';
import stylex from '@stylexjs/stylex';
import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';

export const SnapshotsList = () => {
    const theme = useTheme();
    const { data } = useQuery(useSnapshotsQuery());

    return (
        <Styled.Wrapper style={styles.cardWrapper(theme)}>
            {' '}
            {data?.map((validator, index) => (
                <ChainsCardUI
                    key={index}
                    path={validator.path}
                    img={validator.img_url}
                    name={validator.name}
                    theme={theme}
                    link="/snapshots/"
                />
            ))}
        </Styled.Wrapper>
    );
};

const styles = stylex.create({
    cardWrapper: (theme) => ({
        display: 'grid',
        gridTemplateColumns:
            'repeat(auto-fill, minmax(200px, 1fr))',
        // gap: spacing.md,
        gridGap: spacing.md,
        padding: '0 10vw',
    }),
});
