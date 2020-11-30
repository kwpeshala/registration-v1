import logo from './logo.svg';
import './App.css';
import RegistrationForm from "./view/RegistrationForm";
import SuccessUserCreation from "./view/SuccessUserCreation"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <title>Registration Form</title>
      {/*<header className="App-header">*/}
        {/*<RegistrationForm/>*/}
      {/*</header>*/}

      <Router>
        {/*<HeaderComponent />*/}
        <div className="container">
          <Switch>
              <header className="App-header">
                  <Route path = "/registration" exact component = {RegistrationForm}></Route>
                  <Route path = "/success" exact component = {SuccessUserCreation} ></Route>
              </header>

          </Switch>
        </div>
        {/*<FooterComponent />*/}
      </Router>

    </div>
  );
}

export default App;
