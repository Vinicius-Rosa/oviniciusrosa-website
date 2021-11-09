import React from 'react';

import LoadingArt from 'shared/components/LoadingArt'

import styles from './Loading.module.css';

function LoadingScreen() {
    return <div className={styles.container}>
        <LoadingArt />
        <h1 className={styles.title}>Carregando...</h1>
    </div>;
}

export default LoadingScreen;