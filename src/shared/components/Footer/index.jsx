import React from 'react';

import styles from './styles.module.css';

function Footer() {
    return <footer className={styles.footer}>
        <h1>Desenvolvido com {"<3"} por <a href="#">Vinicius Rosa</a> </h1>
        <p>Todos os direitos reservados </p>
    </footer>;
}

export default Footer;