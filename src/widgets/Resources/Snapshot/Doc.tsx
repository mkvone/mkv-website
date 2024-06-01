import { Datum } from '@/src/entities/snapshots';
import { Styled } from '@/src/shared/ui';

export const AppCode = () => {
    return (
        <>
            {' '}
            <Styled.Text.P fontWeight="bold">
                <br />
                config/app.toml
            </Styled.Text.P>
            <Styled.CodeContainer>
                <Styled.Text.P>
                    # Prune Type
                    <br />
                    pruning = &quot;custom&quot; <br />{' '}
                    <br />
                    # Prune Strategy <br />
                    pruning-keep-recent = &quot;100&quot;{' '}
                    <br />
                    pruning-keep-every = &quot;0&quot;{' '}
                    <br />
                    pruning-interval = &quot;10&quot; <br />
                </Styled.Text.P>
            </Styled.CodeContainer>
        </>
    );
};

export const ConfigCode = () => {
    return (
        <>
            <Styled.Text.P fontWeight="bold">
                <br />
                config/config.toml
            </Styled.Text.P>
            <Styled.CodeContainer>
                <Styled.Text.P>
                    indexer = &quot;null&quot;
                </Styled.Text.P>
            </Styled.CodeContainer>
        </>
    );
};

export const PrerequisitesCode = () => {
    return (
        <>
            {' '}
            <Styled.Text.P>
                Install lz4 if needed
            </Styled.Text.P>
            <Styled.CodeContainer>
                <Styled.Text.P>
                    sudo apt update <br />
                    sudo apt-get install lz4 <br />
                </Styled.Text.P>
            </Styled.CodeContainer>
        </>
    );
};
export const DownloadCode = ({ data }: { data: Datum }) => {
    const lastIndex = data.files.length - 1; // Calculate the last index

    return (
        <>
            <Styled.Text.P>
                <br />
                download the snapshot
            </Styled.Text.P>
            <Styled.CodeContainer>
                {data.files.map((file, index) => (
                    <Styled.Text.P key={index}>
                        # Option {index + 1}{' '}
                        {index === lastIndex
                            ? ''
                            : '(latest)'}{' '}
                        <br />
                        wget -O {file.name} {file.url}{' '}
                        --inet4-only <br />
                    </Styled.Text.P>
                ))}
            </Styled.CodeContainer>
        </>
    );
};

export const StopNodeCode = ({
    service,
}: {
    service: string;
}) => {
    return (
        <>
            <Styled.Text.P>
                {' '}
                <br />
                Stop your node
            </Styled.Text.P>
            <Styled.CodeContainer>
                <Styled.Text.P>
                    sudo systemctl stop {service}
                </Styled.Text.P>
            </Styled.CodeContainer>
        </>
    );
};

export const ResetCode = ({
    service,
}: {
    service: string;
}) => {
    return (
        <>
            <Styled.Text.P>
                {' '}
                <br />
                Reset your node
            </Styled.Text.P>
            <Styled.CodeContainer>
                <Styled.Text.P>
                    {service} unsafe-reset-all <br />
                    or <br />
                    {service} tendermint unsafe-reset-all
                </Styled.Text.P>
            </Styled.CodeContainer>
        </>
    );
};

export const DecompressCode = ({
    data,
}: {
    data: Datum;
}) => {
    const lastIndex = data.files.length - 1; // Calculate the last index
    return (
        <>
            <Styled.Text.P>
                <br />
                Decompress the snapshot to your database
                location. Your database location will be
                something to the effect of ~/.{
                    data.app
                }{' '}
                &nbsp depending on your node implementation.
            </Styled.Text.P>
            <Styled.CodeContainer>
                {data.files.map((file, index) => (
                    <Styled.Text.P key={index}>
                        # Option {index + 1}
                        {index === lastIndex
                            ? ''
                            : '(latest)'}
                        <br />
                        lz4 -c -d {file.name} | tar -x -C
                        $HOME/.
                        {data.app}
                    </Styled.Text.P>
                ))}
            </Styled.CodeContainer>
        </>
    );
};

export const StartNodeCode = ({
    service,
}: {
    service: string;
}) => {
    return (
        <>
            <Styled.Text.P>
                {' '}
                <br />
                Start your node
            </Styled.Text.P>
            <Styled.CodeContainer>
                <Styled.Text.P>
                    sudo systemctl start {service} <br />
                    sudo journalctl -u {service} -f
                </Styled.Text.P>
            </Styled.CodeContainer>
        </>
    );
};

export const ExecuteCode = ({ data }: { data: Datum }) => {
    const lastIndex = data.files.length - 1; // Calculate the last index
    return (
        <>
            <Styled.Text.P>
                <br />
                ADVANCED COMMAND :
                {/* <Styled.Text.P></Styled.Text.P> */}
            </Styled.Text.P>
            <Styled.CodeContainer>
                {data.files.map((file, index) => (
                    <Styled.Text.P key={index}>
                        # Option {index + 1}{' '}
                        {index === lastIndex
                            ? ''
                            : '(latest)'}{' '}
                        <br />
                        curl -o - -L {file.url} | lz4 -c -d
                        - | tar -x -C $HOME/.{data.app}
                    </Styled.Text.P>
                ))}
            </Styled.CodeContainer>
        </>
    );
};
