import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.css';

function Tabs({ markdownTitles }) {
  const markdownList = markdownTitles.map((markdown, i) => {
    return <li key={i} className={styles.Tabs}>{markdown}</li>;
  });

  return (
    <>
      <ul className={styles.Tabs}>
        {markdownList}
      </ul>
    </>
  );
}
Tabs.propTypes = {
  markdownTitles:PropTypes.array.isRequired
};

export default Tabs;
