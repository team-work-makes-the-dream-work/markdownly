import React from 'react';
import PropTypes from 'prop-types';

function Tabs({ markdownTitles }) {
  const markdownList = markdownTitles.map((markdown, i) => {
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
  markdownTitles:PropTypes.string.isRequired
};

export default Tabs;
