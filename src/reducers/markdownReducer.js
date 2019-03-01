import { UPDATE_MARKDOWN_TEXT, ADD_MARKDOWN_FILE } from '../actions/markdownActions';
import { generate } from 'shortid';

const initialState = {
  allMarkdownFiles: {
    [generate()]: { 
      text: '# Create a new tab to edit markdown files',
      title: 'Welcome'
    }
  }
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN_TEXT:
      return {
        ...state,
        allMarkdownFiles: { 
          ...state.allMarkdownFiles,
          [action.payload.id]: {
            ...state.allMarkdownFiles[action.payload.id],
            text: action.payload.text
          }
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
