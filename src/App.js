import { BrowserRouter, Route } from 'react-router-dom'

import classes from './App.module.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

import { state, createMessage, createPost } from './state'

const App = () => {
  const dialogProps = {
    createMessage,
    users: state.users,
    messages: state.messages
  }

  const profileProps = {
    createPost,
    newMessage: state.newMessage,
    posts: state.posts
  }

  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Header />
        <Nav />
        <div className={classes.Content}>
          <Route
            path="/dialogs"
            render={ () => <Dialogs { ...dialogProps } /> }
          />
          <Route
            path="/profile"
            render={ () => <Profile { ...profileProps } /> }
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
