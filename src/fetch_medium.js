import { safe_fetch as fetch } from '@ctx-core/fetch-undici'
/** @type {import('fetch_medium').fetch_medium} */
export const fetch_medium = async (pathname)=>{
	return fetch(`https://api.instagram.com/oembed/?url=http://instagr.am${pathname}`)
}
