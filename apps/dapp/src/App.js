/**
 * @function Application
 * @version 0.0.1
 * @description Rapid Adventures Application
 */

/* --- Global --- */
import { BrowserRouter as Router, Switch } from 'react-router-dom';

/* --- Local --- */
import { Account, CMS, Site, Dashboard } from 'routes';
import Providers from './providers';
import Root from './pages/MUI/Root';
import Signin from './pages/MUI/Signin';
import Signup from './pages/MUI/Signup';
import Default from './pages/MUI/Default';
import LearnMore from './pages/MUI/LearnMore';
import PrivateLayout from './pages/MUI/PrivateLayout';
import Playground from './views/Playground'
import Prequalifier from './views/Prequalifier'
import Adventure from './pages/MUI/Adventure';

/* --- Component --- */
export default () => (
	<Providers>
		<Router>
			<Switch>
				<PrivateLayout exact path="/" title="Layout" component={Root} />
				<PrivateLayout path="/user" title="User" component={User} />
				<PrivateLayout path="/earn" title="Earn" component={Earn} />
				<PrivateLayout path="/give" title="Give" component={Give} />
				<PrivateLayout path="/guide" title="Guide" component={Guide} />
				<PrivateLayout path="/settings" title="Settings" component={Settings} />

				<PrivateLayout path="/adventures" title="Adventures" component={Adventure} />

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

const Settings = () =>
	<div>
		<h1>Settings page goes here</h1>
	</div>

const NotFound = () =>
	<h1>Coming soon...</h1>