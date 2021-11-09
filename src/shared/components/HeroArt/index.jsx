import React from 'react';

import Image from 'next/image';
import HeroImg from 'shared/assets/hero-img.png';

import { Object2 as Dots } from 'shared/assets/object.component';
import { Object as Dots2 } from 'shared/assets/object.component';

import styles from './styles.module.css';

function HeroArt() {
    return <div style={{ position: 'relative' }}>
        <Image
            src={HeroImg}
            alt="Arte de mim mesmo em colagem digital."
            quality={100}
        />

        <figure className={styles.dots3}>
            <Dots2 />
        </figure>
        <figure className={styles.dots2}>
            <Dots2 />
        </figure>
        <figure className={styles.dots1}>
            <Dots />
        </figure>
    </div>;
}

export default HeroArt;