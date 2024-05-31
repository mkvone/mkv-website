import { getData } from '@/src/shared/fetch';

import { ResponseBody } from '@/src/shared/api';

export interface StatsResponse extends ResponseBody {
    data: {
        uptime_avg: number;
        staked_value_avg: number;
        chains_operating: number;
        delegators: number;
    };
}

export function useStatsQuery() {
    const queryKey = ['stats'];

    const queryFn = async () => {
        const res: StatsResponse = await getData('/stats');
        return res.data;
    };
    return { queryKey, queryFn };
}
