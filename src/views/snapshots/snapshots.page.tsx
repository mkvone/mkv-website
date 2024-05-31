'use client';
import { useSnapshotsQuery } from '@/src/entities/snapshots';
import { useTheme } from '@/src/features/theme';
import { spacing } from '@/src/shared/tokens/spacing.stylex';

import { Styled } from '@/src/shared/ui';

import { SnapshotsList } from '@/src/widgets/Resources/Snapshots/Snapshots.list-ui';
import stylex from '@stylexjs/stylex';

export const SnapshotsPage = () => {
    const theme = useTheme();

    return (
        <Styled.Container flexDirection="column" gap="md">
            <Styled.Container
                flexDirection="column"
                style={styles.container(theme)}
                align="center"
                justify="center"
                gap="md"
            >
                <Styled.Text.H3>Snapshots</Styled.Text.H3>
                <Styled.Text.P style={styles.context}>
                    MKV snapshots significantly reduce the
                    time needed to resynchronize nodes to
                    the latest blocks. This is accomplished
                    by creating multiple compressed archives
                    provided by high-performance services.
                </Styled.Text.P>
                <Styled.Text.P style={styles.context}>
                    Services are critical for service
                    providers who need fast deployment or
                    fast recovery of existing services,
                    including validators.
                </Styled.Text.P>
            </Styled.Container>
            <SnapshotsList />
        </Styled.Container>
    );
};

const styles = stylex.create({
    container: (theme) => ({
        maxWidth: '100vw',
        // height: '50vh',
        // backgroundColor:
        //     theme === 'light'
        //         ? colors.GRAY10
        //         : colors.GRAY800,
    }),
    context: {
        width: '50%',
    },
});
