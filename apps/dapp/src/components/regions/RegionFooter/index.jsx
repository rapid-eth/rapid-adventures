/**
 * @name RegionFooter
 * @description Default footer region for application.
 */
/* --- Global --- */
import {Link} from '@reach/router';

/* --- Component --- */
export default props => {
  return (
    <Atom.Flex alignCenter between sx={{variant: 'regions.footer'}}>
      {/* Left */}
      <Atom.Flex alignCenter>
        <Link to="/">
          <Atom.Heading sm heavy mb={0}>
            {GLOBAL.siteName}
          </Atom.Heading>
        </Link>
      </Atom.Flex>

      {/* Right */}

      <Atom.Flex alignCenter>
        <a href="https://github.com/rapid-eth">
          <Atom.Span sx={{fontSize: 1}}>Built by Rapid</Atom.Span>
        </a>
      </Atom.Flex>
    </Atom.Flex>
  );
};
