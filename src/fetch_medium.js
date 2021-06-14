import { fetch } from '@ctx-core/fetch';
export async function fetch_medium(pathname) {
    return fetch(`https://api.instagram.com/oembed/?url=http://instagr.am${pathname}`);
}
//# sourceMappingURL=src/fetch_medium.js.map