import React from 'react';
import Box from './Box';

export const Button = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="button"
    variant="primary"
    {...props}
    __themeKey="buttons"
    __effectKey="button"
    __variantsKey="effects.button"
    __css={{
      appearance: 'none',
      display: 'inline-block',
      textAlign: 'center',
      textDecoration: 'none',
      outline: 'none',
    }}
  />
));
