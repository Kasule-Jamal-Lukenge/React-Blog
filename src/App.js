import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import BlogDetails from './BlogDetails';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
               <Home />
            </Route>
            <Route exact path="/create-post">
              <Create/>
            </Route>
            <Route exact path="/blog-details/:id">
              <BlogDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
