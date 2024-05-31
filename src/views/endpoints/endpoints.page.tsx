'use client';
import { useTheme } from '@/src/features/theme';

import { Styled } from '@/src/shared/ui';

import { EndpointsListUI } from '@/src/widgets/Resources/Endpoints/Endpoints-list-ui';
import stylex from '@stylexjs/stylex';

export const EndpointsPage = () => {
    const theme = useTheme();
    return (
        <Styled.Container
            flexDirection="column"
            style={styles.container(theme)}
            align="center"
            justify="center"
            gap="md"
        >
            <Styled.Text.H3>
                Public Endpoints
            </Styled.Text.H3>
            <Styled.Text.P style={styles.context}>
                MKV provides public RCP, gRPC, and API
                endpoints for all the blockchains we
                validate.
            </Styled.Text.P>
            <EndpointsListUI />
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
