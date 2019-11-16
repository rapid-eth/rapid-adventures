import {RegionAside, RegionTop, RegionFooter} from 'regions';
import styles from './styles';
const DashboardTemplate = ({sx, sxMain, styled, children, ...props}) => {
  return (
    <A.Flex column sx={styles.container}>
      <Atom.Flex sx={{flex: 1}}>
        <RegionAside sx={styles.aside} />
        <Atom.Flex column sx={styles.main}>
          <RegionTop
            bg="#1e1e2d"
            color="white"
            borderBottom="3px solid #dc448d"
            p={2}
          />
          <A.Flex column sx={{flex: 1, ...sxMain}}>
            {children}
          </A.Flex>
          <RegionFooter
            bg="#1e1e2d"
            color="white"
            borderTop="2px solid #dc448d"
            p={3}
          />
        </Atom.Flex>
      </Atom.Flex>
    </A.Flex>
  );
};

export default DashboardTemplate;
