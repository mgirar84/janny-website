import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Switch, HashRouter } from 'react-router-dom';
import './index.scss';
// import App from './App';
// import Footer from './Footer/Footer'
import * as serviceWorker from './serviceWorker';
import Articles from './Mainpage/Articles/Articles';
import GreenPlanet from './Mainpage/Articles/GreenPlanet/GreenPlanet';
import EarthEmergency from './Mainpage/Articles/GreenPlanet/EarthEmergency/EarthEmergency';
import Landtosea from './Mainpage/Articles/GreenPlanet/Landtosea/Landtosea';
import Forest from './Mainpage/Articles/GreenPlanet/Forest/Forest';
import CultureAndEcology from './Mainpage/Articles/GreenPlanet/CultureAndEcology/CultureAndEcology';
import Cities from './Mainpage/Articles/Cities/Cities';
import Regenerative from './Mainpage/Articles/Energy/Regenerative/Regenerative';
import Sustainability from './Mainpage/Articles/Cities/Sustainability/Sustainability';
import Metabolism from './Mainpage/Articles/Cities/Metabolism/Metabolism';
import Ecology from './Mainpage/Articles/Cities/Ecology/Ecology';
import Nighttrain from './Mainpage/Articles/Cities/Nighttrain/Nighttrain';
import UrbanSystems from './Mainpage/Articles/Cities/UrbanSystems/UrbanSystems';
import CitiesPlan from './Mainpage/Articles/Cities/CitiesPlan/CitiesPlan';
import UrbanTransitions from './Mainpage/Articles/Cities/UrbanTransitions/UrbanTransitions';
import Energy from './Mainpage/Articles/Energy/Energy';
import Amplified from './Mainpage/Articles/Energy/Amplified/Amplified';
import ReframingEconomics from './Mainpage/Articles/Energy/ReframingEconomics/ReframingEconomics';
import Books from './Mainpage/Books/Books';
import Gaia from './Mainpage/Books/Gaia/Gaia';
import Earthrise from './Mainpage/Books/Earthrise/Eartrise';
import Carbon from './Mainpage/Books/Carbon/Carbon';
import Documentaries from './Mainpage/Documentaries/Documentaries';
import JunglePharmacy from './Mainpage/Documentaries/JunglePharmacy/JunglePharmacy'
import Lectures from './Mainpage/Lectures/Lectures';
import RegenerativeCities from './Mainpage/Lectures/RegenerativeCities/RegenerativeCities';
import Poems from './Mainpage/Poems/Poems';
import Mainpage from './Mainpage/Mainpage';
import Landingpage from './Landingpage/Landingpage';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation'


class Routing extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/about" component={ Header } />
          <Route exact path="/about" component={ Navigation } />
          <Route path="/articles" component={ Header } />
          <Route path="/articles" component={ Navigation } />
          <Route path="/articles" component={ Articles } />
          <Route path="/lectures" component={ Header } />
          <Route path="/lectures" component={ Navigation } />
          <Route path="/lectures" component={ Lectures } />
          <Route path="/documentaries" component={ Header } />
          <Route path="/documentaries" component={ Navigation } />
          <Route path="/books" component={ Header } />
          <Route path="/books" component={ Navigation } />
          <Route path="/poems" component={ Header } />
          <Route path="/poems" component={ Navigation } />
          <Switch>
            <Route exact path="/about" component={ Mainpage} />
            <Route exact path="/articles/green-planet" component={ GreenPlanet } />
            <Route exact path="/articles/green-planet/earth-emergency" component={ EarthEmergency } />
            <Route exact path="/articles/green-planet/the-forest" component={ Forest } />
            <Route exact path="/articles/green-planet/landtosea" component={ Landtosea } />
            <Route exact path="/articles/green-planet/culture-and-ecology" component={ CultureAndEcology } />
            <Route exact path="/articles/cities" component={ Cities } />
            <Route exact path="/articles/cities/sustainability" component={ Sustainability } />
            <Route exact path="/articles/cities/metabolism" component={ Metabolism } />
            <Route exact path="/articles/cities/ecology" component={ Ecology } />
            <Route exact path="/articles/cities/nighttrain" component={ Nighttrain } />
            <Route exact path="/articles/cities/urban-systems" component={ UrbanSystems } />
            <Route exact path="/articles/cities/cities-plan" component={ CitiesPlan } />
            <Route exact path="/articles/cities/urban-transitions" component={ UrbanTransitions } />
            <Route exact path="/articles/energy" component={ Energy } />
            <Route exact path="/articles/energy/amplified" component={ Amplified } />
            <Route exact path="/articles/energy/regenerative" component={ Regenerative } />
            <Route exact path="/articles/energy/reframing-economics" component={ ReframingEconomics } />
            <Route exact path="/poems" component={ Poems } />
            <Route exact path ="/lectures/regenerative-cities" component={RegenerativeCities} />
            <Route exact path="/books" component={ Books } />
            <Route exact path="/books/earthrise" component={ Earthrise } />
            <Route exact path="/books/gaia" component={ Gaia } />
            <Route exact path="/books/carbon" component={ Carbon } />
            <Route exact path="/documentaries" component={ Documentaries } />
            <Route exact path="/documentaries/jungle-pharmacy" component={ JunglePharmacy } />
            <Route path="/" component={ Landingpage } />
          </Switch>
          {/* <Route path="/" component={ Footer } /> */}
        </div>
      </HashRouter>
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
