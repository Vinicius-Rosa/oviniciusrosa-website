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
        imageDesc: "Logo React",
        infoRender: <span>
            O <strong>React</strong> é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
        </span>
    },
    {
        imageUrl: VueLogo,
        imageDesc: "Logo Vue",
        infoRender: <span>
            <strong>Vue.js</strong> é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.
        </span>
    },
    {
        imageUrl: NodeLogo,
        imageDesc: "Logo Node",
        infoRender: <span>
            Baseado no interpretador V8 do Google, o <strong>Node.js</strong> permite a execução de códigos JavaScript fora de um navegador web.
        </span>
    },
    {
        imageUrl: PHPLogo,
        imageDesc: "Logo PHP",
        infoRender: <span>
            <strong>PHP</strong> é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações web.
        </span>
    },
    {
        imageUrl: FigmaLogo,
        imageDesc: "Logo Figma",
        infoRender: <span>
            <strong>Figma</strong> é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web.
        </span>
    },
    {
        imageUrl: AdobeXDLogo,
        imageDesc: "Logo AdobeXD",
        infoRender: <span>
            Presente no pacote Adobe, o <strong>XD</strong> é uma ferramenta de design de experiência do usuário baseada em vetores para aplicativos da web e aplicativos móveis.
        </span>
    },
    {
        imageUrl: PhotoshopLogo,
        imageDesc: "Logo Photoshop",
        infoRender: <span>
            Presente no pacote Adobe, <strong>Photoshop</strong> é líder no mercado dos editores de imagem profissionais.
        </span>
    },
    {
        imageUrl: NextJSLogo,
        imageDesc: "Logo NextJS",
        infoRender: <span>
            <strong>Next.js</strong> é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel.
        </span>
    },
]

function Techs() {
    const techsListRender = useMemo(() => techsArray.map(
        ({ imageUrl, imageDesc, infoRender }, i) => (
            <SmallCard
                key={i}
                imageUrl={imageUrl}
                imageDesc={imageDesc}
                infoRender={infoRender}
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