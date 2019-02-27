import React, { PureComponent } from 'react';
import { getMarkdown } from '../../selectors/markdownSelectors';
import store from '../../store';
import Editor from '../../components/markdown/Editor';
import Preview from '../../components/markdown/Preview';
import styles from './MarkdownContainer.css';
import { updateMarkdown } from '../../actions/markdownActions';
import SaveButton from '../../components/markdown/SaveButton';

export default class MarkdownContainer extends PureComponent {
  state = {
    markdown: '',
    unsubscribe: null
  };

  updateState = () => {
    const currentReduxState = store.getState();
    const markdown = getMarkdown(currentReduxState);
    this.setState({ markdown });
  };
  
  componentDidMount() {
    this.updateState();
    const unsubscribe = store.subscribe(() => {
      this.updateState();
    });
    this.setState({ unsubscribe });
  }

  componentWillUnmount() {
    this.state.unsubscribe();
  }

  handleChange = ({ target }) => {
    store.dispatch(updateMarkdown(target.value));
  };

  onSave = () => {
    console.log('saved');
  };

  render() {
    const { markdown } = this.state;
    return (
      <>
        <div className={styles.Document}>
          <SaveButton onSave={this.onSave}/>
          <Editor markdown={markdown} handleChange={this.handleChange}/>
          <Preview markdown={markdown}/>
        </div>
      </>
    );

  }
}
