import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.css';
import { Link } from 'react-router-dom';

function Tabs({ markdownFiles }) {
  const markdownList = markdownFiles.map((file, i) => {
    return <Link key={i} to={`/markdowns/${file.id}`}><li className={styles.Tabs}>{file.title}</li></Link>;
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
  markdownFiles: PropTypes.array.isRequired
};

export default Tabs;
