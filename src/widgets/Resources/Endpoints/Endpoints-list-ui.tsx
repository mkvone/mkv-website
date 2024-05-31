'use client';
import { atom, useAtom } from 'jotai';
import { useEndpointsQuery } from '@/src/entities/endpoints';
import { Styled } from '@/src/shared/ui';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import stylex from '@stylexjs/stylex';
import {
    EndpointDetailsProps,
    EndpointItemProps,
} from './model';
import { useColor } from 'color-thief-react';
import { getTextColorFromBackgroundColor } from '@/src/shared/lib/utils/getTextColorFromBackgroundColor';
import { spacing } from '@/src/shared/tokens/spacing.stylex';
import { useTheme } from '@/src/features/theme';
import { isatty } from 'tty';
import Image from 'next/image';

const activeIndexAtom = atom<number | null>(null);

// 스타일 정의

// 컴포넌트 분리
const EndpointItem: React.FC<EndpointItemProps> = ({
    endpoint,
    index,
    isActive,
    onClick,
}) => {
    var {
        data: dominantColor,
        loading,
        error,
    } = useColor(endpoint.img_url, 'rgbString', {
        crossOrigin: 'anonymous',
        quality: 10,
    });
    const theme = useTheme();
    const textColor = dominantColor
        ? getTextColorFromBackgroundColor(dominantColor)
        : 'white';
    if (loading) return <div>Loading...</div>;
    if (error) dominantColor = 'black';

    return (
        <Styled.Container
            flexDirection="column"
            style={styles.ItemContainer(theme)}
        >
            <Styled.Text.H4
                style={styles.button(
                    theme,
                    dominantColor,
                    textColor,
                    isActive
                )}
                onClick={onClick}
            >
                <Styled.Wrapper
                    flexDirection="row"
                    justify="between"
                >
                    <Styled.Wrapper
                        flexDirection="row"
                        align="center"
                        gap="sm"
                    >
                        <Image
                            src={endpoint.img_url}
                            width={50}
                            height={50}
                            alt={endpoint.name}
                            {...stylex.props(
                                styles.img(dominantColor)
                            )}
                        />

                        {endpoint.name}
                    </Styled.Wrapper>
                    <div
                        {...stylex.props(
                            styles.indicator,
                            isActive &&
                                styles.indicatorExpanded
                        )}
                    >
                        ▼
                    </div>
                </Styled.Wrapper>
            </Styled.Text.H4>
            <EndpointDetails
                endpoint={endpoint}
                isActive={isActive}
                bg={dominantColor}
                color={textColor}
            />
        </Styled.Container>
    );
};

const EndpointDetails: React.FC<EndpointDetailsProps> = ({
    endpoint,
    isActive,
    bg,
    color,
}) => {
    const theme = useTheme();

    return (
        <div
            {...stylex.props(
                styles.details(theme, bg, color),
                isActive ? styles.detailsExpanded : {}
            )}
        >
            <Styled.Wrapper
                flexDirection="row"
                justify="between"
                align="center"
            >
                <Styled.Text.H5>RPC:</Styled.Text.H5>
                <Styled.Text.H5>
                    {endpoint.rpc}
                </Styled.Text.H5>
            </Styled.Wrapper>
            <Styled.Wrapper
                flexDirection="row"
                justify="between"
                align="center"
            >
                <Styled.Text.H5>REST API:</Styled.Text.H5>
                <Styled.Text.H5>
                    {endpoint.rest_api}
                </Styled.Text.H5>
            </Styled.Wrapper>
            <Styled.Wrapper
                flexDirection="row"
                justify="between"
                align="center"
            >
                <Styled.Text.H5>gRPC:</Styled.Text.H5>
                <Styled.Text.H5>
                    {endpoint.grpc}
                </Styled.Text.H5>
            </Styled.Wrapper>
        </div>
    );
};

export const EndpointsListUI: React.FC = () => {
    const {
        data: endpoints,
        isLoading,
        isError,
    } = useQuery(useEndpointsQuery());
    const [activeIndex, setActiveIndex] =
        useAtom(activeIndexAtom);

    const toggleAccordion = (index: number) =>
        setActiveIndex(
            activeIndex === index ? null : index
        );

    if (isLoading) return <div>Loading...</div>;
    if (isError || !endpoints)
        return <div>Error loading endpoints</div>;

    return (
        <Styled.Container
            style={styles.container}
            flexDirection="column"
            align="center"
            gap="md"
        >
            {endpoints.map((endpoint, index) => (
                <EndpointItem
                    key={index}
                    endpoint={endpoint}
                    index={index}
                    isActive={activeIndex === index}
                    onClick={() => toggleAccordion(index)}
                />
            ))}
        </Styled.Container>
    );
};
const styles = stylex.create({
    container: {
        // padding: '8px 16px',
    },
    button: (theme, bg, color, active) => ({
        padding: '10px 15px',
        cursor: 'pointer',
        ':hover': {
            // backgroundColor: '#e2e2e2',
            backgroundColor: color,
            color: bg,
        },
        backgroundColor: active ? color : bg,
        color: active ? bg : color,
        borderRadius: spacing.xxs,
        transform:
            'background-color 1s ease-in-out color 1s ease-in-out',
        boxShadow:
            theme === 'light'
                ? '0 0 10px rgba(0, 0, 0, 0.5)'
                : '0 0 10px rgba(255, 255, 255, 1)',
    }),
    details: (theme, bg, color) => ({
        padding: '0 20px',
        boxShadow:
            theme === 'light'
                ? '0 2px 5px rgba(0, 0, 0, 0.5)'
                : '0 2px 5px rgba(255, 255, 255, 1)',
        borderRadius: '5px',
        overflow: 'hidden',
        maxHeight: '0', // Start with no content showing
        // opacity: 0, // Start fully transparent
        // transition: 'max-height 0.5s ease-in-out',
        transition: 'all 0.8s ease',
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.sm,
        backgroundColor: bg,
        color: color,
    }),
    detailsExpanded: {
        padding: '10px 20px',
        // opacity: 1, // Fully visible
        maxHeight: '500px', // Maximum height when expanded (adjust based on content)

        transition: 'all 1s ease',
    },
    text: {
        fontSize: '14px',
    },
    ItemContainer: (theme) => ({
        width: '80vw',
    }),
    img: (bg) => ({
        borderRadius: '50%',
        // border: '1px solid black',
        width: spacing.md,
        height: spacing.md,
        backgroundColor: bg,
    }),
    indicator: {
        transition: 'transform 0.3s ease-in-out', // Smooth transition for transform property
        display: 'inline-block', // Ensure the icon behaves like a block element for transformations
    },
    indicatorExpanded: {
        transform: 'rotate(180deg)', // Rotate the icon 180 degrees when expanded
    },
});
