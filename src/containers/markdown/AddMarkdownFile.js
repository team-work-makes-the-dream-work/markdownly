import React, { PureComponent } from 'react';
// import { getMarkdown } from '../../selectors/markdownSelectors';
// import store from '../../store';
import AddButton from '../../components/markdown/AddButton';

export default class AddMarkdown extends PureComponent {
  handleAdd = () => {
    console.log('Clicked');
  };
  
  render() {
    return (
      <>
        <AddButton handleAdd={this.handleAdd}/>
      </>
    );
  }
}
