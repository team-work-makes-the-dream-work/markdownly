import React, { PureComponent } from 'react';
import { getMarkdown } from '../../selectors/markdownSelectors';
import store from '../../store';
import Editor from '../../components/markdown/Editor';
import Preview from '../../components/markdown/Preview';
import styles from './MarkdownContainer.css';
import { updateMarkdown } from '../../actions/markdownActions';


export default class MarkdownContainer extends PureComponent {
  state = {
    text: '',
    title: '',
    unsubscribe: null
  };

  updateState = () => {
    const currentReduxState = store.getState();
    const markdownObject = getMarkdown(currentReduxState);
    this.setState({ 
      text: markdownObject.text,
      title: markdownObject.title
    });
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

  render() {
    const { text } = this.state;
    return (
      <>
        <div className={styles.Document}>
          <Editor text={text} handleChange={this.handleChange}/>
          <Preview text={text}/>
        </div>
      </>
    );

  }
}
