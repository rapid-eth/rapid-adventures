import { useState, useEffect } from 'react';
import { prequalifierCheckTx, prequalifierCheckEvent} from 'quest-prequalifier';

import quests from '../../demo/questList.json';
const { data }  = quests;

const usePrequalifierCheck = () => {
    const [isQualified, setIsQualified] = useState(false);

    useEffect(() => {
        if (window.ethereum && !!window.ethereum.selectedAddress) {
            const response = prequalifierCheckTx(window.ethereum.selectedAddress, data);
            console.log('response', response);
            setIsQualified(true);
        }
    }, [window.ethereum.selectedAddress]);

    return isQualified;
};

export default usePrequalifierCheck
