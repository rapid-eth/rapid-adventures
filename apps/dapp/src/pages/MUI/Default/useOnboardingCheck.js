import React, { useState, useEffect } from 'react';

// small effect that checks for the presence of 
// Metamask

export const useMetamaskCheck = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
      // Web3 browser user detected. You can now use the provider.
      setIsReady(true);
    }
  });

  return isReady;
}
