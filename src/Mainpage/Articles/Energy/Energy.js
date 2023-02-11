import React from 'react';
import './Energy.scss';
import {Link} from 'react-router-dom';

class Energy extends React.Component {
	render() {
        return (
            <div className="energy">
            <div className="energyBanner"></div>
            <h3>Energy and Economics</h3>
            <div className="articlesContainer">
                <Link to="/articles/energy/amplified">
                    <div className="articleCard">
                        <div className="articleImage amplifiedMan"></div>
                        <div className="articleCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <p>The Amplified Man </p>
                                </div>
                                <div className="block2"><p>1982</p></div>
                            </div>
                            <p className="cardDescription"> 
                            This essay was first published in Resurgence Magazine nr. 95, November 1982, with minor
                            revisions in 2020.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/articles/energy/regenerative">
                    <div className="articleCard">
                        <div className="articleImage regenerativeCardImage"></div>
                        <div className="articleCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <p>Regenerative economies for a sustainable world</p>
                                </div>
                                <div className="block2"><p>2018</p></div>
                            </div>
                            <p className="cardDescription">This text was written for the Club of Rome in 2018 and published by Resurgence
                            Magazine. As climate breakdown accelerates, we must urgently learn from Nature’s
                            example to counter entropy.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/articles/energy/reframing-economics">
                    <div className="articleCard">
                        <div className="articleImage reframingEconomicsCardImage"></div>
                        <div className="articleCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <p>Reframing economics after Covid 19</p>
                                </div>
                                <div className="block2"><p>2020</p></div>
                            </div>
                            <p className="cardDescription">This text was written in 2020 for the Club of Rome’s ‘Reframing Economics’
                            Initiative.</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        )
	}
};

export default Energy