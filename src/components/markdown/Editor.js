import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

function Editor({ text, handleChange }) {
  return (
    <textarea className={styles.Editor} value={text} onChange={handleChange} />
  );
}

Editor.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Editor;
