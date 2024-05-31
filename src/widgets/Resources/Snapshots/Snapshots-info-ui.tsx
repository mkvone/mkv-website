'use client';
import { useTheme } from '@/src/features/theme';
import { spacing } from '@/src/shared/tokens/spacing.stylex';
import { Styled } from '@/src/shared/ui';
import stylex from '@stylexjs/stylex';
import Image from 'next/image';
import Link from 'next/link';

export const SnapshotsInfoUI = () => {
    const theme = useTheme();
    return (
        <Styled.Container
            flexDirection="row"
            align="center"
            justify="center"
            style={styles.section(theme)}
        >
            <Styled.Wrapper style={styles.imageContainer}>
                <Image
                    src="/landing/snapshots.png"
                    width={500}
                    height={500}
                    alt="Snapshots"
                    {...stylex.props(styles.image)}
                />
            </Styled.Wrapper>

            <Styled.Wrapper
                flexDirection="column"
                // align="center"
                gap="sm"
                style={styles.wrapper}
            >
                <Styled.Text.H3>SNAPSHOT</Styled.Text.H3>
                <Styled.Text.P>
                    MKV snapshots significantly reduce the
                    time needed to resynchronize nodes to
                    the latest blocks. This is accomplished
                    by creating multiple compressed archives
                    provided by high-performance services.
                </Styled.Text.P>
                <Styled.Text.P>
                    Services are critical for service
                    providers who need fast deployment or
                    fast recovery of existing services,
                    including validators.
                </Styled.Text.P>
                <Link href="/snapshots">
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
        </Styled.Container>
    );
};

const styles = stylex.create({
    section: (theme) => ({
        width: '80%',
        // height: '50vh',
        '@media (max-width: 1024px)': {
            flexDirection: 'column',
        },
        // paddingLeft: spacing.lg,
        // paddingRight: spacing.lg,
        // paddingBottom: spacing.lg,

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
        height: 'auto',
    },

    wrapper: {
        // alignItems: 'center',
        padding: spacing.lg,
    },
});
