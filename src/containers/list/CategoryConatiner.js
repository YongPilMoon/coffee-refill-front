import React, {Component} from 'react';
import Category from 'components/list/Category';

class CategoryConatiner extends Component {
  constructor() {
    super();
    this.categories = ['All', 'Javascript', 'React', 'Nodejs', 'Css', 'Others']
  }

  render() {
    return (
      <Category categories={this.categories}/>
    );
  }
}

export default CategoryConatiner;
