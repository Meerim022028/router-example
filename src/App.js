import { Route, Switch } from 'react-router';
import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Posts from "./components/Posts/Posts";
import By from "./components/By/By"
import Author from "./components/Author/Author"
import Page from "./components/Page/Page"
import Linc from "./components/Linc/Linc";
import Search from "./components/Search/Search";
import Main from "./components/Main/Main";




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
        <li>
          <NavLink activeClassName="acive" to="/by" >By</NavLink>
        </li>
        <li>
          <NavLink activeClassName="acive" to="/author" >Author</NavLink>
        </li>
        <li>
          <NavLink activeClassName="acive" to="/page" >Page</NavLink>
        </li>
        <li>
          <NavLink activeClassName="acive" to="/linc" >linc</NavLink>
        </li>
        <li>
          <NavLink activeClassName="acive" to="/search" >Search</NavLink>
        </li>
        <li>
          <NavLink activeClassName="acive" to="/main" >Main</NavLink>
        </li>
      </ul>

    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/about" component={About}  /> 
      <Route path="/contacts" component={Contacts}  />
      <Route path="/posts" component={Posts} />
      <Route path="/by" component={By} />
      <Route path="/author" component={Author} />
      <Route path="/page" component={Page} />
      <Route path="/linc" component={Linc} />
      <Route path="/search" component={Search} />
      <Route path="/main" component={Main} />





      <Route path="/" render={() => <h1>Page not Found</h1>} />
       {/* <Redirect to="/" /> returns to the first page*/}
    </Switch>
    
    </div>
  );
}

export default App;