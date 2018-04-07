import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';
import { jurtleLogo } from 'static/image';
const cx = classNames.bind(styles);

const Header = ({postId, logged, onRemove}) => (
  <header className={cx('header')}>
    <div className={cx('header-content')}>
        <Link to="/">
          <img className={cx('header-logo')} src={jurtleLogo} alt="jurtle logo"/>
        </Link>
      {logged && <div className={cx('right')}>
        {
          // flex 를 유지하기 위하여 배열 형태로 랜더링 합니다.
          postId && [
            <Button key="edit" theme="outline" to={`/editor?id=${postId}`}>수정</Button>,
            <Button key="remove" theme="outline" onClick={onRemove}>삭제</Button>
          ]
        }
        <Button theme="outline" to="/editor">새 포스트</Button>
      </div>
      }
    </div>
  </header>
);

export default Header;
