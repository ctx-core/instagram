import { fetch } from 'ctx-core/fetch'
/** @type {typeof import('lib/instagram/medium__fetch/index.d.ts').medium__fetch} */
export const medium__fetch = async pathname=>{
	const res = await fetch(`https://api.instagram.com/oembed/?url=http://instagr.am${pathname}`)
	return [await res.json(), res]
}
export {
	medium__fetch as fetch_medium,
}
