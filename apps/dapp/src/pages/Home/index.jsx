/* --- Global --- */
import React from 'react';

/* --- Local --- */
import {Site} from 'templates';

/* --- Component --- */
const IndexPage = () => (
  <Site sx={{bg: 'blue'}}>
    <Showcase />
  </Site>
);

export default IndexPage;

/* --- Sub-Components --- */
const Showcase = props => {
  return (
    <Atom.Flex sx={{color: 'white', pt: 6, pb: 3, py: 7}}>
      <Atom.Container sx={{maxWidth: ['100%', '100%', 880, 1080]}}>
        <Atom.Flex column>
          <Atom.Flex center column>
            <Atom.Container
              sx={{maxWidth: ['100%', '100%', 880, 780], textAlign: 'center'}}>
              <Atom.Heading mega>Rapid Adventures</Atom.Heading>
              <Atom.Heading xxl thin>
                Activate Your Life
              </Atom.Heading>
            </Atom.Container>
            <Atom.Flex>
              <Molecule.Link to="/dashboard">
                <Atom.Button
                  white
                  curved
                  sx={{mt: 4, mx: 2, fontSize: [2, 2, 3]}}>
                  Dashboard
                </Atom.Button>
              </Molecule.Link>
            </Atom.Flex>
          </Atom.Flex>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Flex>
  );
};
