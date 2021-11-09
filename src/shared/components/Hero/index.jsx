import React from 'react';

import HeroSubtitle from 'shared/components/HeroSubtitle';
import Title from 'shared/components/Title';
import OutlineBlackBtn from '../OutlineBlackBtn';


import Socials from '../Socials';
import HeroOverlay from '../HeroOverlay';

import styles from './styles.module.css';
import HeroArt from '../HeroArt';

function Hero() {
    return <section className={styles.container}>
        <Socials />
        <HeroOverlay />
        <main className={styles.mainWrapper}>
            <div className={styles.infoContainer}>
                <Title highlightText="!">Olá</Title>
                <HeroSubtitle />
                <OutlineBlackBtn highlightText="!">
                    Vamos conversar
                </OutlineBlackBtn>
            </div>
            <div className={styles.imgContainer}>
                <HeroArt />
            </div>
        </main>
    </section>;
}

export default Hero;