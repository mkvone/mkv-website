'use client';
import stylex from '@stylexjs/stylex';
import { spacing } from '../../tokens/spacing.stylex';
import { colors } from '../../tokens/colors.stylex';
import { StyleXProps } from './model';
import { on } from 'events';
import { useTheme } from '@/src/features/theme/useTheme';

interface BaseComponentProps extends StyleXProps {
    flexDirection?:
        | 'column'
        | 'row'
        | 'column-reverse'
        | 'row-reverse'
        | 'initial'
        | 'inherit'
        | 'unset';
    gap?:
        | 'xxxs'
        | 'xxs'
        | 'xs'
        | 'sm'
        | 'md'
        | 'lg'
        | 'xl'
        | 'xxl'
        | 'xxxl'
        | 'xxxxl';
    align?:
        | 'center'
        | 'start'
        | 'end'
        | 'stretch'
        | 'baseline';
    justify?:
        | 'center'
        | 'start'
        | 'end'
        | 'between'
        | 'around'
        | 'evenly';
    wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}

export const MainContainer = ({
    style,
    children,
}: StyleXProps) => {
    const theme = useTheme();
    return (
        <div {...stylex.props(styles.main(theme), style)}>
            {children}
        </div>
    );
};
export const BaseComponent = ({
    children,
    flexDirection,
    style,
    gap,
    align,
    justify,
    wrap,
    onClick,
}: BaseComponentProps) => {
    return (
        <div
            {...stylex.props(
                flexDirection &&
                    styles.flexDirection(flexDirection),
                align && styles.align(align),
                justify && styles.justify(justify),
                gap && styles.gap(gap),
                wrap && styles.wrap(wrap),

                style
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

const styles = stylex.create({
    main: (theme) => ({
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        minWidth: '100vw',
        // justifyContent: 'space-between',
        backgroundImage:
            theme === 'light'
                ? colors.BG_WHITE
                : colors.BG_BLACK,
        color:
            theme === 'light'
                ? colors.GRAY900
                : colors.WHITE_100,
        transition: 'background 1s ease, color 2s ease',
        paddingTop: spacing.lg,
        paddingRight: 'auto',
        paddingLeft: 'auto',
    }),

    flexDirection: (direction) => ({
        display: 'flex',
        flexDirection:
            direction === 'column'
                ? 'column'
                : direction === 'row'
                ? 'row'
                : direction === 'column-reverse'
                ? 'column-reverse'
                : direction === 'row-reverse'
                ? 'row-reverse'
                : direction === 'initial'
                ? 'initial'
                : direction === 'inherit' && 'inherit',
    }),
    align: (align) => ({
        alignItems:
            align === 'center'
                ? 'center'
                : align === 'start'
                ? 'flex-start'
                : align === 'end' && 'flex-end',
    }),
    justify: (justify) => ({
        justifyContent:
            justify === 'center'
                ? 'center'
                : justify === 'start'
                ? 'flex-start'
                : justify === 'end'
                ? 'flex-end'
                : justify === 'between'
                ? 'space-between'
                : justify === 'around'
                ? 'space-around'
                : justify === 'evenly' && 'space-evenly',
    }),
    wrap: (wrap) => ({
        flexWrap:
            wrap === 'wrap'
                ? 'wrap'
                : wrap === 'nowrap'
                ? 'nowrap'
                : wrap === 'wrap-reverse' && 'wrap-reverse',
    }),
    gap: (gap) => ({
        gap:
            gap === 'xxxs'
                ? spacing.xxxs
                : gap === 'xxs'
                ? spacing.xxs
                : gap === 'xs'
                ? spacing.xs
                : gap === 'sm'
                ? spacing.sm
                : gap === 'md'
                ? spacing.md
                : gap === 'lg'
                ? spacing.lg
                : gap === 'xl'
                ? spacing.xl
                : gap === 'xxl'
                ? spacing.xxl
                : gap === 'xxxl'
                ? spacing.xxxl
                : gap === 'xxxxl' && spacing.xxxxl,
    }),
});
