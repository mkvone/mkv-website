'use client';
import { Styled } from '@/src/shared/ui';
import { text } from '../../shared/tokens/fonts.stylex';
import { spacing } from '../../shared/tokens/spacing.stylex';
import stylex from '@stylexjs/stylex';
import { LoadingUi } from '@/src/widgets/Loading/cube';

export const ErrorPage = () => {
    return (
        <Styled.MainContainer>
            <Styled.Container
                flexDirection="column"
                // justify="center"
                align="center"
                gap="xxxl"
                style={styles.container}
            >
                <LoadingUi />
                <Styled.Wrapper flexDirection="column">
                    <h1 {...stylex.props(styles.h1)}>
                        Unexpected error
                    </h1>
                    <p {...stylex.props(styles.p)}>
                        Something went wrong. Please try
                        again later.
                    </p>
                </Styled.Wrapper>
            </Styled.Container>
        </Styled.MainContainer>
    );
};
const styles = stylex.create({
    container: {
        paddingTop: spacing.xxl,
        // minHeight: '60vh',
    },
    h1: {
        fontSize: text.h2,
    },
    p: {
        fontSize: text.h5,
    },
});
