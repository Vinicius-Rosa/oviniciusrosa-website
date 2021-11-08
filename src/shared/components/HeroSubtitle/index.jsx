import { classes } from 'app/utils/classLister';
import React from 'react';

import styles from './styles.module.css';

function HeroSubtitle() {
    return <h2 className={styles.subtitle}>
        Sou <span className={classes([styles.subtitle, styles.highlight])}>
            Vinicius Rosa
        </span>, desenvolvedor front-end e UI/UX designer
    </h2>;
}

export default HeroSubtitle;