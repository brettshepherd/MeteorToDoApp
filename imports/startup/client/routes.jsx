import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';

// containers
import AppContainer from '../../ui/containers/AppContainer.jsx';
import MainContainer from '../../ui/containers/MainContainer.jsx';

// pages
import Register from '../../ui/pages/register.jsx';
import Login from '../../ui/pages/login.jsx';


export const renderRoutes = () => (
  <Router>
    <div>

      <Route path="/" component={AppContainer}/>
    </div>
  </Router>
);

//<Route path="/login" component={Login}/>
//<Route path="/register" component={Register}/>
