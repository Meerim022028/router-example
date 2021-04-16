import classes from "./Contacts.module.css";
import {Link, Route, Switch} from "react-router-dom";



const Contacts = ({  }) => {
  
  return (
    <div className={classes.Contacts}>



     <Link to="/contacts/personal">Personal contacts</Link>
     <Link to="/contacts/business">Business contacts</Link>
     
     <Switch>
    <Route path="/contacts/personal" render={() => <h1>Personal Contacts
     

      <div className={classes.div1}>
<aside>Jon Bess</aside>
<article>p:-098-567-876-08</article>
<article>str:132-Sietl</article>
</div> </h1>}  />
    <Route path="/contacts" render={() => <h1>Business Contacts
      
<div className={classes.div2}>
<aside>Timi Rower</aside>
<article>p:-567-987-98-08</article>
<article>str:789-Sietl</article>
</div>
    </h1>}  />
    </Switch>
    </div>
  );
}

export default Contacts;