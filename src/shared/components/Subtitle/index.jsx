import React from 'react';

import styles from './styles.module.css';

function Subtitle({ children }) {
    return <h2 className={styles.subtitle}>
        {children}
    </h2>;
}

export default Subtitle;