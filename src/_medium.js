import { fetch_medium } from './fetch_medium';
export async function _medium(pathname) {
    const response = await fetch_medium(pathname);
    return response.json();
}
