import React from 'react';
import { Router as AppRouter } from './router';
import { BrowserRouter } from 'react-router-dom';
import { HeadTopComponent } from './components/headTop';

const App = () => {
  return (
    <div className='appContainer'>
      <HeadTopComponent />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;