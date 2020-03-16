import * as React from 'react'
import { Link, withRouter } from 'react-router-dom'
import * as loginService from '../../services/loginService'
import './index.scss'


/**
 * 判断当前tab是否处于焦点状态
 * @param route : 当前菜单栏的路由
 * @Param currentClass : 其它类名
 */
const generateClassName = (pathRoute: string, route: string, currentClass?: Array<string>): string => {
  let result = currentClass ? currentClass : [ 'paddinglr15' ];
  pathRoute === route && result.push('themeColor');
  return result.join(' ');
}

class HeadTopComponentInner extends React.Component<any> {

  clickSign = () => loginService.show()

  public render() {
    return (
      <div className='headTopComponentWrapper'>
        <div className='headTopContentWrapper flexRowC'>
          <Link to='/'>
            <img className='logo' src='https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png' />
          </Link>
          <Link to='/'>
            <span className={generateClassName(this.props.location.pathname, '/')}>首页</span>
          </Link>
          <Link to='/a'>
            <span className={generateClassName(this.props.location.pathname, '/a')}>社会招牌</span>
          </Link>
          <Link to='/b'>
            <span className={generateClassName(this.props.location.pathname, '/b')}>校园招聘</span>
          </Link>
          <Link to='/c'>
            <span className={generateClassName(this.props.location.pathname, '/c')}>了解阿里</span>
          </Link>
          <Link to='/user'>
            <span className={generateClassName(this.props.location.pathname, '/user')}>个人中心</span>
          </Link>
          <span className='flexg'></span>
          <div>
            <span className='span12 mr16'>欢迎来到阿里巴巴集团招聘</span>
            <Link to='/login' onClick={this.clickSign} className={generateClassName(this.props.location.pathname, '/login', ['span12'])}>登录</Link>
            <span className='pl3'>|</span>
            <Link to='/register' className={generateClassName(this.props.location.pathname, '/login', ['span12'])}>注册</Link>
          </div>
        </div>
      </div>
    );
  }
}

const HeadTopComponent = withRouter(HeadTopComponentInner);

export {
  HeadTopComponent
};