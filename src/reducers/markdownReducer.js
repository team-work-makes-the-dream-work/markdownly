import { UPDATE_MARKDOWN_TEXT, ADD_MARKDOWN_FILE } from '../actions/markdownActions';
import { generate } from 'shortid';

const initialState = {
  markdown: {
    text: '#Markdown text',
    title: 'Example'
  },
  allMarkdownFiles: {
    [generate()]: { 
      text: '#Markdown text1',
      title: 'ExampleTitle'
    }
  }
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
        allMarkdownFiles: {
          ...state.allMarkdownFiles,
          [generate()]:{
            text: '',
            title: 'Sample'
          }
        }
      };
    default: 
      return state;
  }
}
