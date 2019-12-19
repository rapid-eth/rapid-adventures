/* --- Global --- */

/* --- Local --- */
import {QuestCardMinimal} from 'components';
import questList from 'data/questList.json';

/* --- Styles & Settings --- */
const styles = {
  my: 1,
  width: ['100%'],
};

/* --- Component --- */
export default props => (
  <Atom.Flex between sx={{flexWrap: 'wrap'}}>
    {questList.data.slice(0, 1).map(qst => (
      <QuestCardMinimal {...qst} sx={styles} />
    ))}
  </Atom.Flex>
);
