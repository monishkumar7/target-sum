import React from 'react';

import classes from './Number.css';

const number = (props) => (
    <div className={classes.Number} onClick={props.clicked}>
        {props.value}
    </div>
);

export default number;