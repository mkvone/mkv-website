'use client';
import { useEffect } from 'react';
import { ThemeType, themeAtom } from './themeAtom';
import { useAtom } from 'jotai';
import { spacing } from '@/src/shared/tokens/spacing.stylex';
import * as stylex from '@stylexjs/stylex';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const styles = stylex.create({
    button: {
        cursor: 'pointer',
        borderWidth: '0px',
        borderRadius: 5,
        background: {
            default: 'none',
            ':hover': 'rgba(0, 0, 0, 0.1)',
        },
        // padding: spacing.xxs,
        padding: 10,
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        transition: 'color 1s ease',
    },
    icon: (theme, isSticky) => ({
        color:
            theme === 'light' && isSticky
                ? 'white'
                : theme === 'dark' && isSticky
                ? 'black'
                : theme === 'light'
                ? 'black'
                : 'white',
        transition: 'color 1s ease',
    }),
});

export const ThemeToggle = ({
    isSticky,
}: {
    isSticky: boolean;
}) => {
    const [theme, setTheme] = useAtom(themeAtom);

    const toggleTheme = () => {
        const newTheme =
            theme === 'light' ? 'dark' : 'light';
        // localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    return (
        <button
            {...stylex.props(styles.button)}
            onClick={toggleTheme}
        >
            <span
                {...stylex.props(
                    styles.icon(theme, isSticky)
                )}
            >
                {theme === 'light' ? (
                    <MdLightMode />
                ) : (
                    <MdDarkMode />
                )}
            </span>
        </button>
    );
};
