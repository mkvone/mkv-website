import { differenceInSeconds } from 'date-fns';
import {
    ChainSectionProps,
    ValidatorSectionProps,
} from './model';
import { useEffect, useMemo, useState } from 'react';
import { Styled } from '@/src/shared/ui';
import Image from 'next/image';
import { InfoRow } from './InfoRow-ui';
import { spacing } from '../../../shared/tokens/spacing.stylex';
import stylex from '@stylexjs/stylex';
import { formatPrice } from '@/src/shared/lib/utils/formatPrice';
export const ChainSection = ({
    ChainName,
    ChainId,
    ChainLogo,
    BlockHeight,
    BlockTime,
    Price,
}: ChainSectionProps) => {
    const lastBlockTime = useMemo(
        () => new Date(BlockTime),
        [BlockTime]
    );
    const [timeDifference, setTimeDifference] = useState(
        () => differenceInSeconds(new Date(), lastBlockTime)
    );
    const formattedVotingPower =
        Number(BlockHeight).toLocaleString();
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeDifference(
                differenceInSeconds(
                    new Date(),
                    lastBlockTime
                )
            );
        }, 100);

        return () => clearInterval(interval);
    }, [lastBlockTime]);
    const formattedPrice = '$ ' + formatPrice(Price);
    return (
        <Styled.Container
            flexDirection="row"
            // align="center"
            style={styles.section}
            justify="between"
        >
            <Styled.Container
                flexDirection="column"
                justify="around"
                align="center"
                style={styles.brand}
                gap="sm"
            >
                {/* <Styled.Wrapper style={}> */}
                <Image
                    src={ChainLogo}
                    alt={ChainName}
                    width={100}
                    height={100}
                    {...stylex.props(styles.image)}
                />
                {/* </Styled.Wrapper> */}
                <Styled.Text.H3>{ChainName}</Styled.Text.H3>
            </Styled.Container>
            <Styled.Container
                flexDirection="column"
                justify="between"
                style={styles.field}
                gap="sm"
            >
                <InfoRow
                    label="Block Height:"
                    value={formattedVotingPower}
                    isChain={true}
                />
                <InfoRow
                    label="Time:"
                    isChain={true}
                    value={`${timeDifference} seconds ago`}
                />
                <InfoRow
                    label="Price:"
                    isChain={true}
                    value={formattedPrice}
                />
                <InfoRow
                    label="Chain ID:"
                    isChain={true}
                    value={ChainId}
                />
            </Styled.Container>
        </Styled.Container>
    );
};

export const ValidatorSection = ({
    Validator,
    Address,
    Rank,
    VotingPower,
    Commission,
    Symbol,
}: ValidatorSectionProps) => {
    const formattedCommission =
        (Number(Commission) * 100).toFixed(0) + '%';
    const formattedVotingPower =
        Number(VotingPower).toLocaleString() + ' ' + Symbol;

    return (
        <Styled.Container
            flexDirection="column"
            style={styles.section}
            gap="sm"
        >
            <InfoRow label="Validator:" value={Validator} />
            <InfoRow
                label="Address:"
                value={Address}
                copy={true}
            />
            <InfoRow label="Rank:" value={Rank} />
            <InfoRow
                label="Commission:"
                value={formattedCommission}
            />
            <InfoRow
                label="Voting Power:"
                value={formattedVotingPower}
            />
        </Styled.Container>
    );
};

const styles = stylex.create({
    testBorder: {
        borderWidth: 1,
        borderColor: 'red',
        borderStyle: 'solid',
    },
    section: {
        paddingLeft: spacing.md,
        paddingRight: spacing.md,
        width: '100%',
        '@media (max-width: 768px)': {
            flexDirection: 'column',
        },
    },
    ellipsis: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
    },
    end: {
        textAlign: 'end',
    },
    start: {
        textAlign: 'start',
    },
    brand: {
        maxWidth: '50%',
        minWidth: '50%',
        '@media (max-width: 768px)': {
            maxWidth: '100%',
            minWidth: '100%',
        },
    },
    field: {
        maxWidth: '50%',
        minWidth: '50%',
        '@media (max-width: 768px)': {
            maxWidth: '100%',
            minWidth: '100%',
        },
    },
    image: {
        borderRadius: '50%',
        backgroundColor: 'black',
        align: 'center',
        justifyItems: 'center',
    },
});
