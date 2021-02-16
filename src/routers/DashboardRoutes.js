import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { Navbar } from '../components/ui/Navbar'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'

export const DashboardRoutes = () => {
	return (
		<>
			<Navbar />

			<div>
				<Switch>
					<Route exact path='/marvel' component={MarvelScreen} />
					<Route exact path='/dc' component={DcScreen} />
					<Route exact path='/hero/:heroeId' component={HeroScreen} />

					<Redirect to='/marvel' />
				</Switch>
			</div>
		</>
	)
}
