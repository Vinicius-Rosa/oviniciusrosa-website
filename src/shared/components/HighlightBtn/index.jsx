import React from 'react';

import styles from './styles.module.css';

function HighlightBtn({ children, onClick }) {
    return <div className={styles.container}>
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    </div>
}

export default HighlightBtn;