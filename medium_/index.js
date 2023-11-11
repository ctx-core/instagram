import { medium__fetch } from '../medium__fetch/index.js'
/** @type {typeof import('lib/instagram/medium_/index.d.ts').medium_} */
export const medium_ = async pathname=>{
	const [medium] = await medium__fetch(pathname)
	return medium
}
