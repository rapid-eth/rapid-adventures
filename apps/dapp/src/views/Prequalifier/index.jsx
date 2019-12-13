import React from 'react';
import usePrequalifierCheck from "./usePrequalifier";

const View = () => {
    const qualifiedQuests = usePrequalifierCheck();

    return (
        <div>
            <p>
                Are you qualified?
            </p>
            { JSON.stringify(qualifiedQuests) }
        </div>
    )
};

export default View
