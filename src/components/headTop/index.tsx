import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const HeadTopComponent: React.SFC<any> = () => (
  <div className='headTopComponentWrapper'>
    <div className='headTopContentWrapper'>
      <Link to='/'>
        <img className='logo' src='https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png' />
      </Link>
      <span>|</span>
      <Link to='/'>
        <span>首页</span>
      </Link>
      <Link to='/'>
        <span>社会招牌</span>
      </Link>
      <Link to='/'>
        <span>校园招聘</span>
      </Link>
      <Link to='/'>
        <span>了解阿里</span>
      </Link>
      <Link to='/'>
        <span>个人中心</span>
      </Link>
      <span className='flexG'></span>
      <div>
        <span>欢迎来到阿里巴巴集团招聘</span>
        <Link to='/'>登录</Link>
        <Link to='/'>注册</Link>
      </div>
    </div>
	</div>
)

export {
  HeadTopComponent
};