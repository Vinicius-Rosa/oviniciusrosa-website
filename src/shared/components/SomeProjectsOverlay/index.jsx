import React from 'react';
import { Object2 as Dots } from 'shared/assets/ObjectComponent';

import styles from './styles.module.css';

function SomeProjectsOverlay() {
    return <div className={styles.container}>
        <figure className={styles.dots1}>
            <Dots />
        </figure>
        <figure className={styles.dots2}>
            <Dots fill="#00CAE7" />
        </figure>
        <figure className={styles.dots3}>
            <Dots fill="#00CAE7" />
        </figure>
        <figure className={styles.dots4}>
            <Dots />
        </figure>
    </div>;
}

export default SomeProjectsOverlay;