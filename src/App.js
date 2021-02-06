import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Pages

import Index from './pages/Index';
import Notfound from './pages/Notfound';
import Cv from './pages/Cv';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/Cv" component={Cv} />
          <Route path="/*" component={Notfound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
