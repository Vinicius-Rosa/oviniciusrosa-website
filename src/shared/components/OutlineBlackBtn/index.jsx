import { classes } from 'app/utils/classLister';
import React from 'react';

import styles from './styles.module.css';

function OutlineBlackBtn({ children, highlightText, onClick }) {
    return <button className={classes([styles.container, styles.button])} onClick={onClick}>
        {children}
        <span className={classes([styles.container, styles.highlight])}>
            {highlightText}
        </span>
    </button>;
}

export default OutlineBlackBtn;