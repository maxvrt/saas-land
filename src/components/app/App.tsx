import React from 'react';
import app from './app.module.css';
import AppHeader from '../app-header/App-header';
import Promo from '../promo/Promo';
import HomeComponent from '../home-component/Home-component';
import Cards from '../cards/Cards';
import Analytics from '../analytics/Analytics';

function App() {
  return (
    <div className={app.main}>
        <HomeComponent>
            <div className={app.wrapper}>
                <AppHeader />
                <Promo />
                <Cards />
                <Analytics />
            </div>
        </HomeComponent>
    </div>
  );
}

export default App;
