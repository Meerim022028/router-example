import classes from "./Contacts.module.css";
import {Link, Route, Switch} from "react-router-dom";



const Contacts = ({  }) => {
  
  return (
    <div className={classes.Contacts}>
     <Link to="/contacts/personal">Personal contacts</Link>
     <Link to="/contacts/business">Personal contacts</Link>
     

     <Switch>
    <Route path="/contacts/personal" render={() => <h1>Personal Contacts</h1>}  />
    <Route path="/contacts" render={() => <h1>Business Contacts</h1>}  />
    </Switch>
    </div>
  );
}

export default Contacts;