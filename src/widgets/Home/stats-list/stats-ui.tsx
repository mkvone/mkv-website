'use client';

import { useStatsQuery } from '@/src/entities/stats';

import {
    useQuery,
    useSuspenseQuery,
} from '@tanstack/react-query';
import { spacing } from '../../../shared/tokens/spacing.stylex';
import { text } from '../../../shared/tokens/fonts.stylex';
import { colors } from '../../../shared/tokens/colors.stylex';
import { useTheme } from '@/src/features/theme';
import stylex from '@stylexjs/stylex';
import { useInView } from 'react-intersection-observer'; // Optional, for triggering animation when in view
import CountUp from 'react-countup';

export const StatsList = () => {
    // const { data } = useSuspenseQuery(useStatsQuery());
    const { data } = useQuery(useStatsQuery());

    const theme = useTheme();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section
            {...stylex.props(
                styles.section(theme),
                styles.dividerBottom(theme),
                styles.dividerTop(theme)
            )}
        >
            <div {...stylex.props(styles.title(theme))}>
                validation stats
            </div>
            <div
                {...stylex.props(styles.gridWrapper(theme))}
            >
                <div
                    {...stylex.props(
                        styles.gridItem(theme)
                    )}
                >
                    <p
                        {...stylex.props(
                            styles.gridItemTitle(theme)
                        )}
                    >
                        Chains operating
                    </p>
                    <p
                        {...stylex.props(
                            styles.gridItemValue(theme)
                        )}
                    >
                        <CountUp
                            end={
                                data?.chains_operating || 0
                            }
                            duration={2.5}
                            //////start={0}
                            useEasing={true}
                            redraw={inView}
                        />
                    </p>{' '}
                </div>
                <div
                    {...stylex.props(
                        styles.gridItem(theme)
                    )}
                >
                    <p
                        {...stylex.props(
                            styles.gridItemTitle(theme)
                        )}
                    >
                        Uptime
                    </p>
                    <p
                        {...stylex.props(
                            styles.gridItemValue(theme)
                        )}
                    >
                        <CountUp
                            end={
                                data?.uptime_avg
                                    ? Math.trunc(
                                          data.uptime_avg *
                                              100
                                      ) / 100
                                    : 0
                            }
                            suffix=" %"
                            decimals={2} // Specify two decimal places
                            duration={1.5}
                            //////start={0}
                            useEasing={true}
                            redraw={inView}
                        />
                    </p>
                </div>
                <div
                    {...stylex.props(
                        styles.gridItem(theme)
                    )}
                >
                    <p
                        {...stylex.props(
                            styles.gridItemTitle(theme)
                        )}
                    >
                        Validator&apos;s value
                    </p>
                    <p
                        {...stylex.props(
                            styles.gridItemValue(theme)
                        )}
                    >
                        <CountUp
                            end={
                                data?.staked_value_avg || 0
                            }
                            prefix="$"
                            duration={1.5}
                            separator=","
                            //////start={0}
                            useEasing={true}
                            redraw={inView}
                        />
                    </p>
                </div>
                <div
                    {...stylex.props(
                        styles.gridItem(theme)
                    )}
                >
                    <p
                        {...stylex.props(
                            styles.gridItemTitle(theme)
                        )}
                    >
                        Delegators
                    </p>
                    <p
                        {...stylex.props(
                            styles.gridItemValue(theme)
                        )}
                    >
                        <CountUp
                            end={data?.delegators || 0}
                            suffix="+"
                            duration={2.5}
                            //////start={0}
                            useEasing={true}
                            redraw={inView}
                        />
                    </p>{' '}
                </div>
            </div>
        </section>
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

        // borderWidth: 1,
        // borderColor: 'red',
        // borderStyle: 'solid',
    }),
    dividerTop: (theme) => ({
        borderTop: theme
            ? `2px solid ${colors.GRAY50}`
            : `1px solid ${colors.GRAY50}`,
        marginTop: spacing.xs,
        transition: 'border 0.5s ease',
    }),
    dividerBottom: (theme) => ({
        borderBottom: theme
            ? `2px solid ${colors.GRAY50}`
            : `1px solid ${colors.GRAY50}`,
        marginBottom: spacing.xs,
        transition: 'border 0.5s ease',
    }),
    dividerRight: (theme) => ({
        borderRight: '1px solid #e6e6e6',
        marginRight: spacing.xs,
    }),
    gridWrapper: (theme) => ({
        display: 'grid',
        // gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateColumns:
            'repeat(auto-fit, minmax(75px, auto))',
        gap: spacing.sm,
    }),
    gridItem: (theme) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: spacing.md,
        borderRadius: spacing.sm,
        gap: spacing.sm,
    }),
    title: (theme) => ({
        textAlign: 'center',
        fontSize: text.h3,
        color:
            theme === 'light'
                ? colors.CORE_RED
                : colors.CORE_GREEN,
    }),
    gridItemTitle: (theme) => ({
        fontSize: text.p,
    }),
    gridItemValue: (theme) => ({
        fontSize: text.h4,
    }),
});
