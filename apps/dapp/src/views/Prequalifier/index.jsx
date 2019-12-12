import React from 'react';
import usePrequalifierCheck from "./usePrequalifier";

const View = () => {
    const isQualified = usePrequalifierCheck();

    return (
        <div>
            <p>
                Are you qualified?
            </p>
            { isQualified ? 'yes' : 'no'}
        </div>
    )
}
export default View
