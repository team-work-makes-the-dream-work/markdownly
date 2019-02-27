import { updateMarkdown, UPDATE_MARKDOWN } from './markdownActions';

describe('markdown action creators', () => {
  it('can create an update markdown action', () => {
    const action = updateMarkdown('Update mark down working');

    expect(action).toEqual({ 
      type: UPDATE_MARKDOWN,
      payload: action.payload
    });
  });
});
