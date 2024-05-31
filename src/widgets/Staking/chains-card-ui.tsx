import { ReactNode } from 'react';
import stylex from '@stylexjs/stylex';
import { spacing } from '../../shared/tokens/spacing.stylex';
import { text } from '../../shared/tokens/fonts.stylex';
import Link from 'next/link';
import Image from 'next/image';
import { Styled } from '@/src/shared/ui';
import { colors } from '../../shared/tokens/colors.stylex';

type StakingCardUIProps = {
    children?: ReactNode;
    theme: 'light' | 'dark';
    img: string;
    name: string;
    path: string;
    link: '/staking/' | '/snapshots/';
};
export function ChainsCardUI(props: StakingCardUIProps) {
    const theme = props.theme;
    const img = props.img;
    const name = props.name;
    const path: string = props.path;
    const link = props.link + path;
    return (
        <div {...stylex.props(styles.card(theme))}>
            <Image
                src={img}
                width={500}
                height={500}
                alt={name}
                {...stylex.props(styles.img(theme))}
            />
            {props.children}
            <div {...stylex.props(styles.chainName(theme))}>
                {name}
            </div>
            <Link href={link}>
                <Styled.Button color="primary" size="sm">
                    View
                </Styled.Button>
            </Link>
        </div>
    );
}

const styles = stylex.create({
    card: (theme) => ({
        width: '200px',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: spacing.md,

        gap: spacing.sm,
        borderRadius: spacing.sm,
        boxShadow:
            theme === 'light'
                ? '0 0 10px rgba(0, 0, 0, 0.5)'
                : '0 0 10px rgba(255, 255, 255, 1)',
        backgroundColor:
            theme === 'light'
                ? colors.GRAY10
                : colors.GRAY800,
    }),
    img: (theme) => ({
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor:
            theme === 'light' ? 'black' : 'black',
    }),
    chainName: (theme) => ({
        fontSize: text.h4,
        color: theme === 'light' ? 'red' : 'white',
    }),
    testBorder: {
        borderWidth: 1,
        borderColor: 'red',
        borderStyle: 'solid',
    },
});
