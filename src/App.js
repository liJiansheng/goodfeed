import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import FeedDetails from './components/feed/FeedDetails'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
         <Route path='/feed/:id' component={FeedDetails} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
