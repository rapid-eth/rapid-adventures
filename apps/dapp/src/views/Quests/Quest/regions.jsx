/* --- Global --- */

/* --- Local --- */
import {CollectionListSmall} from 'experiments';
import {SmallStatistic} from 'experiments';
/* --- Regions --- */
export const ShowcaseRegionTop = props => (
  <Atom.Absolute sx={{top: 0, left: 0, right: 0, m: 3, p: 3}}>
    <>
      <Atom.Flex alignCenter between>
        <Atom.Flex>
          <SmallStatistic label="Difficulty" value="5/10" />
          <SmallStatistic label="Reward" value="100" />
        </Atom.Flex>
        <CollectionListSmall />
      </Atom.Flex>
    </>
  </Atom.Absolute>
);

export const ShowcaseRegionBottom = props => (
  <Atom.Absolute sx={{bottom: 0, left: 0, right: 0, m: 3, p: 3}}>
    <Atom.Flex alignCenter between>
      <Atom.Button white>Previous: The Amazing Queest</Atom.Button>
      <Atom.Button white>Next: The Fantastic Queest</Atom.Button>
    </Atom.Flex>
  </Atom.Absolute>
);
