import { classes } from 'app/utils/classLister';
import React, { useMemo, useState } from 'react';

import styles from './styles.module.css';

function Button({ children, onClick = () => { } }) {
    const [active, setActive] = useState(false)

    const containerClass = useMemo(() => {
        if (!active) return styles.container;

        return classes([styles.container, styles.active])
    }, [active])

    const clickHandler = (e) => {
        setActive(current => !current)

        onClick(e)
    }

    return <div className={containerClass}>
        <button className={styles.button} onClick={clickHandler}>
            {children}
        </button>
    </div>
}

export default Button;