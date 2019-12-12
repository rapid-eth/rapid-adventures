import { useState, useEffect } from 'react';
// import joesObject from 'quest-prequalifier';

const usePrequalifierCheck = () => {
    const [isQualified, setIsQualified] = useState(false);
    useEffect(() => {
        // TODO import joe's code
        // if (joesObject.callTheFunction(window.ethereum.selectedAddress)) {
        setIsQualified(true);
    }, [window.ethereum.selectedAddress]);

    return isQualified;
};

export default usePrequalifierCheck