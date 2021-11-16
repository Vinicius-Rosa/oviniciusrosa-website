import React, { memo } from 'react';

import styles from './styles.module.css';

function Input({ value, onChange, name, type = "text", placeholder = "Digitar..." }) {
    if (type === 'textarea') return <textarea
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
        style={{ height: "120px", resize: 'none' }}
    />

    return <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
    />;
}

export default memo(Input);