import classes from "./Author.module.css";
import {Link, Route, Switch} from "react-router-dom";
import Image  from "../../images/img.jpg";



const Author = ({  }) => {
  
  return (
    <div className={classes.Author}>

<Link to="/author/категории">Категории contacts</Link>
     
     <Switch>
    <Route path="/author/категории" render={() => <h1>Категории 
        <ol>бизнес-советы</ol>
      <ol>из мира течнологий</ol>
      <ol>интернет-маректинг</ol>
      <ol>интернет-менеджмент</ol>
      <ol>повышение-продаж</ol>
    </h1>}  />
    </Switch>
    <p>Продвижение бизнеса в Интернете требует больших затрат, поэтому интернет-маркетинг с ограниченным бюджетом вызывает повышенный интерес в период кризиса.</p> 
    <img src={Image} alt="#" />
    </div>
  );
}

export default Author;