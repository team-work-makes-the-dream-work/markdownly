import React, { PureComponent } from 'react';
import { getMarkdown } from '../../selectors/markdownSelectors';
import store from '../../store';
import Editor from '../../components/markdown/Editor';
import Preview from '../../components/markdown/Preview';
import styles from './MarkdownContainer.css';
import { updateMarkdown } from '../../actions/markdownActions';
import PropTypes from 'prop-types';

export default class MarkdownContainer extends PureComponent {
  state = {
    text: '',
    title: '',
    unsubscribe: null
  };

  static propTypes = {
    handleSave: PropTypes.func.isRequired
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
