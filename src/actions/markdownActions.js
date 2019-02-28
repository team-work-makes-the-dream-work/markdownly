export const UPDATE_MARKDOWN_TEXT = 'UPDATE_MARKDOWN_TEXT';
export const updateMarkdown = text => ({
  type: UPDATE_MARKDOWN_TEXT,
  payload: text 
});

export const ADD_MARKDOWN_FILE = 'ADD_MARKDOWN_FILE';
export const addMarkdownFile = () => ({
  type: ADD_MARKDOWN_FILE
});
