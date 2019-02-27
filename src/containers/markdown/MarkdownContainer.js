import React, { PureComponent } from 'react';
import { getAllMarkdown } from '../../selectors/markdownSelectors';
import store from '../../store';
import Editor from '../../components/markdown/Editor';
import Preview from '../../components/markdown/Preview';
import styles from '../../components/markdown/Document.css';
import { updateMarkdown } from '../../actions/markdownActions';

export default class MarkdownContainer extends PureComponent {
  state = {
    markdown: '',
    unsubscribe: null
  };

  updateState = () => {
    const currentReduxState = store.getState();
    const markdown = getAllMarkdown(currentReduxState);
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
    console.log('target.value', target.value);
    store.dispatch(updateMarkdown(target.value));
  };

  render() {
    const { markdown } = this.state;
    return (
    <>
      <div className={styles.Document}>
        <Editor markdown={markdown} handleChange={this.handleChange}/>
        <Preview markdown={markdown}/>
      </div>
    </>
    );

  }
}
