import { UPDATE_MARKDOWN } from '../actions/markdownActions';

const initialState = {
  markdown: '#Markdown text'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return {
        markdown: action.payload
      };
    default: 
      return state;
  }
}
