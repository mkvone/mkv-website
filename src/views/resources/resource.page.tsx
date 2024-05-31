'use client';
import { useTheme } from '@/src/features/theme';
import { colors } from '@/src/shared/tokens/colors.stylex';
import { spacing } from '@/src/shared/tokens/spacing.stylex';
import { Styled } from '@/src/shared/ui';
import {
    EndpointsInfoUI,
    SnapshotsInfoUI,
} from '@/src/widgets/Resources';
import stylex from '@stylexjs/stylex';

export const ResourcePage = () => {
    const theme = useTheme();
    return (
        <Styled.Container
            flexDirection="column"
            style={styles.container(theme)}
            align="center"
            justify="between"
            gap="md"
            wrap="wrap"
        >
            <SnapshotsInfoUI />
            <EndpointsInfoUI />
        </Styled.Container>
    );
};

const styles = stylex.create({
    container: (theme) => ({
        maxWidth: '100vw',

        // backgroundColor:
        //     theme === 'light'
        //         ? colors.GRAY10
        //         : colors.GRAY800,
    }),
});
