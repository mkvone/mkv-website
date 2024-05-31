import stylex from '@stylexjs/stylex';
import {
    fontweight,
    text,
} from '../../tokens/fonts.stylex';
import { StyleXProps } from './model';

interface BaseComponentProps extends StyleXProps {
    letterSpacing?:
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
    wordSpacing?:
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
    textIndent?:
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
    textTransform?:
        | 'uppercase'
        | 'lowercase'
        | 'capitalize';
    fontWeight?:
        | 'thin'
        | 'extraLight'
        | 'light'
        | 'regular'
        | 'medium'
        | 'semiBold'
        | 'bold'
        | 'extraBold'
        | 'black';
    textAlign?: 'left' | 'center' | 'right';
}
export const H1 = ({
    style,
    children,
    onClick,
    fontWeight,
}: BaseComponentProps) => {
    return (
        <p
            {...stylex.props(
                styles.h1,
                styles.weight(fontWeight),
                style
            )}
            onClick={onClick}
        >
            {children}
        </p>
    );
};
export const H2 = ({
    style,
    children,
    onClick,
    fontWeight,
}: BaseComponentProps) => {
    return (
        <p
            {...stylex.props(
                styles.h2,
                styles.weight(fontWeight),
                style
            )}
            onClick={onClick}
        >
            {children}
        </p>
    );
};
export const H3 = ({
    style,
    children,
    onClick,
    fontWeight,
}: BaseComponentProps) => {
    return (
        <p
            {...stylex.props(
                styles.h3,
                styles.weight(fontWeight),
                style
            )}
            onClick={onClick}
        >
            {children}
        </p>
    );
};
export const H4 = ({
    style,
    children,
    onClick,
    fontWeight,
}: BaseComponentProps) => {
    return (
        <p
            {...stylex.props(
                styles.h4,
                styles.weight(fontWeight),
                style
            )}
            onClick={onClick}
        >
            {children}
        </p>
    );
};
export const H5 = ({
    style,
    children,
    onClick,
    fontWeight,
}: BaseComponentProps) => {
    return (
        <p
            {...stylex.props(
                styles.h5,
                styles.weight(fontWeight),
                style
            )}
            onClick={onClick}
        >
            {children}
        </p>
    );
};
export const P = ({
    style,
    children,
    onClick,
    fontWeight,
}: BaseComponentProps) => {
    return (
        <p
            {...stylex.props(
                styles.p,
                styles.weight(fontWeight),
                style
            )}
            onClick={onClick}
        >
            {children}
        </p>
    );
};
export const Sm = ({
    style,
    children,
    onClick,
    fontWeight,
}: BaseComponentProps) => {
    return (
        <p
            {...stylex.props(
                styles.sm,
                styles.weight(fontWeight),
                style
            )}
            onClick={onClick}
        >
            {children}
        </p>
    );
};
export const Xs = ({
    style,
    children,
    onClick,
    fontWeight,
}: BaseComponentProps) => {
    return (
        <p
            {...stylex.props(
                styles.xs,
                styles.weight(fontWeight),
                style
            )}
            onClick={onClick}
        >
            {children}
        </p>
    );
};
export const Xxs = ({
    style,
    children,
    onClick,
    fontWeight,
}: BaseComponentProps) => {
    return (
        <p
            {...stylex.props(
                styles.xxs,
                styles.weight(fontWeight),
                style
            )}
            onClick={onClick}
        >
            {children}
        </p>
    );
};

const styles = stylex.create({
    h1: {
        fontSize: text.h1,
    },
    h2: {
        fontSize: text.h2,
    },
    h3: {
        fontSize: text.h3,
    },
    h4: {
        fontSize: text.h4,
    },
    h5: {
        fontSize: text.h5,
    },
    p: {
        fontSize: text.p,
    },
    sm: {
        fontSize: text.sm,
    },
    xs: {
        fontSize: text.xs,
    },
    xxs: {
        fontSize: text.xxs,
    },
    weight: (weight) => ({
        lineHeight: 1.5,
        fontWeight:
            weight === 'thin'
                ? fontweight.thin
                : weight === 'extraLight'
                ? fontweight.extraLight
                : weight === 'light'
                ? fontweight.light
                : weight === 'regular'
                ? fontweight.regular
                : weight === 'medium'
                ? fontweight.medium
                : weight === 'semiBold'
                ? fontweight.semiBold
                : weight === 'bold'
                ? fontweight.bold
                : weight === 'extraBold'
                ? fontweight.extraBold
                : weight === 'black'
                ? fontweight.black
                : fontweight.regular,
    }),
});
