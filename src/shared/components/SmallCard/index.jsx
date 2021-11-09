import React from 'react';

import Image from 'next/image';

import styles from './styles.module.css';

function SmallCard({ imageUrl, imageDesc }) {
    return <div className={styles.cardContainer}>
        <Image src={imageUrl} alt={imageDesc} className="techimage" />
    </div>;
}

export default SmallCard;