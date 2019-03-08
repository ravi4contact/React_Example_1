import React from 'react';

const checkCount = (props) => {
    return(
        <div>
            <h1>{props.count}</h1>
            <h1>{props.newCount}</h1>
        </div>
    )
}

export default React.memo(checkCount);