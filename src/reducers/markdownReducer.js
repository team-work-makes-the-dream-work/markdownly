import { UPDATE_MARKDOWN_TEXT } from '../actions/markdownActions';

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
    default: 
      return state;
  }
}
