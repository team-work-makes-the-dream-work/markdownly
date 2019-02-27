import React, { PureComponent } from 'react';
import { getAllMarkdown } from '../../selectors/markdownSelectors';
import store from '../../store';
import Editor from '../../components/markdown/Editor';
import Preview from '../../components/markdown/Preview';
import styles from '../../components/markdown/Document.css';

export default class AllMarkdown extends PureComponent {
  state = {
    markdown: '# Hi there',
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

  render() {
    return (
    <>
      <div className={styles.Document}>
        <Editor markdown={this.state.markdown} updateMarkdown={this.updateMarkdown} />
        <Preview markdown={this.state.markdown} />
      </div>
    </>
    );

  }
}
