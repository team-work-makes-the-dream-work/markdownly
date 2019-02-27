import reducer from './markdownReducer';
import { updateMarkdown } from '../actions/markdownActions';

describe('update markdown reducer', () => {
  it('can update a markdown', () => {
    const state = {
      markdown: ''
    };

    const createUpdateAction = updateMarkdown('Update mark down working');

    const updatedState = reducer(state, createUpdateAction)

    expect(updatedState).toEqual({
      markdown: 'Update mark down working'
    });
  })
})