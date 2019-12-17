import {RegionAside, RegionTopDashboard, RegionFooter} from 'regions';
import styles from './styles';
const DashboardTemplate = ({sx, sxMain, styled, children, ...props}) => {
  return (
    <A.Flex column sx={styles.container}>
      <Atom.Flex sx={{flex: 1}}>
        <RegionAside sx={styles.aside} />
        <Atom.Flex column sx={styles.main}>
          <RegionTopDashboard />
          <A.Flex column sx={{flex: 1, ...sxMain}}>
            {children}
          </A.Flex>
          <RegionFooter />
        </Atom.Flex>
      </Atom.Flex>
    </A.Flex>
  );
};

export default DashboardTemplate;
