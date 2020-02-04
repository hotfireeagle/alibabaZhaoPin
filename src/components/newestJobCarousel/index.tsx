import React from 'react';
import './index.scss';

interface IProps {
  componentHeight: Number;
};

class NewestJobCarouselComponent extends React.Component<IProps> {
  mockDatas = [
    { name: '开发1', position: '杭州', },
    { name: '开发2', position: '杭州' },
    { name: '开发3', position: '杭州' },
    { name: '开发4', position: '杭州' },
    { name: '开发5', position: '杭州' },
    { name: '开发6', position: '杭州', },
    { name: '开发7', position: '杭州' },
    { name: '开发8', position: '杭州' },
    { name: '开发9', position: '杭州' },
    { name: '开发10', position: '杭州' },
    { name: '开发11', position: '杭州', },
    { name: '开发1', position: '杭州', },
  ];

  animationDuration = 60;
  totalHeight = 0;
  itemHeight = 50;
  timer: any;

  state = { top: 0 };

  computeTotalHeight = () => {
    this.totalHeight = this.mockDatas.length * this.itemHeight;
  }

  animationCb = () => {
    let nextTop = this.state.top - 1;
    if (this.totalHeight + this.state.top + this.itemHeight < this.props.componentHeight) {
      nextTop = 0;
    }
    this.setState({ top: nextTop });
  }

  public componentDidMount() {
    this.computeTotalHeight();
    this.startAnimation();
  }

  private stopAnimation = () => {
    this.timer && clearInterval(this.timer);
    this.timer = null;
  }

  private startAnimation = () => {
    if (!this.timer) this.timer = setInterval(this.animationCb, this.animationDuration);
  }

  public render() {
    return (
      <div className='NewestJobCarouselWrapper'>
        <div className='header'>
          <span>最新职位</span>
          <span className='flexg'></span>
          <span>更多</span>
        </div>
        <div className='carouselWrapper'>
          <div className='positionList' style={{ top: this.state.top }} onMouseEnter={this.stopAnimation} onMouseLeave={this.startAnimation}>
            {
              this.mockDatas.map((jobObj, index) => (
                <div className='positionItem' style={{ height: this.itemHeight }} key={index}>
                  <span>{jobObj.name}</span>
                  <span>{jobObj.position}</span>
                  <span>更多</span>
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