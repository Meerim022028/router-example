import './App.css';
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";




function App() {
  return (
    <div className="App">
      <a href="/" >home</a>
      <a href="/bout" >About</a>
      <a href="/contacts" >Contacts</a>
      <About />
      <Contacts />
      <Home />
    </div>
  );
}

export default App;