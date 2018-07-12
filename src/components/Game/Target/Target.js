import React from 'react';

import classes from './Target.css';

const target = (props) => (
    <div className={classes.Target}>
        Target Score - {props.target}
    </div>
);

export default target;