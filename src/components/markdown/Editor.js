import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

function Editor({ markdown, handleChange }) {
  return (
    <textarea className={styles.Editor} value={markdown} onChange={handleChange} />
  );
}

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  hand: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Editor;
