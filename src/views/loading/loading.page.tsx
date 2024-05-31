import { Styled } from '@/src/shared/ui';
import { LoadingUi } from '@/src/widgets/Loading/cube';

export const Loading = () => {
    return (
        <Styled.MainContainer>
            <Styled.Wrapper justify="between">
                <LoadingUi />
            </Styled.Wrapper>
        </Styled.MainContainer>
    );
};
