/**
 * @function Application
 * @version 0.0.1
 * @description Rapid Adventures Application
 */

/* --- Global --- */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* --- Local --- */
// import { Account, CMS, Site, Dashboard } from 'routes';
import Providers from './providers';
import Dashboard from './pages/MUI/Dashboard';
import Signin from './pages/MUI/Signin';
import Signup from './pages/MUI/Signup';
import Default from './pages/MUI/Default';
import LearnMore from './pages/MUI/LearnMore';
import PrivateLayout from './pages/MUI/PrivateLayout';
import Playground from './views/Playground'
import Prequalifier from './views/Prequalifier'
import Adventures from './pages/MUI/Adventures';
import AdventureDetail from './pages/MUI/AdventureDetail';
import Settings from './pages/MUI/Settings';

/* --- Component --- */
export default () => (
	<Providers>
		<Router>
			<Switch>
				<PrivateLayout exact path="/" title="Layout" component={Dashboard} />
				<PrivateLayout path="/user" title="User" component={User} />
				<PrivateLayout path="/earn" title="Earn" component={Earn} />
				<PrivateLayout path="/give" title="Give" component={Give} />
				<PrivateLayout path="/guide" title="Guide" component={Guide} />
				<PrivateLayout path="/settings" title="Settings" component={Settings} />

				<PrivateLayout exact path="/adventures" title="Adventures" component={Adventures} />
				<Route path="/adventures/:id" render={() => {
					return <PrivateLayout exact path="/adventures/:id" title="Adventure Detail" component={AdventureDetail} />
				}} />

				<PrivateLayout path="/playground" title="Playground" component={Playground} />
				<PrivateLayout path="/prequalifier" title="Prequalifier" component={Prequalifier} />

				<Default path="/joinus" />
				<Signin path="/signin" />
				<Signup path="/signup" />
				<LearnMore path="/learnmore" />

				{/* 404-style catch all when the route doesn't match */}
				<PrivateLayout component={NotFound} />
			</Switch>
			{/* <Site path="/*" /> */}
			{/* <Account path="/account/*" /> */}
			{/* <CMS path="/cms/*" /> */}
			{/* <Dashboard path="/dashboard/*" /> */}
		</Router>
	</Providers>
);

const User = () =>
	<div>
		<h1>Users page goes here</h1>
	</div>

const Earn = () =>
	<div>
		<h1>Earn page goes here</h1>
	</div>

const Give = () =>
	<div>
		<h1>Give page goes here</h1>
	</div>

const Guide = () =>
	<div>
		<h1>Guide page goes here</h1>
	</div>

const NotFound = () =>
	<h1>Coming soon...</h1>