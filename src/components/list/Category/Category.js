import React from 'react';
import _ from 'lodash';
import classNames from 'classnames/bind';
import styles from './Category.scss';

const cx = classNames.bind(styles);

const Category = ({categories}) => {
  return (
    <div className={cx('category-wrapper')}>
      {_.map(categories, category => <span className={cx('category-item')}>{category}</span>)}
    </div>
  );
};

export default Category;
