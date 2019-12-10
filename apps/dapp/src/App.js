/**
 * @function Application
 * @version 0.0.1
 * @description Rapid Adventures Application
 */

/* --- Local --- */
import './assets/index.css';
import './assets/App.css';
import {Router} from '@reach/router';
import Providers from './providersWithLocation';

import {Account, CMS, Home, Dashboard} from './pages';
import Content from './content';

/* --- Component --- */
export default () => (
	<Providers>
		<Router width="100%">
			<Home path="/" />
			<Account path="/account" />
			<CMS path="/cms" />
			<Dashboard path="/dashboard/*" />
			<Content path="/*" />
		</Router>
	</Providers>
);
