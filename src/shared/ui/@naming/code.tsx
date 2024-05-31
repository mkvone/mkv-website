import { useTheme } from '@/src/features/theme';
import { Styled } from '@/src/shared/ui';
import stylex from '@stylexjs/stylex';
import { StyleXProps } from './model';
import { spacing } from '../../tokens/spacing.stylex';
import { colors } from '../../tokens/colors.stylex';

export const CodeUi = ({
    children,
    style,
    className,
    onClick,
}: StyleXProps) => {
    const theme = useTheme();
    return (
        <Styled.Container
            style={styles.code(theme)}
            gap="xxxs"
        >
            {children}
        </Styled.Container>
    );
};

const styles = stylex.create({
    code: (theme) => ({
        display: 'flex',
        flexDirection: 'column',
        borderRadius: spacing.xs,
        padding: '1rem',
        width: '100%',
        height: '100%',
        overflowX: 'auto',
        backgroundColor:
            theme === 'light'
                ? colors.WHITE_900
                : colors.GRAY800,
        color:
            theme === 'light' ? 'black' : colors.WHITE_100,
        boxShadow:
            theme === 'light'
                ? '0 0 10px rgba(0, 0, 0, 0.5)'
                : '0 0 10px rgba(255, 255, 255, 1)',
    }),
});
