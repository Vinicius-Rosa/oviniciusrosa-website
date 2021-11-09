import React from 'react';

import Image from 'next/image';

import HeroSubtitle from 'shared/components/HeroSubtitle';
import Title from 'shared/components/Title';
import OutlineBlackBtn from '../OutlineBlackBtn';

import HeroImg from 'shared/assets/hero-img.png';
import Object1 from 'shared/assets/object.svg';

import styles from './styles.module.css';
import Socials from '../Socials';

function Hero() {
    return <section className={styles.container}>
        <Socials />
        <main className={styles.mainWrapper}>
            <div className={styles.infoContainer}>
                <Title highlightText="!">Olá</Title>
                <HeroSubtitle />
                <OutlineBlackBtn highlightText="!">
                    Vamos conversar
                </OutlineBlackBtn>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    src={HeroImg}
                    alt="Arte de mim mesmo em colagem digital."
                    quality={100}
                />
            </div>
        </main>
    </section>;
}

export default Hero;