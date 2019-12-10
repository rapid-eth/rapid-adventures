/* --- Global --- */

/* --- Local --- */
import {AdventureCardLarge} from 'experiments';
import adventures from 'demo/adventureList.json';

/* --- Styles & Settings --- */
const styles = {
  my: 1,
};

/* --- Component --- */
export default props => (
  <Atom.Flex column sx={{p: 4}}>
    {adventures.data.map(adv => (
      <AdventureCardLarge {...adv} sx={styles} />
    ))}
  </Atom.Flex>
);
