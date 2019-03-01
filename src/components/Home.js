import React from 'react';
import AddMarkdownFile from '../containers/markdown/AddMarkdownFile';
import MarkdownContainer from '../containers/markdown/MarkdownContainer';
import PropTypes from 'prop-types';

export default function Home({ match }) {
  return (
    <>
      <AddMarkdownFile />
      <MarkdownContainer id={match.params.id}/>
    </>
  );
}

Home.propTypes = {
  match: PropTypes.object.isRequired
};
