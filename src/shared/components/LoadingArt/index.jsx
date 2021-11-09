import React from 'react';

import Image from 'next/image';
import Moto from 'shared/assets/loading/moto.png';
import Fumaca from 'shared/assets/loading/fumaca.png';

import styles from './styles.module.css';

function LoadingArt() {
    return <div className={styles.container}>
        <div className={styles.moto}>
            <Image src={Moto} width={200} height={160} alt="Moto" />
        </div>
        <figure className={styles.fumaca}>
            <Image src={Fumaca} width={60} height={60} alt="Fumaça" />
        </figure>
    </div>;
}

export default LoadingArt;