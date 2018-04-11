import React, {Component} from 'react';
import Category from 'components/list/Category';

class CategoryConatiner extends Component {
  constructor() {
    super();
    this.categories = ['Javascript', 'React', 'Nodejs', 'Css', 'Etc']
  }

  render() {
    return (
      <Category categories={this.categories}/>
    );
  }
}

export default CategoryConatiner;
