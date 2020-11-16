import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import OurClasses from './components/OurClasses/OurClasses';
import ClassSchedule from './components/ClassSchedule/ClassSchedule';
function App() {
  return (
    <div className="">
      <Router>
        <Switch>
        <Route exact path="/">
           <Home></Home>
          </Route>
        <Route exact path="/home">
           <Home></Home>
          </Route>
          <Route path="/ourClasses">
            <OurClasses></OurClasses>
          </Route>
          <Route path="/classSchedule/:id">
            <ClassSchedule></ClassSchedule>
          </Route>
          <Route path="*">
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
