import { UPDATE_MARKDOWN_TEXT, ADD_MARKDOWN_FILE } from '../actions/markdownActions';

const initialState = {
  markdown: {
    text: '#Markdown text',
    title: 'Example'
  },
  allMarkdownFiles: [
    { 
      text: '#Markdown text1',
      title: 'ExampleTitle'
    }
  ]
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN_TEXT:
      return {
        ...state,
        markdown: { 
          text: action.payload,
          title: state.markdown.title
        }
      };
    case ADD_MARKDOWN_FILE:
      return {
        ...state,
        allMarkdownFiles: [
          ...state.allMarkdownFiles,
          {
            text: '',
            title: 'Sample'
          }
        ]
      };
    default: 
      return state;
  }
}
