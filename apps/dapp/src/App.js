/**
 * @function Application
 * @version 0.0.1
 * @description Rapid Adventures Application
 */

/* --- Local --- */
import './assets/index.css';
import './assets/App.css';
import { Router } from '@reach/router';
import Providers from './providers';

import { Account, Home, Dashboard, Rimble } from './pages';
import Content from './content';

/* --- Component --- */
export default () => (
	<Providers>
		<Router width="100%">
			<Home path="/" />
			<Account path="/account" />
			<CMS path="/cms" />
			<Dashboard path="/dashboard/*" />
			<Rimble path="/rimble" />
			<Content path="/*" />
		</Router>
	</Providers>
);
