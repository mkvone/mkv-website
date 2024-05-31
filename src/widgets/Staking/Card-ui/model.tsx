export interface StakingCardUIProps {
    ChainName: string;
    ChainId: string;
    ChainLogo: string;
    BlockHeight: string;
    BlockTime: Date;
    Price: number;
    Validator: string;
    Address: string;
    Rank: number;
    VotinPower: string;
    Commission: string;
    Symbol: string;
}
export interface ChainSectionProps {
    ChainName: string;
    ChainId: string;
    ChainLogo: string;
    BlockHeight: string;
    BlockTime: Date;
    Price: number;
}
export interface ValidatorSectionProps {
    Validator: string;
    Address: string;
    Rank: number;
    VotingPower: string;
    Commission: string;
    Symbol: string;
}
export interface InfoRowProps {
    label: string;
    value: string | number;
    copy?: boolean;
    isChain?: boolean;
}
