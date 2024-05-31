import { getData } from '@/src/shared/fetch';
import { ResponseBody } from '@/src/shared/api';
import { atomWithQuery } from 'jotai-tanstack-query';
export interface EndpointsResponse extends ResponseBody {
    data: Datum[];
}
export interface EndpointResponse extends ResponseBody {
    data: Datum;
}
export interface Datum {
    name: string;
    chain_id: string;
    path: string;
    rpc: string;
    rest_api: string;
    grpc: string;
    img_url: string;
}

export const useEndpointsQuery = () => {
    const queryKey = ['endpoints'];

    const queryFn = async () => {
        const res: EndpointsResponse = await getData(
            '/endpoints'
        );
        return res.data;
    };
    return { queryKey, queryFn };
};

export const useEndpointQuery = (path: string) => {
    const queryKey = ['endpoint', path];

    const queryFn = async () => {
        const res: EndpointResponse = await getData(
            `/endpoint/${path}`
        );
        return res.data;
    };
    return { queryKey, queryFn };
};

const fetchEndpointsData = async () => {
    const res = await getData('/endpoints');
    return res.data;
};

// Create the atom with the query
export const endpointsAtom = atomWithQuery(() => ({
    queryKey: ['endpoints'], // This should be a unique key for caching and revalidation
    queryFn: fetchEndpointsData, // The function to fetch your data
    // You can also add options here to control refetching, cache time etc.
}));
const fetchEndpointData = async (path: string) => {
    const res = await getData(`/endpoint/${path}`);
    return res.data;
};

// Create a dynamic atom based on the endpoint path
export const endpointAtom = (path: string) =>
    atomWithQuery(() => ({
        queryKey: ['endpoint', path], // Include path to ensure the key is unique per endpoint
        queryFn: () => fetchEndpointData(path),
        // Additional options like refetching, error handling can be added here
    }));
