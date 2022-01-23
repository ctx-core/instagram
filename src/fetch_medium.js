import { fetch } from '@ctx-core/fetch-undici'
/** @type {import('fetch_medium').fetch_medium} */
export const fetch_medium = async (pathname)=>{
	const res = await fetch(`https://api.instagram.com/oembed/?url=http://instagr.am${pathname}`)
	return [await res.json(), res]
}
