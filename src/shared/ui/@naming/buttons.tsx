import stylex from '@stylexjs/stylex';
import { colors } from '../../tokens/colors.stylex';
import { text } from '../../tokens/fonts.stylex';
import { spacing } from '../../tokens/spacing.stylex';
import { StyleXProps } from './model';

interface ButtonProps extends StyleXProps {
    color?:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'danger'
        | 'warning'
        | 'info'
        | 'light'
        | 'dark'
        | 'link';
    variant?: 'outline';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}
export function Button({
    children,
    color = 'primary',
    variant,
    size = 'sm',
    style,
}: ButtonProps) {
    return (
        <button
            {...stylex.props(
                styles.button,
                styles.buttonColor(color),
                styles.buttonSize(size),
                styles.buttonVariant(variant),
                style
            )}
        >
            {children}
        </button>
    );
}

const styles = stylex.create({
    button: {
        borderRadius: '0.25rem',
        cursor: 'pointer',
    },
    buttonColor: (color) => ({
        backgroundColor:
            color === 'primary'
                ? colors.CORE_BLUE
                : color === 'secondary'
                ? colors.CORE_LIGHTBLUE
                : color === 'success'
                ? colors.CORE_GREEN
                : color === 'danger'
                ? colors.CORE_RED
                : color === 'warning'
                ? colors.CORE_YELLOW
                : color === 'info'
                ? colors.CORE_BLUE
                : color === 'light'
                ? colors.WHITE_100
                : color === 'dark'
                ? colors.GRAY700
                : colors.GRAY700,
        color:
            color === 'primary'
                ? colors.WHITE_100
                : color === 'secondary'
                ? colors.CORE_BLUE
                : color === 'success'
                ? colors.WHITE_100
                : color === 'danger'
                ? colors.WHITE_100
                : color === 'warning'
                ? colors.GRAY900
                : color === 'info'
                ? colors.GRAY900
                : color === 'light'
                ? colors.GRAY900
                : color === 'dark'
                ? colors.WHITE_100
                : colors.WHITE_100,
        ':hover': {
            backgroundColor:
                color === 'primary'
                    ? colors.CORE_LIGHTBLUE
                    : color === 'secondary'
                    ? colors.CORE_BLUE
                    : color === 'success'
                    ? colors.CORE_LIGHTGREEN
                    : color === 'danger'
                    ? colors.CORE_LIGHTRED
                    : color === 'warning'
                    ? colors.CORE_LIGHTYELLOW
                    : color === 'info'
                    ? colors.CORE_LIGHTBLUE
                    : color === 'light'
                    ? colors.GRAY800
                    : color === 'dark'
                    ? colors.GRAY800
                    : colors.GRAY800,
        },
    }),
    buttonSize: (size) => ({
        padding:
            size === 'sm'
                ? spacing.xxs
                : size === 'md'
                ? spacing.xs
                : size === 'lg'
                ? spacing.sm
                : spacing.md,
        fontSize:
            size === 'sm'
                ? text.sm
                : size === 'md'
                ? text.p
                : size === 'lg'
                ? text.h5
                : size === 'xl'
                ? text.h4
                : text.h3,
    }),
    buttonVariant: (variant) => ({
        border:
            variant === 'outline'
                ? `1px solid ${colors.CORE_LIGHTBLUE}`
                : 'none',
    }),
});
