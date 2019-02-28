import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import styles from 'github-markdown-css/github-markdown.css';

function Preview({ text }) {
  const __html = marked(text);
  return <div className={styles['markdown-body']} dangerouslySetInnerHTML={{ __html }}></div>;
}

Preview.propTypes = {
  text: PropTypes.string.isRequired
};

export default Preview;
