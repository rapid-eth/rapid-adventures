const collectible = [
  {
    delta: 'badge',
    title: 'Badge',
    subtitle: 'A New Badge',
    image: 'https://image.flaticon.com/icons/svg/1679/1679156.svg',
  },
  {
    delta: 'badge',
    title: 'Badge',
    subtitle: 'A New Badge',
    image: 'https://image.flaticon.com/icons/svg/1673/1673612.svg',
  },
];

/* --- Component --- */
const Collection = props => {
  return (
    <Atom.Flex sx={props.sx}>
      {collectible.map(i => (
        <Collectible {...i} sx={props.sxItem} />
      ))}
    </Atom.Flex>
  );
};

const Collectible = props => (
  <Atom.Span tag sx={stylesCollectible.imageContainer}>
    <Atom.Image src={props.image} sx={stylesCollectible.image} />
  </Atom.Span>
);
const stylesCollectible = {
  imageContainer: {
    mx: 2,
  },
  image: {
    borderRadius: 9999,
    maxWidth: 32,
    width: '100%',
  },
};

export default Collection;
