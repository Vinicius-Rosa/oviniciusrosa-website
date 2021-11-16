import React from 'react';
import { Object2 as Dots } from 'shared/assets/ObjectComponent';

import styles from './styles.module.css';

function WhatIDoForLivingOverlay() {
    return <div className={styles.container}>
        <figure className={styles.dots1}>
            <Dots fill="#00CAE7" />
        </figure>
        <figure className={styles.dots2}>
            <Dots fill="#00CAE7" />
        </figure>
        <figure className={styles.dots3}>
            <Dots fill="#00CAE7" />
        </figure>
    </div>;
}

export default WhatIDoForLivingOverlay;