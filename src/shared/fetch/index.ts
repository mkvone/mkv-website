import { baseUrl } from '../api';

export async function getData(path: string) {
    const url = baseUrl(path);
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Unexpected error');
    }
    return res.json();
}
