import { useState, useEffect } from 'react';
import { prequalifierCheckTx, prequalifierCheckEvent} from 'quest-prequalifier';

import quests from '../../demo/questList.json';

const usePrequalifierCheck = () => {
    const [isQualified, setIsQualified] = useState(false);

    useEffect(() => {
        if (window.ethereum && !!window.ethereum.selectedAddress) {
            const response = prequalifierCheckTx(window.ethereum.selectedAddress, quests);
            console.log('reaponse', response);
            setIsQualified(true);
        }
    }, [window.ethereum.selectedAddress]);

    return isQualified;
};

export default usePrequalifierCheck
