import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
	return (
		<div className='container'>
			<h3 className='my-4'>Marvel Heroes</h3>

			<HeroList publisher={'Marvel Comics'} />
		</div>
	)
}
