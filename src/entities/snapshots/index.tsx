import { getData } from '@/src/shared/fetch';
import { ResponseBody } from '@/src/shared/api';

export interface SnapshotsResponse extends ResponseBody {
    data: Datum[];
}
export interface SnapshotResponse extends ResponseBody {
    data: Datum;
}
export interface Datum {
    name: string;
    chain_id: string;
    path: string;
    app: string;
    go_version: string;
    img_url: string;
    base_url: string;
    files: File[];
    node_version: string;
}

export interface File {
    name: string;
    url: string;
    size: string;
    date: string;
    height: string;
}

export const useSnapshotsQuery = () => {
    const queryKey = ['snapshots'];

    const queryFn = async () => {
        const res: SnapshotsResponse = await getData(
            '/snapshots'
        );
        return res.data;
    };
    return { queryKey, queryFn };
};
export const useSnapshotQuery = (path: string) => {
    const queryKey = ['snapshot', path];
    const queryFn = async () => {
        const res: SnapshotResponse = await getData(
            `/snapshot/${path}`
        );
        return res.data;
    };
    return { queryKey, queryFn };
};
