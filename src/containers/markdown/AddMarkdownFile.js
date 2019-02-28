import React, { PureComponent } from 'react';
import { getMarkdownTitles } from '../../selectors/markdownSelectors';
import store from '../../store';
import AddButton from '../../components/markdown/AddButton';
import { addMarkdownFile } from '../../actions/markdownActions';
import Tabs from '../../components/markdown/Tabs';

export default class AddMarkdown extends PureComponent {
  state = {
    markdownTitles: [],
    unsubscribe: null
  };

  updateState = () => {
    const currentReduxState = store.getState();
    const markdownTitlesArray = getMarkdownTitles(currentReduxState);
    this.setState({ 
      markdownTitles: markdownTitlesArray 
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

  handleAdd = () => {
    store.dispatch(addMarkdownFile());
  };

  handleClick = () => {
    console.log('CLICK');
  };
  

  render() {
    const { markdownTitles } = this.state;
    return (
      <>
        <AddButton handleAdd={this.handleAdd}/>
        <Tabs handleClick={this.handleClick} markdownTitles={markdownTitles}/>
      </>
    );
  }
}
