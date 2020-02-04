import React from 'react';
import { NewestJobCarouselComponent } from '../../components/newestJobCarousel';
import './index.scss';

class IndexPage extends React.Component<any> {

  private hotSearch = [ '前端', 'Node', '后端', '大数据', '运营' ];

  private componentHeightNumber = 400;

  public render() {
    return (
      <div className='indexPageContainer'>
        <img className='banner' src='https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png' />
        <div className='absoluteSearch'>
          <span>此时此刻，非我莫属！</span>
          <div>
            <input placeholder='请输入职位关键词' />
            <button>搜索</button>
          </div>
          <div>
            <span>热门搜索</span>
            {
              this.hotSearch.map((name, index) => <span key={index}>{name}</span>)
            }
          </div>
        </div>
        <div className='topicContainer flexRowCC'>
          <div className='left' style={{ height: this.componentHeightNumber }}>
            <NewestJobCarouselComponent componentHeight={this.componentHeightNumber} />
          </div>
          <div className='right flexColumn'>
            <img className='aliyun' src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580814178557&di=c0b05af5007f16f48e76e471da1833a3&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F17%2F05%2F25%2Fbe5485dd930bb95d8aeb388a6843a61d.jpg' />
            <img className='business' src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4213702948,2648695188&fm=11&gp=0.jpg' />
          </div>
        </div>
      </div>
    );
  }
}

export {
  IndexPage
};