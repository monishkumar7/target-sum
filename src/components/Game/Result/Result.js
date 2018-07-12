import React from 'react';

import classes from './Result.css';

const result = (props) => {
    let status = props.result === "Win" ? <p>You have won!</p> : <p>Sorry. Better luck next time!</p>
    return (
        <div className={classes.Result}>
            {status}
        </div>
    )
}

export default result;