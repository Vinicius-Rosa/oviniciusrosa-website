import React, { useMemo } from 'react';
import { classes } from 'app/utils/classLister';

import styles from './styles.module.css';

function Title({ children, highlightText, size = "lg" }) {
    const titleClass = useMemo(() => {
        if (size === "lg") {
            return styles.title
        }

        if (size === "md") {
            return classes([styles.title, styles.titleMedium])
        }

        return styles.title
    }, [size])

    return <h1 className={titleClass}>
        {children}
        <span className={classes([titleClass, styles.highlight])}>
            {highlightText}
        </span>
    </h1>;
}

export default Title;