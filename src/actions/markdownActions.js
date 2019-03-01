export const UPDATE_MARKDOWN_TEXT = 'UPDATE_MARKDOWN_TEXT';
export const updateMarkdown = (id, text) => ({
  type: UPDATE_MARKDOWN_TEXT,
  payload: { id, text }
});

export const ADD_MARKDOWN_FILE = 'ADD_MARKDOWN_FILE';
export const addMarkdownFile = () => ({
  type: ADD_MARKDOWN_FILE
});
