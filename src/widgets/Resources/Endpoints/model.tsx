export interface Endpoint {
    name: string;
    img_url: string;
    rpc: string;
    rest_api: string;
    grpc: string;
}

export interface EndpointItemProps {
    endpoint: Endpoint;
    index: number;
    isActive: boolean;
    onClick: () => void;
}

export interface EndpointDetailsProps {
    endpoint: Endpoint;
    isActive: boolean;
    bg: string | undefined;
    color: string | undefined;
}
