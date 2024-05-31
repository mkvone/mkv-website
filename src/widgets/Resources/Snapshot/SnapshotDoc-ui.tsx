import { useSnapshotQuery } from '@/src/entities/snapshots';
import { Styled } from '@/src/shared/ui';
import stylex from '@stylexjs/stylex';
import { useQuery } from '@tanstack/react-query';
import {
    AppCode,
    ConfigCode,
    DecompressCode,
    DownloadCode,
    ExecuteCode,
    PrerequisitesCode,
    ResetCode,
    StartNodeCode,
    StopNodeCode,
} from './Doc';
import { spacing } from '@/src/shared/tokens/spacing.stylex';
import { useTheme } from '@/src/features/theme';
import { colors } from '@/src/shared/tokens/colors.stylex';

export const SnapshotDocUI = ({
    params,
}: {
    params: string;
}) => {
    const theme = useTheme();

    const { data, isLoading, error } = useQuery(
        useSnapshotQuery(params)
    );
    if (isLoading || !data) return <></>;

    return (
        <Styled.Container
            flexDirection="column"
            justify="start"
            align="start"
            gap="sm"
            style={styles.section(theme)}
        >
            <Styled.Text.H3 style={styles.Title}>
                {params} Snapshot Server Setup
            </Styled.Text.H3>
            <Styled.Text.P>
                We make a snapshot of one node every 3
                hours. Then we delete all the previous
                snapshots to free up space on the file
                server.
            </Styled.Text.P>
            <Styled.Text.P>
                Snapshot is designed to allow node operators
                to run efficient nodes on the {data.name}.
                To make the snapshot as small as possible
                while being executable as a validator, use
                the following settings to save disk space:
                Tendermint chain storage grows over time
                regardless of pruning, so periodically
                synchronizing snapshots can be helpful.
                Because snapshot nodes are periodically
                synchronized with their state, snapshot
                sizes can be surprisingly small.
            </Styled.Text.P>

            <AppCode />
            <ConfigCode />
            <Styled.Text.H3 style={styles.Title}>
                How To Process {params} Snapshot
            </Styled.Text.H3>
            <PrerequisitesCode />
            <DownloadCode data={data} />
            <StopNodeCode service={data.app} />
            <ResetCode service={data.app} />
            <DecompressCode data={data} />
            <StartNodeCode service={data.app} />
            <ExecuteCode data={data} />
        </Styled.Container>
    );
};
const styles = stylex.create({
    section: (theme) => ({
        padding: `${spacing.lg} 10vw`,
    }),
    Title: {
        textTransform: 'capitalize',
    },
    paragraph: {
        lineHeight: '1.5',
    },
});
