'use clinet';
import { spacing } from '../../../shared/tokens/spacing.stylex';
import { text } from '../../../shared/tokens/fonts.stylex';
import { colors } from '../../../shared/tokens/colors.stylex';
import stylex from '@stylexjs/stylex';
import { portfolioData } from './portfolio-data';
import { PortfolioCard } from './portfolio-card.ui';
import { useTheme } from '@/src/features/theme';
import { Styled } from '@/src/shared/ui';

// export const Home = withTheme(({ theme }) => {

export const PortfolioList = () => {
    const theme = useTheme();
    // Mainnet 데이터를 이름순으로 정렬
    const sortedMainnet = [...portfolioData.mainnet].sort(
        (a, b) => a.name.localeCompare(b.name)
    );
    // Testnet 데이터를 이름순으로 정렬
    const sortedTestnet = [...portfolioData.testnet].sort(
        (a, b) => a.name.localeCompare(b.name)
    );

    return (
        // <section {...stylex.props(styles.section(theme))}>
        <Styled.Container style={styles.section(theme)}>
            <Styled.Text.H1
                style={styles.sectionTitle(theme)}
            >
                Portfolio | Joined as the Validator
            </Styled.Text.H1>

            <Styled.Container
                style={styles.NetworkContainer(theme)}
            >
                <Styled.Text.H2
                    style={styles.NetworkName(theme)}
                >
                    Mainnet
                </Styled.Text.H2>
                <Styled.Wrapper
                    style={styles.cardWrapper(theme)}
                >
                    {sortedMainnet.map((item, index) => (
                        <PortfolioCard
                            key={index}
                            name={item.name}
                            chainId={item.chainId}
                            img={item.img}
                            description={item.description}
                            theme={theme}
                            website={item.website}
                        />
                    ))}
                </Styled.Wrapper>
            </Styled.Container>
            <Styled.Container
                style={styles.NetworkContainer(theme)}
            >
                <Styled.Text.H2
                    style={styles.NetworkName(theme)}
                >
                    Testnet
                </Styled.Text.H2>
                <Styled.Wrapper
                    style={styles.cardWrapper(theme)}
                >
                    {' '}
                    {sortedTestnet.map((item, index) => (
                        <PortfolioCard
                            key={index}
                            name={item.name}
                            chainId={item.chainId}
                            img={item.img}
                            description={item.description}
                            theme={theme}
                            website={item.website}
                        />
                    ))}
                </Styled.Wrapper>
            </Styled.Container>
        </Styled.Container>
        // </section>
    );
};

const styles = stylex.create({
    section: (theme) => ({
        display: 'flex',
        flexDirection: 'column',
        margin: spacing.lg,
        padding: spacing.md,
        borderRadius: spacing.sm,
        gap: spacing.sm,
    }),

    cardWrapper: (theme) => ({
        display: 'grid',
        gridTemplateColumns:
            'repeat(auto-fill, minmax(400px, 1fr))',
        gridGap: spacing.sm,
        width: '100vw',
        padding: '0 5vw',
    }),

    sectionTitle: (theme) => ({
        textAlign: 'center',
        fontSize: text.h3,
        color:
            theme === 'light'
                ? colors.CORE_RED
                : colors.CORE_GREEN,
    }),

    NetworkContainer: (theme) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center content horizontally
        justifyContent: 'center', // Center content vertically
        gap: spacing.md,
        width: '100%', // Take full width to center content correctly
    }),
    NetworkName: (theme) => ({
        fontSize: text.h4,
        textAlign: 'center',
    }),
});
