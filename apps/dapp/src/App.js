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
import Signup from './pages/MUI/Signup';

/* --- Component --- */
export default () => (
	<Providers>
		<Router width="100%">
			<Signup path="/" />
			{/* <Site path="/*" /> */}
			{/* <Account path="/account/*" /> */}
			{/* <CMS path="/cms/*" /> */}
			{/* <Dashboard path="/dashboard/*" /> */}
		</Router>
	</Providers>
);
