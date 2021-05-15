import Channel from './components/Channel'
import { useUser } from './context/user'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Nav from './components/Nav'
import Login from './components/Login'

const App = () => {
  const {user} = useUser()
  return (
    <main>
      {!user? <Login/> :
      <Router>
        <Nav />
        <Switch>
        <Route exact path="/">
            <Channel title="general" />
          </Route>
          <Route path="/react">
            <Channel title="react" />
          </Route>
          <Route path="/css">
            <Channel title="css" />
          </Route>
        </Switch>
      </Router>
      }
    </main>
  )
}

export default App

