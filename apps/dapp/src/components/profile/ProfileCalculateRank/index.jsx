/* --- Local --- */
import {SmallStatistic} from 'components';

const styles = {
  item: {
    mx: 2,
  },
};

// item
/* --- Component --- */
const Component = props => (
  <Atom.Flex>
    <SmallStatistic value="13" label="Rank" sx={styles.item} />
    <SmallStatistic value="42" label="Badges" sx={styles.item} />
    <SmallStatistic value="102" label="Friends" sx={styles.item} />
  </Atom.Flex>
);
export default Component;
