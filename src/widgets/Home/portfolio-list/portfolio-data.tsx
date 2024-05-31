export const portfolioData = {
    mainnet: [
        {
            name: 'Odin',
            chainId: 'odin-mainnet-freya',
            img: '/chains/odin.jpeg',
            description:
                'Odin Protocol is a data-centric, interoperable ecosystem that utilizes a layer-1 blockchain, an in-built oracle, and a rewards-based system for users.',
            website: 'https://odinprotocol.io/',
        },
        {
            name: 'Kava',
            chainId: 'kava_2222-10',
            img: '/chains/kava.jpeg',
            description:
                'The Kava Network is the first Layer-1 blockchain to combine the speed and scalability of the Cosmos SDK with the developer support of Ethereum.',
            website: 'https://www.kava.io/',
        },
        {
            name: 'Konstellation',
            chainId: 'darchub',
            img: '/chains/konstellation.png',
            description:
                'Konstellation Network is a blockchain protocol, built on Cosmos SDK, creating a global infrastructure for the future of the decentralized capital markets.',
            website: 'https://konstellation.tech/',
        },
        {
            name: 'Kichain',
            chainId: 'kichain-2',
            img: '/chains/kichain.png',
            description:
                'Ki chain is an open source, public blockchain designed to enable decentralized finance, built with the Cosmos SDK.',
            website: 'https://www.foundation.ki/',
        },
        {
            name: 'Band',
            chainId: 'laozi-mainnet',
            img: '/chains/band.jpeg',
            description:
                'Band Protocol is a cross-chain data oracle platform with the aspiration to build high-quality suites of web3 development products.',
            website: 'https://bandprotocol.com/',
        },
        {
            name: 'e-Money',
            chainId: 'emoney-3',
            img: '/chains/emoney.svg',
            description:
                'e-Money is a blockchain-based financial services network that provides fast, secure, and low-cost currency transactions.',
            website: 'https://e-money.com/',
        },
    ],
    testnet: [
        {
            name: 'Kava',
            chainId: 'kava-testnet-14000',
            img: '/chains/kava.jpeg',
            description:
                'The Kava Network is the first Layer-1 blockchain to combine the speed and scalability of the Cosmos SDK with the developer support of Ethereum.',
            website: 'https://www.kava.io/',
        },
        {
            name: 'Umee',
            chainId: 'umeevengers-1',
            img: '/chains/umee.png',
            description:
                'Umee is a cross-chain DeFi platform that interconnects between blockchains.',
            website: 'https://umee.cc/',
        },
        {
            name: 'Archway',
            chainId: 'augusta-1',
            img: '/chains/archway.jpeg',
            description:
                'Archway is a Layer 1 Proof-of-Stake protocol launching on the Cosmos network, providing fast and low-cost transactions with built-in developer incentives.',
            website: 'https://archway.io/',
        },
    ],
};
export type PortfolioListProps = {
    name: string;
    chainId: string;
    img: string;
    description: string;
    theme: 'light' | 'dark';
    website?: string;
};
