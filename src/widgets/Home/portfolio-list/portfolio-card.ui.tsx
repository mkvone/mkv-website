'use client';
import stylex from '@stylexjs/stylex';
import { useColor } from 'color-thief-react';
import { useState } from 'react';
import { spacing } from '../../../shared/tokens/spacing.stylex';
import { text } from '../../../shared/tokens/fonts.stylex';
import { colors } from '../../../shared/tokens/colors.stylex';
import { PortfolioListProps } from './portfolio-data';
import { getTextColorFromBackgroundColor } from '@/src/shared/lib/utils/getTextColorFromBackgroundColor';
import { SkeletonCard } from './portfolio-skelleton-card.ui';

export const PortfolioCard = ({
    name,
    chainId,
    img,
    description,
    theme,
    website,
}: PortfolioListProps) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const {
        data: dominantColor,
        loading,
        error,
    } = useColor(img, 'rgbString', {
        crossOrigin: 'anonymous',
        quality: 10,
    });
    const textColor = dominantColor
        ? getTextColorFromBackgroundColor(dominantColor)
        : 'white';

    if (loading || error) return <SkeletonCard />;

    return (
        <div
            {...stylex.props(styles.cardContainer(theme))}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                {...stylex.props(styles.link)}
            >
                <div
                    {...stylex.props(styles.card)}
                    style={{
                        transform: isFlipped
                            ? 'rotateY(180deg)'
                            : 'rotateY(0deg)',
                    }}
                >
                    <div
                        {...stylex.props(
                            styles.cardSide(theme),
                            styles.cardFront(theme)
                        )}
                    >
                        <h3
                            {...stylex.props(
                                styles.cardTitle(theme)
                            )}
                        >
                            {name}
                        </h3>
                        <p
                            {...stylex.props(
                                styles.cardDescription(
                                    theme
                                )
                            )}
                        >
                            {description}
                        </p>{' '}
                        <div
                            {...stylex.props(
                                styles.cardImage(img)
                            )}
                        />
                        <div
                            {...stylex.props(
                                styles.cardLink(theme)
                            )}
                        >
                            Visit Website &gt;{' '}
                        </div>
                    </div>
                    <div
                        {...stylex.props(
                            styles.cardSide(theme),
                            styles.cardBack(theme)
                        )}
                        style={{
                            backgroundColor: dominantColor,
                        }} // Apply the dominant color as background
                    >
                        {' '}
                        <h3
                            {...stylex.props(
                                styles.cardTitle(theme)
                            )}
                            style={{ color: textColor }}
                        >
                            {name}
                        </h3>{' '}
                        <p
                            {...stylex.props(
                                styles.cardDescription(
                                    theme
                                )
                            )}
                            style={{ color: textColor }}
                        >
                            {chainId}
                        </p>
                        <div
                            {...stylex.props(
                                styles.cardLink(theme)
                            )}
                            style={{ color: textColor }}
                        >
                            Visit Website &gt;{' '}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

const styles = stylex.create({
    testBorder: {
        borderWidth: 1,
        borderColor: 'red',
        borderStyle: 'solid',
    },
    link: {
        color: null,
    },
    cardTitle: (theme) => ({
        fontSize: text.h4,
        marginBottom: spacing.xs,
        color:
            theme === 'light'
                ? colors.GRAY900
                : colors.WHITE_900,
    }),
    cardChainId: (theme) => ({
        fontSize: text.p,
        // color: colors.GRAY700,
    }),
    cardDescription: (theme) => ({
        fontSize: text.p,
        // color: colors.GRAY600,
        color:
            theme === 'light'
                ? colors.GRAY800
                : colors.WHITE_900,
        fontWeight: 600,
    }),
    cardLink: (theme) => ({
        textAlign: 'end',
        fontSize: text.h5,
        color:
            theme === 'light'
                ? colors.GRAY700
                : colors.WHITE_900,
    }),
    cardContainer: (theme) => ({
        width: '400px',
        minHeight: '350px',
        perspective: '1500px', // 3D 효과를 위한 원근감 설정
    }),
    card: {
        width: '100%',
        height: '100%',
        position: 'relative',
        transition: 'transform 0.6s',
        transformStyle: 'preserve-3d', // 자식 요소의 3D 위치를 보존
        cursor: 'pointer',
    },
    cardSide: (theme) => ({
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden', // 뒷면이 보이지 않도록 설정
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '10px',
        fontSize: '20px',
        padding: spacing.md,
        gap: spacing.sm,
        boxShadow:
            theme === 'light'
                ? '0 0 10px rgba(0, 0, 0, 0.5)'
                : '0 0 10px rgba(255, 255, 255, 1)',
    }),

    cardImage: (img) => ({
        position: 'absolute',
        bottom: 0, // 하단에 이미지 위치
        left: 0,
        width: '30%', // 카드 너비에 맞게 설정
        height: '30%', // 카드 높이의 50% 차지
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '50%',
        filter: 'opacity(30%) blur(4px)', // 이미지에 블러 효과 적용
    }),

    cardFront: (theme) => ({}),
    cardBack: (theme) => ({
        // backgroundColor: theme  ? colors.GRAY700 : colors.GRAY50,
        // backgroundColor:
        //     theme === 'light' ? colors.CORE_RED : 'black',
        transform: 'rotateY(180deg)', // 뒷면을 뒤집어서 준비
        transition: 'transform 0.6s',
    }),
    cardHovered: (theme) => ({
        transform: 'rotateY(180deg)', // 카드 뒤집기
        transition: 'transform 0.6s',
    }),

    // Add this at the end of your styles definitions
});
