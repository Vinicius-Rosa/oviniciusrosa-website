import React from 'react';

import Image from 'next/image';
import AboutImg from 'shared/assets/about-me.png';

import Me from 'shared/assets/about-me/me.png';
import Folhas from 'shared/assets/about-me/folhas.png';
import Rosas from 'shared/assets/about-me/rosas.png';

import Lua from 'shared/assets/about-me/lua.png';
import Jornal from 'shared/assets/about-me/jornal.png';

import styles from './styles.module.css';

function AboutMeArt() {
    return <div className={styles.meContainer}>

        <figure className={styles.me}>
            <Image
                src={Me}
                alt="Arte de mim mesmo em colagem digital."
                quality={100}
            />
        </figure>

        <figure className={styles.jornal}>
            <Image
                src={Jornal}
                alt="Jornal."
                quality={100}
            />
        </figure>

        <figure className={styles.lua}>
            <Image
                src={Lua}
                alt="Lua."
                quality={100}
            />
        </figure>

        <figure className={styles.rosas}>
            <Image
                src={Rosas}
                alt="Rosas."
                quality={100}
            />
        </figure>

        <figure className={styles.folhas}>
            <Image
                src={Folhas}
                alt="Folhas."
                quality={100}
            />
        </figure>
        {/* <Image
            src={AboutImg}
            alt="Arte de mim mesmo em colagem digital."
            quality={100}
        /> */}
    </div>;
}

export default AboutMeArt;