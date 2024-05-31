import './globals.css';
import * as stylex from '@stylexjs/stylex';
import { Nav } from '@/src/widgets/navbar/Nav';
import { spacing } from '../src/shared/tokens/spacing.stylex';
import { QueryClientProvider } from '@/src/app/provider/QueryClientProvider';
import {
    HydrationBoundary,
    dehydrate,
} from '@tanstack/react-query';
import { queryClient } from '@/src/shared/lib/react-query';
import { useStatsQuery } from '@/src/entities/stats';
import { Footer } from '@/src/widgets/footer/Footer';

export const metadata = {
    title: 'Metta Karuna Validator',
    description:
        'Metta Karuna Validator is a validator on the Cosmos Network. We are dedicated to providing the best staking experience for our delegators. Stake with us today!',
    icons: {
        icon: '/logo/favicon.jpeg',
    },
};

const RootLayout = async ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const Client = queryClient;
    await Client.prefetchQuery(useStatsQuery());
    return (
        <html {...stylex.props(styles.reset)} lang="en">
            <body
                {...stylex.props(styles.reset, styles.body)}
            >
                <QueryClientProvider>
                    <HydrationBoundary
                        state={dehydrate(queryClient)}
                    >
                        <Nav />
                        <main
                            {...stylex.props(styles.main)}
                        >
                            {children}
                        </main>
                        <Footer />
                    </HydrationBoundary>
                </QueryClientProvider>
            </body>
        </html>
    );
};
export default RootLayout;

const styles = stylex.create({
    html: {},
    reset: {
        minHeight: '100%',
        margin: 0,
        padding: 0,
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '80vh',
        margin: 0,
        padding: 0,
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
    },
});
