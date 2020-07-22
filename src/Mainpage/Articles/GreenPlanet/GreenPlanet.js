import React from 'react';
import './GreenPlanet.scss';
import {Link} from 'react-router-dom';

class GreenPlanet extends React.Component {
	render() {
        return (
            <div className="greenPlanet">
                <h2>Green Planet</h2>
                <div className="articlesContainer">
                    <div className="articleCard">
                        <div className="articleImage amazonPicture"></div>
                        <div className="articleCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <a href="https://theecologist.org/2020/apr/15/nature-taking-revenge" target="_BLANK" rel="noopener noreferrer"><p>The view from the Amazon</p></a>
                                </div>
                                <div className="block2"><p>| 15th July 2020</p></div>
                            </div>
                            <p>Covid-19 exposes the inherent fragility of our globally interconnected economic systems and the inequalities that they perpetuate.</p>
                        </div>
                    </div>
                    <div className="articleCard">
                        <div className="articleImage natureRevengePicture"></div>
                        <div className="articleCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <a href="https://theecologist.org/2020/apr/15/nature-taking-revenge" target="_BLANK" rel="noopener noreferrer"><p>Is nature taking revenge?</p></a>
                                </div>
                                <div className="block2"><p>| 15th April 2020</p></div>
                            </div>
                            <p>Covid-19 exposes the inherent fragility of our globally interconnected economic systems and the inequalities that they perpetuate.</p>
                        </div>
                    </div>
                    <div className="articleCard">
                        <div className="articleImage callToAction"></div>
                        <div className="articleCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <Link to="/articles/green-planet/earth-emergency"><p>A call to action </p></Link>
                                </div>
                                <div className="block2"><p>| 2002</p></div>
                            </div>
                            <p>This concise appeal was produced by myself and half a dozen colleagues for the UN Summit
                                on sustainable development in Johannesburg, 2002. I was endorsed by hundreds of NGOs
                                and environmental campaigners.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
	}
};

export default GreenPlanet