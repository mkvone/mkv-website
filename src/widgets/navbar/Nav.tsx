'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/src/features/theme';
import { ThemeToggle } from '@/src/features/theme';
import stylex from '@stylexjs/stylex';
import { colors } from '@/src/shared/tokens/colors.stylex';
import { spacing } from '@/src/shared/tokens/spacing.stylex';
import { text } from '@/src/shared/tokens/fonts.stylex';

const useStickyNav = (threshold = 50) => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () =>
            setIsSticky(window.scrollY > threshold);
        window.addEventListener('scroll', handleScroll);
        return () =>
            window.removeEventListener(
                'scroll',
                handleScroll
            );
    }, [threshold]);
    return isSticky;
};

export const Nav = () => {
    const theme = useTheme();
    const isSticky = useStickyNav();

    const [isDropdownVisible, setIsDropdownVisible] =
        useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <nav {...stylex.props(styles.nav(theme, isSticky))}>
            <Link
                {...stylex.props(
                    styles.brand(theme, isSticky)
                )}
                href={'/'}
            >
                <Image
                    src="/logo/mkv_logo2.png"
                    width={50}
                    height={50}
                    alt="Logo"
                    {...stylex.props(
                        styles.logo(theme, isSticky),
                        theme && styles.lightLogo(theme),
                        isSticky && styles.stickyLogo(theme)
                    )}
                />
                Metta Karuna Validator
            </Link>
            <div {...stylex.props(styles.navItems)}>
                {['/', '/staking'].map((path, index) => (
                    <Link
                        key={index}
                        href={path}
                        {...stylex.props(
                            styles.link(theme, isSticky)
                        )}
                    >
                        {['Home', 'Staking'][index]}
                    </Link>
                ))}

                <div
                    {...stylex.props(styles.linkContainer)}
                    onMouseEnter={() =>
                        setIsDropdownVisible(true)
                    }
                    onMouseLeave={() =>
                        setIsDropdownVisible(false)
                    }
                >
                    <Link
                        href="/resources"
                        {...stylex.props(
                            styles.link(theme, isSticky)
                        )}
                    >
                        Services{' '}
                    </Link>
                    {isDropdownVisible && (
                        <div
                            {...stylex.props(
                                styles.dropdown(theme)
                            )}
                        >
                            {' '}
                            <Link
                                href="/snapshots"
                                {...stylex.props(
                                    styles.dropdownLink(
                                        theme
                                    )
                                )}
                            >
                                Snapshots
                            </Link>
                            <Link
                                href="/endpoints"
                                {...stylex.props(
                                    styles.dropdownLink(
                                        theme
                                    )
                                )}
                            >
                                Endpoints
                            </Link>
                        </div>
                    )}
                </div>
                <ThemeToggle isSticky={isSticky} />
            </div>
        </nav>
    );
};

const styles = stylex.create({
    stickyLogo: (theme) => ({
        filter:
            theme === 'light'
                ? 'invert(0)'
                : 'invert(100%)',
    }),

    lightLogo: (theme) => ({
        filter:
            theme === 'light'
                ? 'invert(100%)'
                : 'invert(0)',
    }),
    nav: (theme, isSticky) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1rem',
        flexWrap: 'wrap',
        background: isSticky
            ? theme === 'light'
                ? colors.GRAY800
                : colors.GRAY10
            : theme === 'light'
            ? colors.GRAY10
            : colors.GRAY800,
        color: isSticky
            ? theme === 'light'
                ? colors.WHITE_100
                : colors.GRAY900
            : theme === 'light'
            ? colors.GRAY900
            : colors.WHITE_100,
        transition: 'background 1s ease',
        minHeight: '5rem',
        boxShadow: isSticky
            ? theme === 'light'
                ? '0 2px 5px rgba(255, 255, 255, 1)'
                : '0 2px 5px rgba(0, 0, 0, 0.5)'
            : theme === 'light'
            ? '0 2px 5px rgba(0, 0, 0, 0.5)'
            : '0 2px 5px rgba(255, 255, 255, 1)',

        position: isSticky ? 'sticky' : 'static',
        top: 0,
        zIndex: 1000,
        width: '100%',
        opacity: 0.9,
    }),
    brand: (theme, isSticky) => ({
        display: 'flex',
        alignItems: 'center',
        fontSize: text.h4,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: isSticky
            ? theme === 'light'
                ? colors.WHITE_100
                : colors.GRAY900
            : theme === 'light'
            ? colors.GRAY900
            : colors.WHITE_100,
        textDecoration: 'none',
    }),
    logo: (theme, isSticky) => ({
        filter: isSticky ? 'invert(100%)' : 'invert(0)',
    }),
    navItems: {
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        wrap: 'wrap',
    },
    link: (theme, isSticky) => ({
        padding: spacing.xxs,
        textDecoration: 'none',
        fontSize: text.p,
        color: isSticky
            ? theme === 'light'
                ? colors.WHITE_100
                : colors.GRAY900
            : theme === 'light'
            ? colors.GRAY900
            : colors.WHITE_100,
        ':hover': {
            color:
                theme === 'light'
                    ? colors.CORE_RED
                    : colors.CORE_GREEN,
        },
        ':active': {
            color:
                theme === 'light'
                    ? colors.CORE_RED
                    : colors.CORE_GREEN,
        },
    }),
    linkContainer: {
        position: 'relative',
        display: 'inline-block',
    },
    dropdown: (theme) => ({
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1001,
        padding: spacing.xxs,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        background:
            theme === 'light'
                ? colors.GRAY10
                : colors.GRAY800,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        borderRadius: spacing.sm,
        marginTop: spacing.xxs,
    }),
    dropdownLink: (theme) => ({
        padding: spacing.xxs,
        textDecoration: 'none',
        fontSize: text.p,
        color:
            theme === 'light'
                ? colors.GRAY900
                : colors.WHITE_100,
        ':hover': {
            color:
                theme === 'light'
                    ? colors.CORE_RED
                    : colors.CORE_GREEN,
        },
        ':active': {
            color:
                theme === 'light'
                    ? colors.CORE_RED
                    : colors.CORE_GREEN,
        },
    }),
});
