import { useMemo } from 'react';

export const calculateRequestStream = useMemo((requests, type) =>
  requests.filter(r => req.type === type)
);
