/* --- Global --- */

/* --- Local --- */
import {QuestCardSmall} from 'components';
import questList from 'demo/questList.json';

/* --- Styles & Settings --- */
const styles = {
  my: 1,
};

/* --- Component --- */
export default props => (
  <Atom.Flex column sx={{p: 4}}>
    {questList.data.map(qst => (
      <QuestCardSmall {...qst} sx={styles} />
    ))}
  </Atom.Flex>
);
