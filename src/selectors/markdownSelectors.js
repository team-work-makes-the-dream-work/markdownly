export const getMarkdown = state => {
  return state.markdown;
};

export const getMarkdownFiles = state => {
  return state.allMarkdownFiles;
};

export const getMarkdownTitles = state => {
  return getMarkdownFiles(state).map(markdown => {
    return markdown.title;
  });
};
