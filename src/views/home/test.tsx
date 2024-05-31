const Container = ({
    children,
}: {
    children?: React.ReactNode;
}) => <div>{children}</div>;
const Wrapper = ({
    children,
}: {
    children?: React.ReactNode;
}) => <div>{children}</div>;
const Item = ({
    children,
}: {
    children?: React.ReactNode;
}) => <div>{children}</div>;

const Test = () => {
    return (
        <Container>
            <Wrapper>
                <Item></Item>
            </Wrapper>
            <Wrapper></Wrapper>
            <Wrapper></Wrapper>
        </Container>
    );
};
