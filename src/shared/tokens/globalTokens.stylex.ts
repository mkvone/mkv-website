import stylex from '@stylexjs/stylex';
import { colors } from './colors.stylex';
import { text } from './fonts.stylex';
import { spacing } from './spacing.stylex';
export const globalTokens = stylex.defineVars({
    fontMono: [
        'ui-monospace',
        'Menlo',
        'Monaco',
        '"Cascadia Mono"',
        '"Segoe UI Mono"',
        '"Roboto Mono"',
        '"Oxygen Mono"',
        '"Ubuntu Monospace"',
        '"Source Code Pro"',
        '"Fira Mono"',
        '"Droid Sans Mono"',
        '"Courier New"',
        'monospace',
    ].join(', '),
    fontSans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
    ].join(', '),
});

export const scales = stylex.defineVars({
    small: 'scale(0.95)',
    medium: 'scale(1)',
    large: 'scale(1.2)',
});
