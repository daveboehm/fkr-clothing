import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import { Switch, Route } from 'react-router-dom'
import { Header } from 'components/header/header.component'
import { AuthPage } from 'components/auth/auth.component'  
import { auth } from 'firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    const setUser = (user) => this.setState({ currentUser: user })
    this.unsubscribeFromAuth = auth.onAuthStateChanged(setUser)
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' component={AuthPage} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
