'use client';
import { useTheme } from '@/src/features/theme';
import { Styled } from '@/src/shared/ui';
import stylex from '@stylexjs/stylex';
import Image from 'next/image';
import { spacing } from '../../../shared/tokens/spacing.stylex';
import { text } from '../../../shared/tokens/fonts.stylex';
import { colors } from '../../../shared/tokens/colors.stylex';
export const IntroUi = () => {
    const theme = useTheme();

    return (
        <Styled.Container
            className=""
            style={
                (styles.dividerBottom(theme),
                styles.introcontainer(theme))
            }
        >
            <Styled.Container style={styles.introwrapper}>
                <Styled.Text.H3>
                    Trusted & Secure Validator
                </Styled.Text.H3>
                <Styled.Text.P>
                    MKV.one operates validators on multiple
                    POS (Proof of Stake) network blockchains
                    and provides snapshots and public
                    endpoints.
                </Styled.Text.P>
            </Styled.Container>
            <Styled.Wrapper style={styles.introimgwrapper}>
                <Image
                    src="/landing/landing1.webp"
                    alt="page1"
                    layout="responsive"
                    width={500}
                    height={500}
                    {...stylex.props(styles.img(theme))}
                />
            </Styled.Wrapper>
        </Styled.Container>
    );
};
const styles = stylex.create({
    introcontainer: (theme) => ({
        display: 'flex',
        flexWrap: 'wrap',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        '@media (max-width: 768px)': {
            flexDirection: 'column',
        },
        padding: spacing.md,
    }),

    introwrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '40%',
        gap: spacing.md,
        paddingRight: spacing.sm,
        '@media (max-width: 768px)': {
            width: '100%', // 모바일 환경에서 너비 조정
            paddingRight: 0, // 모바일 환경에서 패딩 제거
            paddingBottom: spacing.md, // 모바일 환경에서 패딩 추가
        },
    },
    introimgwrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        '@media (max-width: 768px)': {
            width: '100%', // 모바일 환경에서 너비 조정
        },
    },
    img: (theme) => ({
        opacity: theme  ? 0.8 : 0.5,
        transition: 'opacity 1s ease',
        width: '60%',
        '@media (max-width: 768px)': {
            width: '100%', // 모바일 환경에서 너비 조정
        },
    }),
    testborder: {
        borderWidth: '5px',
        borderColor: 'red',
        borderStyle: 'solid',
    },
    introHeader: (theme) => ({
        fontSize: text.h3,
    }),
    introParagraph: (theme) => ({
        fontSize: text.p,
    }),
    dividerBottom: (theme) => ({
        borderBottom:
            theme 
                ? `2px solid ${colors.GRAY50}`
                : `1px solid ${colors.GRAY50}`,
        marginBottom: spacing.xs,
        transition: 'border 0.5s ease',
        paddingBottom: spacing.md,
    }),
});
