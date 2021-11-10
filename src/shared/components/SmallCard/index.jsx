import React from 'react';

import Image from 'next/image';

import styles from './styles.module.css';

function SmallCard({ imageUrl, imageDesc, infoRender }) {
    return <div className={styles.cardContainer}>
        <div className={styles.baloon}>
            {infoRender}
        </div>
        <Image src={imageUrl} alt={imageDesc} className="techimage" />
    </div>;
}

export default SmallCard;