'use client';
import { useTheme } from '@/src/features/theme';
import stylex, { StyleXStyles } from '@stylexjs/stylex';
import { colors } from '../../tokens/colors.stylex';

export const SkeletonUI = ({
    height,
    width,
    style,
}: {
    height: number | string;
    width: number | string;
    style?: StyleXStyles;
}) => {
    const theme = useTheme();
    return (
        <div
            {...stylex.props(styles.skeleton(theme), style)}
            style={{ height, width }}
        />
    );
};

const skeletonLoadingDark = stylex.keyframes({
    '0%': {
        backgroundColor: colors.GRAY700,
    },
    '50%': {
        backgroundColor: colors.GRAY600,
    },
    '100%': {
        backgroundColor: colors.GRAY700,
    },
});
const skeletonLoadingLight = stylex.keyframes({
    '0%': {
        backgroundColor: '#e0e0e0',
    },
    '50%': {
        backgroundColor: '#f0f0f0',
    },
    '100%': {
        backgroundColor: '#e0e0e0',
    },
});
const styles = stylex.create({
    skeleton: (theme) => ({
        backgroundColor:
            theme === 'light' ? '#e0e0e0' : colors.GRAY700,
        borderRadius: '4px',
        animation: `${
            theme === 'light'
                ? skeletonLoadingLight
                : skeletonLoadingDark
        } 1.5s infinite`,
    }),
});
