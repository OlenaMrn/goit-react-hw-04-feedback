import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

export function Section({ title, children }) {
     return (
       <section className={styles.container}>
         <h2 className={styles.title}>{title}</h2>
         {children}
       </section>
     );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

