import { getData } from '@/src/shared/fetch';
import { ResponseBody } from '@/src/shared/api';

export interface ValidatorsResponse extends ResponseBody {
    data: Datum[];
}
export interface ValidatorResponse extends ResponseBody {
    data: Datum;
}
export interface Datum {
    name: string;
    chain_id: string;
    path: string;
    image: string;
    block_height: string;
    block_time: Date;
    price: number;
    ticker: string;
    validator: Validator;
}

export interface Validator {
    operator_addr: string;
    wallet_address: string;
    valcon_address: string;
    voting_power: number;
    uptime: Uptime;
    jailed: boolean;
    rank: number;
    status: string;
    tokens: string;
    delegator_shares: string;
    description: Description;
    commission: Commission;
    total_delegation_counts: string;
}

export interface Commission {
    rate: string;
    max_rate: string;
    max_change_rate: string;
}

export interface Description {
    moniker: string;
    identity: string;
    website: string;
    details: string;
}

export interface Uptime {
    percent: number;
    missed_block: number;
    total_block: number;
    tombstoned: boolean;
}

export const useValidatorsQuery = () => {
    const queryKey = ['validators'];
    const queryFn = async () => {
        const res: ValidatorsResponse = await getData(
            '/validators'
        );
        return res.data;
    };
    return { queryKey, queryFn };
};

export const useValidatorQuery = (path: string) => {
    const queryKey = ['validator', path];
    const queryFn = async () => {
        const res: ValidatorResponse = await getData(
            `/validator/${path}`
        );
        return res.data;
    };
    return { queryKey, queryFn };
};
