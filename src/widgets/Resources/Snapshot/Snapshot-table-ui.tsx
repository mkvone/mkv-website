import { useSnapshotQuery } from '@/src/entities/snapshots';
import { Styled } from '@/src/shared/ui';
import stylex from '@stylexjs/stylex';
import { useQuery } from '@tanstack/react-query';
import { FaCheckCircle } from 'react-icons/fa';
import { CiCircleCheck } from 'react-icons/ci';
import { FaCircleCheck } from 'react-icons/fa6';
import { colors } from '@/src/shared/tokens/colors.stylex';
import { useTheme } from '@/src/features/theme';
import { spacing } from '@/src/shared/tokens/spacing.stylex';

export const SnapshotTableUI = ({
    params,
}: {
    params: string;
}) => {
    const { data, isLoading, error } = useQuery(
        useSnapshotQuery(params)
    );
    const theme = useTheme();
    if (isLoading || !data) return <></>;

    // Convert height strings to numbers and find the max height
    const maxHeight = Math.max(
        ...data.files.map((file) => parseInt(file.height))
    );

    return (
        <table {...stylex.props(styles.table(theme))}>
            <tr {...stylex.props(styles.th(theme))}>
                <th {...stylex.props(styles.header(theme))}>
                    <Styled.Text.P>LATEST</Styled.Text.P>
                </th>
                <th {...stylex.props(styles.header(theme))}>
                    <Styled.Text.P>
                        BLOCK HEIGHT
                    </Styled.Text.P>
                </th>
                <th {...stylex.props(styles.header(theme))}>
                    {' '}
                    <Styled.Text.P>SIZE</Styled.Text.P>
                </th>
                <th {...stylex.props(styles.header(theme))}>
                    {' '}
                    <Styled.Text.P>TIMESTAMP</Styled.Text.P>
                </th>
                <th {...stylex.props(styles.header(theme))}>
                    {' '}
                    <Styled.Text.P>DOWNLOAD</Styled.Text.P>
                </th>
            </tr>
            {data.files.map((file, idx) => (
                <tr key={idx}>
                    <td
                        {...stylex.props(
                            styles.cell(theme)
                        )}
                    >
                        {parseInt(file.height) ===
                        maxHeight ? (
                            <Styled.Text.P>
                                {' '}
                                <FaCircleCheck
                                    {...stylex.props(
                                        styles.checkIcon
                                    )}
                                />
                            </Styled.Text.P>
                        ) : null}
                    </td>
                    <td
                        {...stylex.props(
                            styles.cell(theme)
                        )}
                    >
                        <Styled.Text.P>
                            {' '}
                            {Number(
                                file.height
                            ).toLocaleString()}
                        </Styled.Text.P>
                    </td>
                    <td
                        {...stylex.props(
                            styles.cell(theme)
                        )}
                    >
                        {' '}
                        <Styled.Text.P>
                            {' '}
                            {file.size}
                        </Styled.Text.P>
                    </td>
                    <td
                        {...stylex.props(
                            styles.cell(theme)
                        )}
                    >
                        {' '}
                        <Styled.Text.P>
                            {' '}
                            {file.date}
                        </Styled.Text.P>
                    </td>
                    <td
                        {...stylex.props(
                            styles.cell(theme)
                        )}
                    >
                        {' '}
                        <Styled.Text.P>
                            {' '}
                            <a
                                href={file.url}
                                download
                                {...stylex.props(
                                    styles.link
                                )}
                            >
                                {file.name}
                            </a>
                        </Styled.Text.P>
                    </td>
                </tr>
            ))}
        </table>
    );
};

const styles = stylex.create({
    table: (theme) => ({
        // width: '80vw',
        width: '100%',
        maxWidth: '80vw',

        overflowX: 'auto',

        marginBottom: '20px',
        borderCollapse: 'collapse',
        boxShadow:
            theme === 'light'
                ? '0 0 10px rgba(0, 0, 0, 0.5)'
                : '0 0 10px rgba(255, 255, 255, 1)',
        borderRadius: spacing.xxs,
        backgroundColor:
            theme === 'light'
                ? colors.WHITE_900
                : colors.GRAY800,
        color:
            theme === 'light' ? 'black' : colors.WHITE_100,
    }),
    th: (theme) => ({
        backgroundColor:
            theme === 'light'
                ? colors.GRAY50
                : colors.GRAY900,
        color:
            theme === 'light' ? 'black' : colors.WHITE_100,
    }),
    header: (theme) => ({
        fontWeight: 'bold',
        // padding: '10px 15px',
        padding: `${(spacing.xs, spacing.sm)}`,
        textAlign: 'left',
    }),
    cell: (theme) => ({
        padding: spacing.sm,
        borderTop: `1px solid ${colors.GRAY100}`,
        textDecoration: 'none',
        wordBreak: 'break-all',
    }),
    link: {
        textDecoration: 'none',
        color: colors.CORE_PURPLE,
        pointer: 'cursor',
    },
    checkIcon: {
        backgroundColor: 'white',
        color: 'green',
        borderRadius: '50%',
    },
});
