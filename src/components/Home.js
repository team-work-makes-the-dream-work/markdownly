import React from 'react';
import AddMarkdownFile from '../containers/markdown/AddMarkdownFile';
import MarkdownContainer from '../containers/markdown/MarkdownContainer';

export default function Home() {
  return (
    <>
      <AddMarkdownFile />
      <MarkdownContainer />
    </>
  );
}
