import { fetch } from '@ctx-core/fetch'
/** @type {import('fetch_medium').fetch_medium} */
export const fetch_medium = async (pathname)=>{
	return fetch(`https://api.instagram.com/oembed/?url=http://instagr.am${pathname}`)
}
