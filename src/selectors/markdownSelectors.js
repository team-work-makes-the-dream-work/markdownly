export const getMarkdownFiles = state => {
  return Object.keys(state.allMarkdownFiles).map(id => {
    return { 
      id,
      ...state.allMarkdownFiles[id]
    };
  });
};

export const getMarkdown = (state, id) => {
  if(id) {
    return state.allMarkdownFiles[id];
  }
  else {
    return getMarkdownFiles(state)[0];
  }
};

export const getMarkdownTitles = state => {
  return getMarkdownFiles(state).map(markdown => {
    return markdown.title;
  });
};
