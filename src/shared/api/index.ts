export function baseUrl(path: string) {
    return `https://backend.mkv.one${path}`;
}
export type ResponseBody = {
    message: string;
    code: number;
};
