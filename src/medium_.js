import { fetch_medium } from './fetch_medium';
export async function medium_(pathname) {
    const response = await fetch_medium(pathname);
    return response.json();
}
//# sourceMappingURL=src/medium_.js.map