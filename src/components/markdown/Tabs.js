import React from 'react';
import PropTypes from 'prop-types';

function Tabs({ markdownFiles }) {
  const markdownList = markdownFiles.map((markdown, i) => {
    return <li key={i}>{markdown}</li>;
  });

  return (
    <>
    <ul>
      {markdownList}
    </ul>
    </>
  );
}
Tabs.propTypes = {
  markdownFiles:PropTypes.string.isRequired
};

export default Tabs;
