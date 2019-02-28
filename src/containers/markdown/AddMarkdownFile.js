import React, { PureComponent } from 'react';
import { getMarkdownFiles } from '../../selectors/markdownSelectors';
import store from '../../store';
import AddButton from '../../components/markdown/AddButton';
import { addMarkdownFile } from '../../actions/markdownActions';
import Tabs from '../../components/markdown/Tabs';

export default class AddMarkdown extends PureComponent {
  state = {
    markdownFiles: [],
    unsubscribe: null
  };

  updateState = () => {
    const currentReduxState = store.getState();
    const markdownFilesArray = getMarkdownFiles(currentReduxState);
    this.setState({ 
      markdownFiles: markdownFilesArray 
    });
  };

  componentDidMount() {
    this.updateState();
    const unsubscribe = store.subscribe(() => {
      this.updateState();
    });
    this.setState({ unsubscribe });
    this.makeTitles(this.state.markdownFiles);
  }

  componentWillUnmount() {
    this.state.unsubscribe();
  }

  handleAdd = () => {
    store.dispatch(addMarkdownFile());
  };
  
  makeTitles = () => {
    return this.state.markdownFiles.map(markdown => {
      return markdown.title;
    });

  };

  render() {
    const markdownTitles = this.makeTitles();
    return (
      <>
        <AddButton handleAdd={this.handleAdd}/>
        {markdownTitles && <Tabs markdownTitles={markdownTitles}/>}
      </>
    );
  }
}