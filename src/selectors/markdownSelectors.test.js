import { getMarkdown } from '../selectors/markdownSelectors';

describe('markdown selectors', () => {
  it('selects only markdown', () => {
    const state = {
      markdown: 'Update mark down working'
    };
    const selectedMarkdown = getMarkdown(state);

    expect(selectedMarkdown).toEqual('Update mark down working');
  });
});

