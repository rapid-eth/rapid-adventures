import React from 'react';
import Box from './Box';

export const Paragraph = React.forwardRef((props, ref) => (
  <Box
    as="p"
    ref={ref}
    {...props}
    __effectKey="text"
    __css={{
      display: 'block',
      mb: 10,
    }}
  />
));
