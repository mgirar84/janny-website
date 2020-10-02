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
import Forest from './Mainpage/Articles/GreenPlanet/Forest/Forest';
import Cities from './Mainpage/Articles/Cities/Cities';
import Regenerative from './Mainpage/Articles/Cities/Regenerative/Regenerative';
import Sustainability from './Mainpage/Articles/Cities/Sustainability/Sustainability';
import Metabolism from './Mainpage/Articles/Cities/Metabolism/Metabolism';
import Ecology from './Mainpage/Articles/Cities/Ecology/Ecology';
import Energy from './Mainpage/Articles/Energy/Energy';
import Books from './Mainpage/Books/Books';
import Earthrise from './Mainpage/Books/Earthrise/Eartrise';
import Documentaries from './Mainpage/Documentaries/Documentaries';
import JunglePharmacy from './Mainpage/Documentaries/JunglePharmacy/JunglePharmacy'
import Lectures from './Mainpage/Lectures/Lectures';
import Poems from './Mainpage/Poems/Poems';
import Mainpage from './Mainpage/Mainpage';
import Landingpage from './Landingpage/Landingpage';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation'


class Routing extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/about" component={ Header } />
          <Route exact path="/about" component={ Navigation } />
          <Route path="/articles" component={ Header } />
          <Route path="/articles" component={ Navigation } />
          <Route path="/articles" component={ Articles } />
          <Route path="/lectures" component={ Header } />
          <Route path="/lectures" component={ Navigation } />
          <Route path="/documentaries" component={ Header } />
          <Route path="/documentaries" component={ Navigation } />
          <Route exact path="/books" component={ Header } />
          <Route exact path="/books" component={ Navigation } />
          <Route exact path="/poems" component={ Header } />
          <Route exact path="/poems" component={ Navigation } />
          <Route exact path="/books/earthrise" component={ Header } />
          <Route exact path="/books/earthrise" component={ Navigation } />
          <Switch>
            <Route exact path="/about" component={ Mainpage} />
            <Route exact path="/articles/green-planet" component={ GreenPlanet } />
            <Route exact path="/articles/green-planet/earth-emergency" component={ EarthEmergency } />
            <Route exact path="/articles/green-planet/the-forest" component={ Forest } />
            <Route exact path="/articles/cities" component={ Cities } />
            <Route exact path="/articles/cities/regenerative" component={ Regenerative } />
            {/* <Route exact path="/articles/cities/revenge" component={ Revenge } /> */}
            <Route exact path="/articles/cities/sustainability" component={ Sustainability } />
            <Route exact path="/articles/cities/metabolism" component={ Metabolism } />
            <Route exact path="/articles/cities/ecology" component={ Ecology } />
            <Route path="/articles/energy" component={ Energy } />
            <Route exact path="/poems" component={ Poems } />
            <Route path="/lectures" component={ Lectures } />
            <Route exact path="/books" component={ Books } />
            <Route exact path="/books/earthrise" component={ Earthrise } />
            <Route exact path="/documentaries" component={ Documentaries } />
            <Route exact path="/documentaries/jungle-pharmacy" component={ JunglePharmacy } />
            <Route path="/" component={ Landingpage } />
          </Switch>
          {/* <Route path="/" component={ Footer } /> */}
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
