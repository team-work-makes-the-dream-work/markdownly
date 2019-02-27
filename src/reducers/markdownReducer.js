import { UPDATE_MARKDOWN } from '../actions/markdownActions';

const initialState = {
  markdownText: '#Markdown text'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return {
        markdownText: action.payload
      };
    default: 
      return state;
  }
}
