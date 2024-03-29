import React from 'react';
import './GreenPlanet.scss';
import {Link} from 'react-router-dom';

class GreenPlanet extends React.Component {
	render() {
        return (
            <div className="greenPlanet">
                <div className="greenPlanetBanner"></div>
                <h3>Green Planet</h3>
                <div className="articlesContainer">
                    <a href="https://theecologist.org/2020/jul/15/view-amazon" target="_BLANK" rel="noopener noreferrer">
                        <div className="articleCard">
                            <div className="articleImage amazonPicture"></div>
                            <div className="articleCardText">
                                <div className="blockContainer">
                                    <div className="block1">
                                        <p>The view from the Amazon</p>
                                    </div>
                                    <div className="block2"><p>2020</p></div>
                                </div>
                                <p className="cardDescription">The story of deforestation is also the story of the globalisation.</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://theecologist.org/2020/apr/15/nature-taking-revenge" target="_BLANK" rel="noopener noreferrer">
                        <div className="articleCard">
                            <div className="articleImage natureRevengePicture"></div>
                            <div className="articleCardText">
                                <div className="blockContainer">
                                    <div className="block1">
                                        <p>Is nature taking revenge?</p>
                                    </div>
                                    <div className="block2"><p>2020</p></div>
                                </div>
                                <p className="cardDescription">Covid-19 exposes the inherent fragility of our globally interconnected economic systems and the inequalities that they perpetuate.</p>
                            </div>
                        </div>
                    </a>
                    <Link to="/articles/green-planet/earth-emergency">
                        <div className="articleCard">
                            <div className="articleImage callToAction"></div>
                            <div className="articleCardText">
                                <div className="blockContainer">
                                    <div className="block1">
                                        <p>A call to action </p>
                                    </div>
                                    <div className="block2"><p>2002</p></div>
                                </div>
                                <p className="cardDescription">This concise appeal was produced by myself and half a dozen colleagues for the UN Summit
                                    on sustainable development in Johannesburg, 2002. I was endorsed by hundreds of NGOs
                                    and environmental campaigners.</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/articles/green-planet/the-forest">
                        <div className="articleCard">
                            <div className="articleImage theForest"></div>
                            <div className="articleCardText">
                                <div className="blockContainer">
                                    <div className="block1">
                                        <p>The Forest</p>
                                    </div>
                                    <div className="block2"><p>2020</p></div>
                                </div>
                                <p className="cardDescription">This text was written for the Forest of Dean Resilience Anthology 2020</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/articles/green-planet/landtosea">
                        <div className="articleCard">
                            <div className="articleImage landtoseaCard"></div>
                            <div className="articleCardText">
                                <div className="blockContainer">
                                    <div className="block1">
                                        <p>From the Land to the Sea</p>
                                    </div>
                                    <div className="block2"><p>2018</p></div>
                                </div>
                                <p className="cardDescription">This article was published by the Soil Association in 2018.</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/articles/green-planet/culture-and-ecology">
                        <div className="articleCard">
                            <div className="articleImage cultureAndEcologyCard"></div>
                            <div className="articleCardText">
                                <div className="blockContainer">
                                    <div className="block1">
                                    <p>Culture and Ecology</p>
                                    </div>
                                    <div className="block2"><p>2020</p></div>
                                </div>
                                <p className="cardDescription">This text is based on a lecture I delivered at the Bristol Schumacher Lectures in 1990 after
                                completing work on a series of environment-focussed TV programmes for the BBC and Channel
                                4. I have augmented this text in October 2020</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
	}
};

export default GreenPlanet