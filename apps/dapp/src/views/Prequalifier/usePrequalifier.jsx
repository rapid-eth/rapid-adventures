import { useState, useEffect } from 'react';
import { prequalifierCheckTx, prequalifierCheckEvent} from 'quest-prequalifier';

import quests from '../../demo/questList.json';
const { data }  = quests;
const filteredQuests = data.filter(item => !!item.config);

const usePrequalifierCheck = () => {
    const [qualifiedQuests, setQualifiedQuests] = useState(false);

    useEffect(() => {
        const prequalify = async () => {
            if (window.ethereum && !!window.ethereum.selectedAddress) {
                const eventResponse = await prequalifierCheckEvent(window.ethereum.selectedAddress, filteredQuests);
                const txResponse = await prequalifierCheckTx(window.ethereum.selectedAddress, filteredQuests);
                console.log('>', eventResponse, txResponse)
                setQualifiedQuests([...eventResponse, ...txResponse]);
            }
        };
        prequalify()
    }, [window.ethereum.selectedAddress]);

    return qualifiedQuests;
};

export default usePrequalifierCheck
