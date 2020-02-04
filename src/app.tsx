import React from 'react';
import { Router as AppRouter } from './router';
import { BrowserRouter } from 'react-router-dom';
import { HeadTopComponent } from './components/headTop';
import { FooterComponent } from './components/footer';
import './app.scss';

const App = () => {
  return (
    <div className='appContainer'>
      <BrowserRouter>
        <HeadTopComponent />
        <div className='appContentPageWrapper'>
          <AppRouter />
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;