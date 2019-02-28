import React from 'react';
import AddMarkdownFile from '../containers/markdown/AddMarkdownFile';
import MarkdownContainer from '../containers/markdown/MarkdownContainer';

export default function App() {
  return (
    <>
      <h1>Markdown Editor</h1>
      <AddMarkdownFile/>
      <MarkdownContainer/>
    </>
  );
}
