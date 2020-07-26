import './app.scss';

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from '../navbar';
import Profile from '../pages/profile';
import Messages from '../pages/messages';
import News from '../pages/news';
import Music from '../pages/music';
import Settings from '../pages/settings';

const App = () => {

  return (
    <div className="container" >
      <header className="header">
        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/96868291/original/6999b1561fa6c2534db64400db6a7b74e06c0e99/design-any-type-art-work.jpg" alt="" />
      </header>
      <main className="main">
        <Navbar />
        <div className="content">
          <Switch >
            <Route path="/profile" component={Profile} />
            <Route path="/messages" component={Messages} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
            <Route render={() => <Profile />} />
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default App;