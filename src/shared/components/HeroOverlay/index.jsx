import React from 'react';
import { Object as Dots } from 'shared/assets/object.component';
import { Object3 as Lines } from 'shared/assets/object.component';

import styles from './styles.module.css';

function HeroOverlay() {
    return <div className={styles.container}>
        <figure className={styles.lines}>
            <Lines />
        </figure>
        <figure className={styles.dots1}>
            <Dots />
        </figure>
        <figure className={styles.dots2}>
            <Dots />
        </figure>
    </div>;
}

export default HeroOverlay;