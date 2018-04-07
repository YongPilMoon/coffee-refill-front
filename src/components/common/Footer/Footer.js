import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { jurtleLogo } from 'static/image';

const cx = classNames.bind(styles);

const Footer = ({onLoginClick, logged}) => {
  return (
    <footer className={cx('footer')}>
      <Link to="/" className={cx('brand')}>
        <img  className={cx('footer-logo')} src={jurtleLogo} alt="jurtle logo"/>
      </Link>
      <div onClick={onLoginClick} className={cx('admin-login')}>관리자 로그인</div>
      {logged ? '로그아웃' : '관리자 로그인'}
    </footer>
  );
};

export default Footer;
