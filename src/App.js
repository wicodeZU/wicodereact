import './App.css';
import Header from './Header';
import Home from './Home';
import{ 
  BrowserRouter as Router,
  Switch, 
  // Routes,
  Route 
} from 'react-router-dom'
import About from './About';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path = '/contact'>
            <Contact />
          </Route>
          <Route path = '/team'>
            <Team />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/' >
            <Home />
          </Route>
        </Switch>
        <Footer />
    </div>
    </Router>
  );
}

export default App;