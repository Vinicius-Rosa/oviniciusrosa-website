import React from 'react';
import Title from '../Title';

import Image from 'next/image';

import Websites from 'shared/assets/WebsiteIllustration.png';
import Apps from 'shared/assets/AppIllustration.png';
import UIUX from 'shared/assets/UXUIIllustration.png';

import styles from './styles.module.css';
import Subtitle from '../Subtitle';
import HighlightBtn from '../HighlightBtn';

import WhatIDoForLivingOverlay from '../WhatIDoForLivingOverlay';
import { classes } from 'app/utils/classLister';

const Paragraph = ({ children, title }) => <div className={styles.paragraph}>
    <Subtitle>{title}</Subtitle>
    <p className={styles.text}>{children}</p>
    <HighlightBtn>Saiba mais</HighlightBtn>
</div>

function WhatIDoForLiving() {
    return <section id="whatIDoForLiving" className={styles.container}>
        <WhatIDoForLivingOverlay />
        <Title highlightText=" faço" size="md">O que eu</Title>

        <div className={styles.itemContainer}>
            <div className={styles.image}>
                <Image src={Websites} alt="Representação de websites" />
            </div>
            <Paragraph title="Websites">
                Meu foco de carreira sempre foi o desenvolvimento web. Utilizando ferramentas como <strong>React</strong>,
                <strong> Vue</strong>, <strong>Next</strong>, <strong>Styled Components</strong>, etc, sou apto a desenvolver
                e manter ecossistemas front-end inteiros sozinho!
            </Paragraph>
        </div>

        <div className={classes([styles.itemContainer, styles.midItemContainer])}>
            <Paragraph title="Aplicativos">
                Apesar de menor, também tenho experiência na construção de apps hibridos com <strong>React Native</strong> com e sem <strong>Expo</strong>.
            </Paragraph>
            <div className={styles.image2}>
                <Image src={Apps} alt="Representação de aplicativos" />
            </div>
        </div>

        <div className={styles.itemContainer}>
            <div className={styles.image}>
                <Image src={UIUX} alt="Representação de UI UX" />
            </div>
            <Paragraph title="UX/UI design">
                Por fim, minha mais nova área: o design de interface! Tenho uma curta experiência, porém venho evoluído bastante nela.
                Utilizo majoritariamente <strong>Figma</strong> e <strong>Photoshop</strong>, porém também tenho experiência com Adobe XD.
            </Paragraph>
        </div>
    </section>;
}

export default WhatIDoForLiving;