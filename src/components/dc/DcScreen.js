import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
	return (
		<div className='container'>
			<h3 className='my-4'>DC Heroes</h3>

			<HeroList publisher={'DC Comics'} />
		</div>
	)
}
