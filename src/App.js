import React, {useState} from 'react';
import "./styles/app.scss";
import Profile from './profile/Profile';
import DashBoard from './dashboard/DashBoard';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from './authentication/SignIn';

function App() {
  const [signin, setSignIn] = useState(false);
  // const history = useHistory();

  function handleSignOut(e){
    e.preventDefault();
    setSignIn(!signin);
  }

  return (
    <div className="App">
      <h1>Welcome to Amor Caliente!</h1>
      <div>Bienvenidos a Amor Caliente!</div>

      <header>
        { signin ? 
        <div>
          <div><a href="/dashboard"><button>BROWSE DASHBOARD GALLERY</button></a></div>
          <h4>Would you like to sign out?<button onClick={handleSignOut}>SIGN OUT</button></h4>
        </div>
        :
        <div></div>
        }
      </header>

      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            {signin ? <Profile/> : 
            <SignIn 
              signin={signin} 
              setSignIn={setSignIn} 
            />} 
          </Route>

          <Route exact path='/dashboard'>
            <DashBoard 
              signin={signin} 
              setSignIn={setSignIn}
            />
          </Route>

        </Switch>
      </BrowserRouter>

      <footer>
      </footer>
    </div>
  );
}

export default App;
