/**
 * @function Application
 * @version 0.0.1
 * @description Rapid Adventures Application
 */

/* --- Global --- */
import { Router } from '@reach/router';

/* --- Local --- */
import { Account, CMS, Site, Dashboard } from 'routes';
import Providers from './providersWithLocation';
import Root from './pages/MUI/Root';
import Signin from './pages/MUI/Signin';
import Signup from './pages/MUI/Signup';
import Default from './pages/MUI/Default';
import LearnMore from './pages/MUI/LearnMore';

/* --- Component --- */
export default () => (
	<Providers>
		<Router width="100%">
			<Root path="/" />
			<Default path="/" />
			<Signin path="/signin" />
			<Signup path="/signup" />
			<LearnMore path="/learnmore" />
			{/* <Site path="/*" /> */}
			{/* <Account path="/account/*" /> */}
			{/* <CMS path="/cms/*" /> */}
			{/* <Dashboard path="/dashboard/*" /> */}
		</Router>
	</Providers>
);
