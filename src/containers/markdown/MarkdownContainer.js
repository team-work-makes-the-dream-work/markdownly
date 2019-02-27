import React, { PureComponent } from 'react';
import { getAllMarkdown } from '../../selectors/markdownSelectors';
import store from '../../store';
import Editor from '../../components/markdown/Editor';
import Preview from '../../components/markdown/Preview';
import styles from '../../components/markdown/Document.css';

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

  render() {
    return (
    <>
      <div className={styles.Document}>
      
      </div>
    </>
    );

  }
}
