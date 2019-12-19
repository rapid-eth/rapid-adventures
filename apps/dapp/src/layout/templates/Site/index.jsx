import {RegionTop, RegionFooter} from 'regions';

const SiteTemplate = ({sx, sxMain, styled, children, ...props}) => {
  return (
    <A.Flex column sx={{minHeight: '100vh', flex: 1, ...sx}}>
      <RegionTop />
      <A.Flex column sx={{flex: 1, ...sxMain}}>
        {children}
      </A.Flex>
      <RegionFooter />
    </A.Flex>
  );
};

export default SiteTemplate;
