import React from 'react';

const result = (props) => {
    let status = props.result === "Win" ? <p>You have won!</p> : <p>Sorry. Better luck next time!</p>
    return (
        <div>
            Result.js
            {status}
        </div>
    )
}

export default result;