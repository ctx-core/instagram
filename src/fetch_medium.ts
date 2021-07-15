import { fetch } from '@ctx-core/fetch'
export async function fetch_medium(pathname:string):Promise<Response> {
	return fetch(`https://api.instagram.com/oembed/?url=http://instagr.am${pathname}`)
}
