'use client';

import { useTheme } from '@/src/features/theme';
import { colors } from '@/src/shared/tokens/colors.stylex';
import { spacing } from '@/src/shared/tokens/spacing.stylex';
import { Styled } from '@/src/shared/ui';
import stylex from '@stylexjs/stylex';
import Image from 'next/image';
import Link from 'next/link';
import { FaTelegramPlane } from 'react-icons/fa';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { FaTwitter } from 'react-icons/fa';

export const Footer = () => {
    const theme = useTheme();
    return (
        <footer>
            <Styled.Container
                flexDirection="row"
                style={styles.footer(theme)}
                justify="around"
                wrap="wrap"
                gap="md"
            >
                <Styled.Container flexDirection="column">
                    <Image
                        src="/logo/MKV_logo3.png"
                        alt="logo"
                        width={300}
                        height={150}
                    />
                    <Styled.Text.P fontWeight="bold">
                        © 2021 MKV. All rights reserved.
                    </Styled.Text.P>
                </Styled.Container>
                <Styled.Container
                    flexDirection="column"
                    gap="sm"
                >
                    <Styled.Text.H5 fontWeight="black">
                        Useful Links
                    </Styled.Text.H5>
                    <Styled.Container
                        flexDirection="column"
                        style={styles.linkItems}
                    >
                        <Link
                            href="/"
                            {...stylex.props(
                                styles.link(theme)
                            )}
                        >
                            {' '}
                            <Styled.Text.P>
                                Home
                            </Styled.Text.P>
                        </Link>

                        <Link
                            href="/snapshots"
                            {...stylex.props(
                                styles.link(theme)
                            )}
                        >
                            <Styled.Text.P>
                                Snapshots
                            </Styled.Text.P>
                        </Link>

                        <Link
                            href="/resources"
                            {...stylex.props(
                                styles.link(theme)
                            )}
                        >
                            <Styled.Text.P>
                                Services
                            </Styled.Text.P>
                        </Link>
                        <Link
                            href="/endpoints"
                            {...stylex.props(
                                styles.link(theme)
                            )}
                        >
                            <Styled.Text.P>
                                Endpoints
                            </Styled.Text.P>
                        </Link>
                        <Link
                            href="/snapshots"
                            {...stylex.props(
                                styles.link(theme)
                            )}
                        >
                            <Styled.Text.P>
                                Snapshots
                            </Styled.Text.P>
                        </Link>
                    </Styled.Container>
                </Styled.Container>
                <Styled.Container
                    flexDirection="column"
                    gap="sm"
                >
                    {' '}
                    <Styled.Text.H5 fontWeight="black">
                        Contact
                    </Styled.Text.H5>
                    <Styled.Container
                        flexDirection="row"
                        justify="between"
                        gap="sm"
                    >
                        <Link
                            href="https://t.me/wooseong_jung"
                            target="_blank"
                            {...stylex.props(
                                styles.icon(theme)
                            )}
                        >
                            <FaTelegramPlane
                                {...stylex.props(
                                    styles.img
                                )}
                            />
                        </Link>
                        <Link
                            href="https://github.com/mkvone"
                            target="_blank"
                            {...stylex.props(
                                styles.icon(theme)
                            )}
                        >
                            <TbBrandGithubFilled
                                {...stylex.props(
                                    styles.img
                                )}
                            />
                        </Link>
                        <Link
                            href="#"
                            {...stylex.props(
                                styles.icon(theme)
                            )}
                        >
                            {' '}
                            <FaTwitter
                                {...stylex.props(
                                    styles.img
                                )}
                            />
                        </Link>
                    </Styled.Container>
                </Styled.Container>
            </Styled.Container>
        </footer>
    );
};

const styles = stylex.create({
    footer: (theme) => ({
        transition: 'all 0.5s',
        boxShadow:
            theme === 'light'
                ? '0 2px 5px rgba(0, 0, 0, 0.5)'
                : '0 2px 5px rgba(255, 255, 255, 1)',
        backgroundColor:
            theme === 'light'
                ? colors.CORE_LIGHTCYAN
                : colors.GRAY800,

        backgroundImage:
            theme === 'light'
                ? colors.BG_WHITE
                : colors.BG_BLACK,
        color:
            theme === 'light'
                ? colors.GRAY900
                : colors.GRAY10,
        padding: `${spacing.md}`,
    }),
    icon: (theme) => ({
        color:
            theme === 'light'
                ? colors.GRAY900
                : colors.WHITE_100,
        padding: '10px',

        borderRadius: '50%',
        borderColor:
            theme === 'light'
                ? colors.GRAY900
                : colors.WHITE_100,
        borderWidth: 1,
        borderStyle: 'solid',
        display: 'flex',
        justifyContent: 'center',

        alignItems: 'center',
        ':hover': {
            color:
                theme === 'light'
                    ? colors.WHITE_100
                    : colors.CORE_BLUE,
            backgroundColor:
                theme === 'light'
                    ? colors.GRAY900
                    : colors.WHITE_100,
        },
    }),
    img: {
        width: '20px',
        height: '20px',
    },
    linkItems: {
        paddingLeft: spacing.sm,
    },
    link: (theme) => ({
        color:
            theme === 'light'
                ? colors.GRAY700
                : colors.WHITE_100,
        textDecoration: 'none',
        ':hover': {
            color:
                theme === 'light'
                    ? colors.CORE_RED
                    : colors.CORE_GREEN,
        },
    }),
});
