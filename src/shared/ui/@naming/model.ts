import { StyleXStyles } from '@stylexjs/stylex';

export type StyleXProps = {
    style?: StyleXStyles;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
};
