import React from 'react';
import styles from './Footer.scss';
import classNames from 'classNames/bind';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx('footer')}>
      Footer
    </div>
  );
};

export default Footer;
