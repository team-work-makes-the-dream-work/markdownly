import { UPDATE_MARKDOWN_TEXT, ADD_MARKDOWN_FILE } from '../actions/markdownActions';

const initialState = {
  markdown: {
    text: '#Markdown text',
    title: 'Example'
  }
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN_TEXT:
      return {
        markdown: { 
          text: action.payload,
          title: state.markdown.title
        }
      };
    case ADD_MARKDOWN_FILE:
      return {
        allMarkdownFiles: [
          ...state.allMarkdownFiles,
          {
            text: '',
            title: ''
          }
        ]
      };
    default: 
      return state;
  }
}
