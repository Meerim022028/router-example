import { Route, Switch } from 'react-router';
import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Posts from "./components/Posts/Posts";
import { NavLink } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink activeClassName="acive" to="/" exact>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="acive" to="/about" >About</NavLink>
        </li>
        <li>
          <NavLink activeClassName="acive" to="/contacts" >Contacts</NavLink>
        </li>
        <li>
          <NavLink activeClassName="acive" to="/posts" >Posts</NavLink>
        </li>
        
      </ul>

    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/about" component={About}  /> 
      <Route path="/contacts" component={Contacts}  />
      <Route path="/posts" component={Posts} />
      <Route path="/" render={() => <h1>Page not Found</h1>} />
       {/* <Redirect to="/" /> returns to the first page*/}
    </Switch>
    
    </div>
  );
}

export default App;