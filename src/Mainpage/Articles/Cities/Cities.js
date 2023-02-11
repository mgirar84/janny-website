import React from 'react';
import './Cities.scss';
import {Link} from 'react-router-dom';

class Cities extends React.Component {
	render() {
        return (
            <div className="cities">
                <div className="citiesBanner"></div>
                <h3>Sustainable Cities</h3>
                <div className="articlesContainer">
                    <Link to="/articles/cities/sustainability">
                        <div className="articleCard">
                            <div className="articleImage city1"></div>
                            <div className="articleCardText">
                                <div className="blockContainer">
                                    <div className="block1">
                                        <p>Sustainability is unhelpful</p>
                                    </div>
                                    <div className="block2"><p>2013</p></div>
                                </div>
                                <p className="cardDescription">This article was published by the Guardian on 10th June 2013. It advertised my Schumacher
                                Lecture at City Hall, Bristol, as part of the annual Schumacher Lectures which I also hosted
                                for 15 years.
                                </p>
                            </div>
                        </div>
                    </Link>
                    <a href="https://dunstan.org.au/wp-content/uploads/2018/12/TIR_Reports_2003_Girardet.pdf" target="_BLANK" rel="noopener noreferrer">
                        <div className="articleCard">
                            <div className="articleImage city4"></div>
                            <div className="articleCardText">
                                <div className="blockContainer">
                                    <div className="block1">
                                        <p>Creating a Sustainable Adelaide</p>
                                    </div>
                                    <div className="block2"><p>2003</p></div>
                                </div>
                                <p className="cardDescription">This report is the product of two months work by a group of people under the umbrella of the Adelaide Green City Program.
                                    As ‘Thinker in residence’ I had been asked by South Australian Premier Mike Rann to explore policy options for making Adelaide a green, sustainable city.</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://theecologist.org/2020/feb/26/people-and-nature-urban-world" target="_BLANK" rel="noopener noreferrer">
                        <div className="articleCard">
                            <div className="articleImage city5"></div>
                            <div className="articleCardText">
                                <div className="blockContainer">
                                    <div className="block1">
                                        <p>People and nature in an urban world</p>
                                    </div>
                                    <div className="block2"><p>2020</p></div>
                                </div>
                                <p className="cardDescription">The sustainability of cities is inextricably linked to the sustainability of distant places.
                                    We need a new, integrated approach to planetary stewardship to address this challenge.
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.researchgate.net/publication/284992045_Urban_agriculture_and_sustainable_cities" target="_BLANK" rel="noopener noreferrer">
                        <div className="articleCard">
                            <div className="articleImage city6"></div>
                            <div className="articleCardText">
                                <div className="blockContainer">
                                    <div className="block1">
                                        <p>Urban Agriculture and<br></br> Sustainable Cities</p>
                                    </div>
                                    <div className="block2"><p>2000</p></div>
                                </div>
                                <p className="cardDescription">At the end of the 20th century, humanity is involved in an unprecedented experiment: we are turning ourselves into an urban species. Large cities, not villages and towns, are becoming our main habitat. 
                                    Urban growth is changing the face of the earth and the condition of humanity.
                                </p>
                            </div>
                        </div>
                    </a>
                    <Link to="/articles/cities/metabolism">
                        <div className="articleCard">
                            <div className="articleImage city7"></div>
                            <div className="articleCardText">
                                <div className="blockContainer">
                                    <div className="block1">
                                        <p>The Metabolism of Cities</p>
                                    </div>
                                    <div className="block2"><p>1990</p></div>
                                </div>
                                <p className="cardDescription">This text set me off on a long journey to explore the impacts of an urbanising world on the global
                                    environment. It was published in Cadman, Geoffrey Payne, eds., The Living City: Towards a
                                    Sustainable Future, Routledge, 1990.
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/articles/cities/ecology">
                        <div className="articleCard">
                            <div className="articleImage city8"></div>
                            <div className="articleCardText">
                                <div className="blockContainer">
                                    <div className="block1">
                                    <p>Ecology, Energy, Planning</p>
                                    </div>
                                    <div className="block2"><p>1977</p></div>
                                </div>
                                <p className="cardDescription">This text was written in November 1977 for the Town and Country Planning Association’s
                                    Ecology and Development working party.
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/articles/cities/nighttrain">
                        <div className="articleCard">
                            <div className="articleImage nightTrainCardImage"></div>
                            <div className="articleCardText">
                                <div className="blockContainer">
                                    <div className="block1">
                                    <p>Night train to Xi’an</p>
                                    </div>
                                    <div className="block2"><p>2018</p></div>
                                </div>
                                <p className="cardDescription">
                                    Shanghai Railway Station is a place like no other. 
                                    The whole of the population of this vast city seems
                                    to want to travel at the same time.
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/articles/cities/urban-systems">
                        <div className="articleCard">
                            <div className="articleImage urbanSystemsCardImage"></div>
                            <div className="articleCardText">
                                <div className="blockContainer">
                                    <div className="block1">
                                    <p>Urban systems and their impacts</p>
                                    </div>
                                    <div className="block2"><p>2020</p></div>
                                </div>
                                <p className="cardDescription">
                                This article was published in a special edition of Environmental Scientist’ in October 2020.
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/articles/cities/cities-plan">
                        <div className="articleCard">
                            <div className="articleImage citiesPlanCardImage"></div>
                            <div className="articleCardText">
                                <div className="blockContainer">
                                    <div className="block1">
                                    <p>City with a plan</p>
                                    </div>
                                    <div className="block2"><p>2020</p></div>
                                </div>
                                <p className="cardDescription">
                                Herbert Girardet describes a city-related initiative that's focused around sustainability goals.
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/articles/cities/urban-transitions">
                        <div className="articleCard">
                            <div className="articleImage urbanTransitionsCardImage"></div>
                            <div className="articleCardText">
                                <div className="blockContainer">
                                    <div className="block1">
                                    <p>Urban Transitions</p>
                                    </div>
                                    <div className="block2"><p>2018</p></div>
                                </div>
                                <p className="cardDescription">
                                An interview conducted by Prof. Marilyne Andersen, MIT, at the Urban Transitions Global Summit in
                                Shanghai on 10th July 2018
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
	}
};

export default Cities