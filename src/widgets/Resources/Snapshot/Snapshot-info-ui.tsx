import { useSnapshotQuery } from '@/src/entities/snapshots';
import { Styled } from '@/src/shared/ui';
import stylex from '@stylexjs/stylex';
import { useQuery } from '@tanstack/react-query';

export const SnapshotInfo = ({
    params,
}: {
    params: string;
}) => {
    const { data, isLoading, error } = useQuery(
        useSnapshotQuery(params)
    );
    if (isLoading || !data) return <></>;

    return (
        <Styled.Wrapper
            flexDirection="row"
            gap="xxxs"
            wrap="wrap"
        >
            <Styled.Text.P
                style={styles.title}
                fontWeight="semiBold"
            >
                Chain ID:
            </Styled.Text.P>
            <Styled.Text.P style={styles.title}>
                {data.chain_id}
            </Styled.Text.P>
            <Styled.Text.P style={styles.title}>
                |
            </Styled.Text.P>
            <Styled.Text.P
                style={styles.title}
                fontWeight="semiBold"
            >
                Current Node Version:
            </Styled.Text.P>
            <Styled.Text.P style={styles.title}>
                {data.node_version}
            </Styled.Text.P>
        </Styled.Wrapper>
    );
};
const styles = stylex.create({
    title: {
        textTransform: 'capitalize',
    },
});
