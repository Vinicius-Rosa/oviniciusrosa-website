import React from 'react';

import styles from './Loading.module.css';

function LoadingScreen() {
    return <div className={styles.container}>
        <h1>Carregando...</h1>
    </div>;
}

export default LoadingScreen;