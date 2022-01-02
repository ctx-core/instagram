import { fetch_medium } from './fetch_medium.js'
/** @type {import('medium_').medium_} */
export const medium_ = async pathname=>{
	const response = await fetch_medium(pathname)
	return response.json()
}
