const CanvasTemplate = ({sx, sxMain, styled, children, ...props}) => {
  return (
    <A.Flex
      column
      sx={{
        // bg: 'blue',
        minHeight: '100vh',
        flex: 1,
        width: '100%',
        ...sx,
      }}
      {...props}>
      <Atom.BackgroundImage
        ratio={0.001}
        sx={{opacity: 1}}
        src="https://imgur.com/dNWeIX6.png"
      />
      {children}
    </A.Flex>
  );
};

export default CanvasTemplate;
