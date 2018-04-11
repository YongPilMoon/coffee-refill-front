import React from 'react';
import _ from 'lodash';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Category.scss';

const cx = classNames.bind(styles);

const Category = ({categories}) => {
  return (
    <div className={cx('category-wrapper')}>
      <Link to={"/"} className={cx('category-item')}>
        All
      </Link>
      {_.map(categories, category =>
        <Link to={`/tag/${category.toLowerCase()}`}
        key={category}
        className={cx('category-item')}>
        {category}
        </Link>)}
    </div>
  );
};

export default Category;
