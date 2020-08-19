import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import './index.scss';
import App from './App';
import Footer from './Footer/Footer'
import * as serviceWorker from './serviceWorker';
import Articles from './Mainpage/Articles/Articles';
import GreenPlanet from './Mainpage/Articles/GreenPlanet/GreenPlanet';
import EarthEmergency from './Mainpage/Articles/GreenPlanet/EarthEmergency/EarthEmergency';
import Cities from './Mainpage/Articles/Cities/Cities';
import Regenerative from './Mainpage/Articles/Cities/Regenerative/Regenerative';
import Sustainability from './Mainpage/Articles/Cities/Sustainability/Sustainability';
import Revenge from './Mainpage/Articles/Cities/Revenge/Revenge';
import Energy from './Mainpage/Articles/Energy/Energy';
import Books from './Mainpage/Books/Books';
import Earthrise from './Mainpage/Books/Earthrise/Eartrise';
import Documentaries from './Mainpage/Documentaries/Documentaries';
import JunglePharmacy from './Mainpage/Documentaries/JunglePharmacy/JunglePharmacy'
import Lectures from './Mainpage/Lectures/Lectures';
import Poems from './Mainpage/Poems/Poems';
import Mainpage from './Mainpage/Mainpage';


class Routing extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={ App } />
          <Route path="/articles" component={ Articles } />
          <Route path="/poems" component={ Poems } />
          <Route path="/lectures" component={ Lectures } />
          <Route path="/documentaries" component={ Documentaries } />
          <Switch>
            <Route exact path="/articles/green-planet" component={ GreenPlanet } />
            <Route exact path="/articles/green-planet/earth-emergency" component={ EarthEmergency } />
            <Route exact path="/articles/cities" component={ Cities } />
            <Route exact path="/articles/cities/regenerative" component={ Regenerative } />
            <Route exact path="/articles/cities/revenge" component={ Revenge } />
            <Route exact path="/articles/cities/sustainability" component={ Sustainability } />
            <Route path="/articles/energy" component={ Energy } />
            <Route path="/poems/poem1" component={ Poems } />
            <Route path="/poems/poem2" component={ Poems } />
            <Route path="/poems/poem3" component={ Poems } />
            <Route path="/poems/poem4" component={ Poems } />
            <Route path="/lectures" component={ Lectures } />
            <Route exact path="/books" component={ Books } />
            <Route exact path="/books/earthrise" component={ Earthrise } />
            <Route exact path="/documentaries" component={ Documentaries } />
            <Route exact path="/documentaries/jungle-pharmacy" component={ JunglePharmacy } />
            <Route path="/" component={ Mainpage } />
          </Switch>
          <Route path="/" component={ Footer } />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
    <Routing />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
