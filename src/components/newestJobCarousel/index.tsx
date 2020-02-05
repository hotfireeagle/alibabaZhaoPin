import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

interface IProps {
  componentHeight: number;                       // 组件的高度
};

interface IState {
  top: number;                                  // 距离顶部的距离
}

class NewestJobCarouselComponent extends React.Component<IProps, IState> {
  private mockDatas = [
    { name: '前端开发1', position: '杭州', minute: 1 },
    { name: '前端开发2', position: '杭州', minute: 2 },
    { name: '前端开发3', position: '杭州', minute: 3 },
    { name: '前端开发4', position: '杭州', minute: 4 },
    { name: '前端开发5', position: '杭州', minute: 5 },
    { name: '前端开发6', position: '杭州', minute: 2 },
    { name: '前端开发7', position: '杭州', minute: 2 },
    { name: '前端开发8', position: '杭州', minute: 2 },
    { name: '前端开发9', position: '杭州', minute: 2 },
    { name: '前端开发10', position: '杭州', minute: 2 },
    { name: '前端开发11', position: '杭州', minute: 2 },
    { name: '前端开发1', position: '杭州', minute: 2 },
  ];                                             // 模拟数据，招聘职位列表
  private animationDuration = 60;                // 滚动的时间间隔
  private totalHeight = 0;                       // 总职位列表的高度
  private itemHeight = 50;                       // 一个职位的高度
  private timer: any;                            // 定时器句柄
  private headerHeight = 50;                     // 头高度
  public state = { top: 0 };                     // 距离顶部的距离

  // 计算列表的总高度
  private computeTotalHeight = () => {
    this.totalHeight = this.mockDatas.length * this.itemHeight;
  }

  // 执行动画的callback
  private animationCb = () => {
    let nextTop = this.state.top - 1;
    if (this.totalHeight + this.state.top < this.props.componentHeight - this.headerHeight) {
      nextTop = 0;
    }
    this.setState({ top: nextTop });
  }

  // 停止动画
  private stopAnimation = () => {
    this.timer && clearInterval(this.timer);
    this.timer = null;
  }

  // 开始动画
  private startAnimation = () => {
    if (!this.timer) this.timer = setInterval(this.animationCb, this.animationDuration);
  }

  public componentDidMount() {
    this.computeTotalHeight();
    this.startAnimation();
  }

  public componentWillUnmount() {
    this.stopAnimation();
  }

  public render() {
    return (
      <div className='NewestJobCarouselWrapper'>
        <div className='header flexRowC paddinglr14'>
          <span>最新职位</span>
          <span className='flexg'></span>
          <Link to='/more' className='ano'><span className='greyFont'>更多</span></Link>
        </div>
        <div className='carouselWrapper paddinglr14'>
          <div className='positionList' style={{ top: this.state.top }} onMouseEnter={this.stopAnimation} onMouseLeave={this.startAnimation}>
            {
              this.mockDatas.map((jobObj, index) => (
                <div className='positionItem flexRowC' style={{ height: this.itemHeight }} key={index}>
                  <Link to='/detail' className='jobName ano'>{jobObj.name}</Link>
                  <div>{jobObj.position}</div>
                  <div className='flexg'></div>
                  <div className='greyFont'>{jobObj.minute}分钟前</div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
};

export {
  NewestJobCarouselComponent
};