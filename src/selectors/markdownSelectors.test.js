import { markdown } from '../selectors/markdownSelectors';

describe.skip('markdown selectors', () => {
  it('selects only markdown', () => {
    const state = {
      markdown: 'Update mark down working'
    };
    const selectedMarkdown = markdown(state);

    expect(selectedMarkdown).toEqual('Update mark down working');
  });
});

