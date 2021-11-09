import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import styles from './styles.module.css';

function Socials() {
    return <div className={styles.row}>
        <a target="_blank"
            rel="noreferrer"
            href="https://github.com/Vinicius-Rosa"
            className={styles.button}
        >
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/rosa-vinicius/"
            className={styles.button}
        >
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a target="_blank"
            rel="noreferrer"
            href="https://twitter.com/oviniciusrosa"
            className={styles.button}
        >
            <FontAwesomeIcon icon={faTwitter} />
        </a>
    </div>;
}

export default Socials;