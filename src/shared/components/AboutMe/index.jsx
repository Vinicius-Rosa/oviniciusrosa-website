import { classes } from 'app/utils/classLister';
import React from 'react';
import AboutMeArt from '../AboutMeArt';
import AboutMeOverlay from '../AboutMeOverlay';
import Title from '../Title';

import styles from './styles.module.css';

function AboutMe() {
    return <section id="aboutme" className={styles.container}>
        <AboutMeOverlay />
        <Title highlightText=" mim" size="md">Sobre</Title>
        <div className={styles.row}>
            <div className={styles.infos}>
                <p className={classes([styles.paragraph, styles.marginHorizontal])}>
                    Olá, <span className={classes([styles.paragraph, styles.emphasys])}>{"${visitor.name}"}</span>. Meu nome é
                    <span className={classes([styles.paragraph, styles.highlight])}> Vinícius Rosa</span>, fui criado na pequena
                    cidade de Muqui, no sul do Espírito Santo. Tenho 22 anos e sou apaixonado por dar vida à ideias!
                </p>
                <p className={styles.paragraph}>
                    Sou desenvolvedor <span className={classes([styles.paragraph, styles.emphasys])}>front-end</span> há quase
                    <span className={classes([styles.paragraph, styles.emphasys])}> 2 anos</span>, tenho larga experiência com
                    manutenibilidade de sistemas grandes e complexos. E há alguns meses, tenho me aventurado no mundo do
                    <span className={classes([styles.paragraph, styles.emphasys])}> UX</span> e
                    <span className={classes([styles.paragraph, styles.emphasys])}> UI design</span>, o que melhorou significativamente
                    minhas habilidades como dev.
                </p>
            </div>

            <div className={styles.imageWrapper}>
                <AboutMeArt />
            </div>
        </div>
    </section>;
}

export default AboutMe;