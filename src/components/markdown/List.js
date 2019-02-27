import React from 'react';
import PropTypes from 'prop-types';

function List({ markdown }) {
  const markdownList = markdown.map((markdown, i) => {
    return <li key={i}>{markdown}</li>;
  });

  return (
    <>
    <h1>Markdown List</h1>
    <ul>
      <li>{markdownList}</li>
    </ul>
    </>
  );
}
List.propTypes = {
  markdown:PropTypes.string.isRequired
};

export default List;
