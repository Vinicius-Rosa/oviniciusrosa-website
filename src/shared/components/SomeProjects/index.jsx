import React, { useMemo } from 'react';
import ProjectsCards from '../ProjectsCards';
import Title from '../Title';

import styles from './styles.module.css';

const projects = [
    {
        title: "Vitrinni Carioca",
        image: "https://camo.githubusercontent.com/699dc8563c2068fce59bd702c6025884d5c5e6d2bb7373bdb9a49033a50737dc/68747470733a2f2f692e696d6775722e636f6d2f733946667755652e6a7067",
        projectOwner: "Helcio Valim",
        description: "Criação de site institucional de um arquiteto. Desenvolvido em NextJS prototipado no Figma.",
        detailsURL: "https://github.com/Vinicius-Rosa/vitrinni-carioca",
    },
    {
        title: "Comix",
        image: "https://camo.githubusercontent.com/f0c2c711a520c11326a77b21e29a0ec96b7715c41a16d846ece6c2ddd8ac4d44/68747470733a2f2f692e696d6775722e636f6d2f774448645463792e706e67",
        projectOwner: "Projeto Ficcional",
        description: "Criação de site de vendas de quadrinhos. Desenvolvido em VueJS e prototipado no Figma.",
        detailsURL: "https://github.com/Vinicius-Rosa/comix-store",
    },
    {
        title: "Vaporwave Concept",
        image: "https://camo.githubusercontent.com/b1d85bed5e4748ecad3ec820e52bb35b0fa6610f9077d6d1a2dab4f5009ffd21/68747470733a2f2f692e696d6775722e636f6d2f6d5a584c7a44422e706e67",
        projectOwner: "Projeto Ficcional",
        description: "Criação do hero de site no estilo vaporwave. Desenvolvido em HTML, CSS, JS e prototipado no Figma.",
        detailsURL: "https://github.com/Vinicius-Rosa/vaporwave-concept",
    },
]

function SomeProjects() {
    const projectListRender = useMemo(() => projects.map(
        ({ title, image, projectOwner, description, detailsURL }, i) => (
            <ProjectsCards
                key={i}
                title={title}
                image={image}
                projectOwner={projectOwner}
                description={description}
                detailsURL={detailsURL}
                position={i}
            />
        )
    ), [])

    return <section id="someProjects" className={styles.container}>
        <Title highlightText=" projetos" size="md">Alguns</Title>

        <div className={styles.projectList}>
            {projectListRender}
        </div>
    </section>;
}

export default SomeProjects;