import React, { useMemo } from 'react';

import Image from 'next/image';

import styles from './styles.module.css';
import { classes } from 'app/utils/classLister';

function InnerTitle({ children }) {
    return <h2 className={styles.title}>
        {children}
    </h2>;
}

function InnerSubTitle({ children }) {
    return <h3 className={styles.subtitle}>
        {children}
    </h3>;
}

function ProjectsCards({
    title,
    image,
    projectOwner,
    description,
    detailsURL,
    position
}) {
    const positionLabel = useMemo(() => {
        if (position === 0) return "Left"
        if (position === 1) return "Mid"
        if (position === 2) return "Right"

        return ""
    }, [position])

    return <div className={classes([styles.cardContainer, styles[`container${positionLabel}`]])}>
        <InnerTitle>{title}</InnerTitle>

        <div className={styles.image}>
            <Image src={image} width={300} height={250} alt={`${image}`} />
        </div>

        <InnerSubTitle>{projectOwner}</InnerSubTitle>

        <p className={styles.text}>{description}</p>

        <a target="_blank" rel="noreferrer" href={detailsURL} className={styles.seeMore}>Ver detalhe</a>
    </div>;
}

export default ProjectsCards;