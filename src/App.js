import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import Table1 from './pages/page1'
import Table2 from './pages/page2'
function App() {
  return (
    <>
    <div className="App">
    <Router>
      
        <Switch>
          
          <Route path="/page1">
      <Table1 />

          </Route>
          <Route path="/">
          <Table2 />
          </Route>
        </Switch>
    </Router>
      
    </div>
  </>
  );
}

export default App;
