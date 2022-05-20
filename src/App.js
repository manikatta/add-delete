import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from './home';
import Add from './add';
import List from './studentlist';


function App() {
  return (
    <div className="App">
     <Router>
       <switch>
       <Route exact path='/'>
        <Home/>
      </Route>

      <Route exact path='/add'>
        <Add/>
      </Route>

      <Route exact path='/list'>
        <List/>
      </Route>






       </switch>
     </Router>
     
    
    </div>
  );
}

export default App;
