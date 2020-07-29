import React from 'react';
import styles from './Display.module.scss'

const Display = ({ name, value }) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>{name}: </h3><span>{value}</span>            
        </div>
    )
}

export default Display;
