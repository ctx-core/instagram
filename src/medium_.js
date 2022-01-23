import { fetch_medium } from './fetch_medium.js'
/** @type {import('medium_').medium_} */
export const medium_ = async pathname=>{
	const [medium] = await fetch_medium(pathname)
	return medium
}
