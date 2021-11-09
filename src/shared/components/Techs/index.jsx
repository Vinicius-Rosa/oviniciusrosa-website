import React, { useMemo } from 'react';

import ReactLogo from 'shared/assets/techs/react.png'
import VueLogo from 'shared/assets/techs/vue.png'
import NodeLogo from 'shared/assets/techs/node.png'
import PHPLogo from 'shared/assets/techs/php.png'
import FigmaLogo from 'shared/assets/techs/figma.png'
import AdobeXDLogo from 'shared/assets/techs/adobexd.png'
import PhotoshopLogo from 'shared/assets/techs/photoshop.png'
import NextJSLogo from 'shared/assets/techs/nextjs.png'

import SmallCard from '../SmallCard';

import styles from './styles.module.css';

const techsArray = [
    {
        imageUrl: ReactLogo,
        imageDesc: "Logo React"
    },
    {
        imageUrl: VueLogo,
        imageDesc: "Logo Vue"
    },
    {
        imageUrl: NodeLogo,
        imageDesc: "Logo Node"
    },
    {
        imageUrl: PHPLogo,
        imageDesc: "Logo PHP"
    },
    {
        imageUrl: FigmaLogo,
        imageDesc: "Logo Figma"
    },
    {
        imageUrl: AdobeXDLogo,
        imageDesc: "Logo AdobeXD"
    },
    {
        imageUrl: PhotoshopLogo,
        imageDesc: "Logo Photoshop"
    },
    {
        imageUrl: NextJSLogo,
        imageDesc: "Logo NextJS"
    },
]

function Techs() {
    const techsListRender = useMemo(() => techsArray.map(
        ({ imageUrl, imageDesc }, i) => (
            <SmallCard
                key={i}
                imageUrl={imageUrl}
                imageDesc={imageDesc}
            />
        )
    ), [])

    return <section id="techs" className={styles.techsContainer}>
        <div className={styles.yellowLine} />
        <div className={styles.content}>
            {techsListRender}
        </div>
    </section>;
}

export default Techs;