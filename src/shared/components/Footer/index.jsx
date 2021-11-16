import React from 'react';

import styles from './styles.module.css';

function Footer() {
    return <footer className={styles.footer}>
        <h1>Desenvolvido com {"<3"} por{" "}
            <a target="_blank" rel="noreferrer"
                href="https://github.com/Vinicius-Rosa"
            >
                Vinicius Rosa
            </a>
        </h1>
        <p>Todos os direitos reservados </p>
    </footer>;
}

export default Footer;