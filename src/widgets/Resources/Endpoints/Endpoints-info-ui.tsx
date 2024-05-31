'use client';
import { useTheme } from '@/src/features/theme';
import { spacing } from '@/src/shared/tokens/spacing.stylex';
import { Styled } from '@/src/shared/ui';
import stylex from '@stylexjs/stylex';
import Image from 'next/image';
import Link from 'next/link';

export const EndpointsInfoUI = () => {
    const theme = useTheme();
    return (
        <Styled.Container
            flexDirection="row"
            align="center"
            justify="center"
            style={styles.section(theme)}
            // style={styles.section(theme)}
        >
            <Styled.Wrapper
                flexDirection="column"
                // align="center"
                gap="sm"
                style={styles.wrapper}
            >
                <Styled.Text.H3>
                    PUBLIC ENDPOINT
                </Styled.Text.H3>
                <Styled.Text.P>
                    MKV provides public RCP, gRPC, and API
                    endpoints for all the blockchains we
                    validate.
                </Styled.Text.P>

                <Link href="/endpoints">
                    {theme === 'light' ? (
                        <Styled.Button color="dark">
                            View
                        </Styled.Button>
                    ) : (
                        <Styled.Button color="light">
                            View
                        </Styled.Button>
                    )}
                </Link>
            </Styled.Wrapper>
            <Styled.Wrapper style={styles.imageContainer}>
                <Image
                    src="/landing/endpoints.png"
                    width={500}
                    height={500}
                    alt="endpoints"
                    {...stylex.props(styles.image)}
                />
            </Styled.Wrapper>
        </Styled.Container>
    );
};

const styles = stylex.create({
    section: (theme) => ({
        width: '80vw',

        '@media (max-width: 1024px)': {
            flexDirection: 'column',
        },

        boxShadow:
            theme === 'light'
                ? '0 10px 5px -5px rgba(0, 0, 0, 0.5)' // 하단에만 그림자 적용
                : '0 10px 5px -5px rgba(255, 255, 255, 1)', // 하단에만 그림자 적용
    }),
    imageContainer: {
        width: '100%',
        '@media (max-width: 1024px)': {
            width: '50%',
        },
        '@media (max-width: 600px)': {
            width: '35%',
        },
    },
    image: {
        width: '100%',
        // height: 'auto',
        // animation: `${rotate} 10s linear infinite`,
    },

    wrapper: {
        // alignItems: 'center',
        padding: spacing.lg,
    },
});
