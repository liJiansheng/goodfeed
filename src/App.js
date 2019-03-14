import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import FeedDetails from './components/feed/FeedDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateFeed from './components/feed/CreateFeed'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
         <Route path='/feed/:id' component={FeedDetails} />
         <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/addfeed' component={ CreateFeed } />

      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
