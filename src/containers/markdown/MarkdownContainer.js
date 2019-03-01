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
    id: PropTypes.string
  };

  updateState = () => {
    const currentReduxState = store.getState();
    const markdownObject = getMarkdown(currentReduxState, this.props.id);
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

  componentDidUpdate(prevProps) {
    if(prevProps.id !== this.props.id) {
      this.updateState();
    }
  }

  componentWillUnmount() {
    this.state.unsubscribe();
  }

  handleChange = ({ target }) => {
    console.log(this.props.id, '!!!');
    store.dispatch(updateMarkdown(this.props.id, target.value));
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
