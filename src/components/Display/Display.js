import React from 'react';

// Yay, scss modules
import styles from './Display.module.scss'

// Simple component, get two values, display them
const Display = ({ name, value }) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>{name}: </h3><span>{value}</span>            
        </div>
    )
}

export default Display;
