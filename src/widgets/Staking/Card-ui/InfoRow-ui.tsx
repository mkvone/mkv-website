'use client';
import { Styled } from '@/src/shared/ui';
import { InfoRowProps } from './model';
import stylex from '@stylexjs/stylex';
import { useTheme } from '@/src/features/theme';
import { text } from '../../../shared/tokens/fonts.stylex';
import { colors } from '../../../shared/tokens/colors.stylex';
import { useState } from 'react';
export const InfoRow = ({
    label,
    value,
    isChain = false,
    copy = false,
}: InfoRowProps) => {
    const theme = useTheme();

    return (
        <Styled.Container
            flexDirection="row"
            justify="between"
            align="center"
            style={[styles.Container, styles.ellipsis]}
        >
            {isChain ? (
                <>
                    <Styled.Text.H5
                        style={styles.ChainLabel}
                    >
                        {label}
                    </Styled.Text.H5>
                    <Styled.Text.P
                        style={styles.ChainValue(copy)}
                    >
                        {value}
                    </Styled.Text.P>
                </>
            ) : (
                <>
                    <Styled.Text.H4 style={styles.Label}>
                        {label}
                    </Styled.Text.H4>
                    <Styled.Text.H5
                        style={styles.Value(copy)}
                    >
                        {value}
                    </Styled.Text.H5>
                </>
            )}
        </Styled.Container>
    );
};

const styles = stylex.create({
    Container: {
        minWidth: '100%',
        maxWidth: '100%',
        // flexWrap: 'wrap', // flex-wrap 추가
        '@media (max-width: 768px)': {
            flexWrap: 'wrap',
        },
    },
    ChainLabel: {
        width: '50%',
        textAlign: 'left',
        minWidth: '50%',
        maxWidth: '50%',
        '@media (max-width: 768px)': {
            width: '100%', // 작은 화면에서는 전체 너비 사용
            minWidth: '100%',
            maxWidth: '100%',
        },
    },
    ChainValue: (copy: boolean) => ({
        width: '50%',
        textAlign: 'right',
        minWidth: '50%',
        maxWidth: '50%',
        '@media (max-width: 768px)': {
            width: '100%', // 작은 화면에서는 전체 너비 사용
            minWidth: '100%',
            maxWidth: '100%',
            textAlign: 'left', // 작은 화면에서는 왼쪽 정렬
        },
        cursor: 'pointer',
    }),
    tooltip: {
        visibility: 'hidden',
        width: '120px',
        backgroundColor: 'black',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '6px',
        padding: '5px 0',
        position: 'absolute',
        zIndex: '1',
        bottom: '125%',
        left: '50%',
        marginLeft: '-60px',

        ':hover': {
            visibility: 'visible', // Show the tooltip only on hover
        },
    },

    Label: {
        width: '30%',
        textAlign: 'left',
        minWidth: '30%',
        maxWidth: '30%',
        '@media (max-width: 768px)': {
            width: '100%', // 작은 화면에서는 전체 너비 사용
            minWidth: '100%',
            maxWidth: '100%',
        },
    },
    Value: (copy) => ({
        width: '50%',
        textAlign: 'right',
        minWidth: '50%',
        maxWidth: '50%',
        '@media (max-width: 768px)': {
            width: '100%', // 작은 화면에서는 전체 너비 사용
            minWidth: '100%',
            maxWidth: '100%',
            textAlign: 'left', // 작은 화면에서는 왼쪽 정렬
        },
        pointer: 'pointer',
    }),
    ellipsis: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
    },
    tx: (theme) => ({
        color: theme ? colors.GRAY200 : colors.WHITE_900,
    }),
});
