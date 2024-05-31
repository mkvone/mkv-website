'use client';
import stylex from '@stylexjs/stylex';

import { useQuery } from '@tanstack/react-query';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSnapshotQuery } from '@/src/entities/snapshots';
import { Styled } from '@/src/shared/ui';
import {
    SnapshotDocUI,
    SnapshotInfo,
    SnapshotTableUI,
} from '@/src/widgets/Resources';
import { colors } from '@/src/shared/tokens/colors.stylex';
import { useTheme } from '@/src/features/theme';

type paramsProp = {
    chainName: string;
};
export const SnapshotPage = ({
    params,
}: {
    params: string;
}) => {
    const theme = useTheme();
    const validatorsQueryConfig = useSnapshotQuery(params); // Use the existing function to get the query config
    const { data, isLoading, error } = useQuery({
        ...validatorsQueryConfig,
    });
    const router = useRouter();
    useEffect(() => {
        if (error && !data) {
            router.push('/snapshots/error');
        }
    }, [error, data, router]);

    if (isLoading || !data) return <></>;

    return (
        <Styled.Container
            flexDirection="column"
            gap="md"
            style={styles.page(theme)}
        >
            {' '}
            <Styled.Container
                justify="center"
                align="center"
                flexDirection="column"
                gap="sm"
            >
                <Styled.Text.H4 style={styles.title}>
                    {params} Node Snapshot
                </Styled.Text.H4>
                <SnapshotInfo params={params} />
                <SnapshotTableUI params={params} />
            </Styled.Container>{' '}
            <SnapshotDocUI params={params} />
        </Styled.Container>
    );
};

const styles = stylex.create({
    title: {
        textTransform: 'capitalize',
    },
    page: (theme) => ({
        // backgroundColor:
        //     theme === 'light'
        //         ? colors.GRAY10
        //         : colors.GRAY900,
    }),
    codesection: {
        padding: '0 10vw',
    },
});
