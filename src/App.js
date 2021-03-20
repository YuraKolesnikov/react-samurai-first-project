import classes from './App.module.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'

const App = () => {
  return (
    <div className={classes.App}>
      <Header />
      <Nav />
      <div className={classes.Content}>
        {/*<Profile />*/}
        <Dialogs />
      </div>
    </div>
  );
}

export default App
