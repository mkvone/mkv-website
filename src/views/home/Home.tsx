'use client';
import { StatsList } from '@/src/widgets/Home/stats-list/stats-ui';
import { PortfolioList } from '@/src/widgets/Home/portfolio-list/portfolio-list.ui';

import { Styled } from '@/src/shared/ui';
import { IntroUi } from '@/src/widgets/Home/intro/intro-ui';

export default function Home() {
    return (
        <Styled.MainContainer>
            {/* <Suspense> */}
            <IntroUi />
            <StatsList />
            {/* </Suspense> */}

            <PortfolioList />
        </Styled.MainContainer>
    );
}
