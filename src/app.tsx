import React from 'react';
import { Router as AppRouter } from './router';
import { BrowserRouter } from 'react-router-dom';
import { HeadTopComponent } from './components/headTop';
import { FooterComponent } from './components/footer';
import './app.scss';

const App = () => {
  return (
    <div className='appContainer'>
      <HeadTopComponent />
      <div className='appContentPageWrapper'>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;