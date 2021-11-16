import React from 'react';

import Image from 'next/image';
// import HeroImg from 'shared/assets/hero-img.png';

import Me from 'shared/assets/me/eu.png';
import Butterfly1 from 'shared/assets/me/borboleta1.png';
import Butterfly2 from 'shared/assets/me/borboleta2.png';

import Cloud1 from 'shared/assets/me/cloud1.png';
import Cloud2 from 'shared/assets/me/cloud2.png';
import Cloud3 from 'shared/assets/me/cloud3.png';

import Girassol from 'shared/assets/me/girassois.png';

import { Object2 as Dots } from 'shared/assets/ObjectComponent';
import { Object as Dots2 } from 'shared/assets/ObjectComponent';

import styles from './styles.module.css';

function HeroArt() {
    return <div className={styles.container}>
        <div className={styles.me}>
            <Image
                src={Me}
                alt="Arte de mim mesmo em colagem digital."
                quality={100}
            />

            {/* girassóis */}
            <figure className={styles.girassol}>
                <Image
                    src={Girassol}
                    alt="Girassóis"
                    quality={100}
                />
            </figure>

            {/* nuvens */}
            <figure className={styles.cloud1}>
                <Image
                    src={Cloud1}
                    alt="Nuvem 1"
                    quality={100}
                />
            </figure>

            <figure className={styles.cloud2}>
                <Image
                    src={Cloud2}
                    alt="Nuvem 2"
                    quality={100}
                />
            </figure>

            <figure className={styles.cloud3}>
                <Image
                    src={Cloud3}
                    alt="Nuvem 3"
                    quality={100}
                />
            </figure>

            {/* borboletas */}
            <figure className={styles.butterfly1}>
                <Image
                    src={Butterfly1}
                    alt="Borboleta 1"
                    quality={100}
                />
            </figure>
            <figure className={styles.butterfly2}>
                <Image
                    src={Butterfly2}
                    alt="Borboleta 2"
                    quality={100}
                />
            </figure>

        </div>
        {/* <Image
            src={HeroImg}
            alt="Arte de mim mesmo em colagem digital."
            quality={100}
        /> */}

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