import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';

import styles from './styles.module.css';

function CardContainer({ children }) {
    const mainContentRef = useRef()

    const scrollUp = () => {
        if (mainContentRef.current) {
            mainContentRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    return <section className={styles.card}>
        <button className={styles.scrollBtn} onClick={scrollUp}>
            <div style={{ transform: "scale(0.4)", display: 'flex', alignItems: "center", height: '100%' }}>
                <FontAwesomeIcon icon={faAngleDoubleUp} />
            </div>
        </button>

        <main className={styles.contentContainer} ref={mainContentRef}>
            {children}
        </main>
    </section>;
}

export default CardContainer;