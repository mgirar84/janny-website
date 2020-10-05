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
                    <div className="articleCard">
                        <div className="articleImage city1"></div>
                        <div className="articleCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <Link to="/articles/cities/sustainability"><p>Sustainability is <br></br>unhelpful</p></Link>
                                </div>
                                <div className="block2"><p>| 10th June 2013</p></div>
                                <br></br>
                            </div>
                            <p className="cardDescription">This article was published by the Guardian on 10th June 2013. It advertised my Schumacher
                            Lecture at City Hall, Bristol, as part of the annual Schumacher Lectures which I also hosted
                            for 15 years.
                            </p>
                        </div>
                    </div>
                    <div className="articleCard">
                        <div className="articleImage city4"></div>
                        <div className="articleCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <a href="https://dunstan.org.au/wp-content/uploads/2018/12/TIR_Reports_2003_Girardet.pdf" target="_BLANK" rel="noopener noreferrer"><p>Creating a Sustainable Adelaide</p></a>
                                </div>
                                <div className="block2"><p>| 2003</p></div>
                                <br></br>
                            </div>
                            <p className="cardDescription">This report is the product of two months work by a group of people under the umbrella of the Adelaide Green City Program.
                                 As ‘Thinker in residence’ I had been asked by South Australian Premier Mike Rann to explore policy options for making Adelaide a green, sustainable city.</p>
                        </div>
                    </div>
                    <div className="articleCard">
                        <div className="articleImage city5"></div>
                        <div className="articleCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <a href="https://theecologist.org/2020/feb/26/people-and-nature-urban-world" target="_BLANK" rel="noopener noreferrer"><p>People and nature<br></br> in an urban world</p></a>
                                </div>
                                <div className="block2"><p>| 26th February 2020</p></div>
                            </div>
                            <p className="cardDescription">The sustainability of cities is inextricably linked to the sustainability of distant places.
                                 We need a new, integrated approach to planetary stewardship to address this challenge.
                            </p>
                        </div>
                    </div>
                    <div className="articleCard">
                        <div className="articleImage city6"></div>
                        <div className="articleCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <a href="https://www.researchgate.net/publication/284992045_Urban_agriculture_and_sustainable_cities" target="_BLANK" rel="noopener noreferrer"><p>Urban Agriculture and<br></br> Sustainable Cities</p></a>
                                </div>
                                <div className="block2"><p>| January 2000</p></div>
                            </div>
                            <p className="cardDescription">At the end of the 20th century, humanity is involved in an unprecedented experiment: we are turning ourselves into an urban species. Large cities, not villages and towns, are becoming our main habitat. 
                                Urban growth is changing the face of the earth and the condition of humanity.
                            </p>
                        </div>
                    </div>
                    <div className="articleCard">
                        <div className="articleImage city7"></div>
                        <div className="articleCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                <Link to="/articles/cities/metabolism"><p>The Metabolism of Cities</p></Link>
                                </div>
                                <div className="block2"><p>| 1990</p></div>
                            </div>
                            <p className="cardDescription">This text set me off on a long journey to explore the impacts of an urbanising world on the global
                                environment. It was published in Cadman, Geoffrey Payne, eds., The Living City: Towards a
                                Sustainable Future, Routledge, 1990.
                            </p>
                        </div>
                    </div>
                    <div className="articleCard">
                        <div className="articleImage city8"></div>
                        <div className="articleCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                <Link to="/articles/cities/ecology"><p>Ecology, Energy, Planning</p></Link>
                                </div>
                                <div className="block2"><p>| 1977</p></div>
                            </div>
                            <p className="cardDescription">This text was written in November 1977 for the Town and Country Planning Association’s
                                Ecology and Development working party.
                            </p>
                        </div>
                    </div>
                    <div className="articleCard">
                        <div className="articleImage nightTrainCardImage"></div>
                        <div className="articleCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                <Link to="/articles/cities/nighttrain"><p>Night train to Xi’an</p></Link>
                                </div>
                                <div className="block2"><p>| 0000</p></div>
                            </div>
                            <p className="cardDescription">
                                Shanghai Railway Station is a place like no other. 
                                The whole of the population of this vast city seems
                                to want to travel at the same time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
	}
};

export default Cities