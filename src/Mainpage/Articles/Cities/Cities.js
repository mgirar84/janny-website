import React from 'react';
import './Cities.scss';
import {Link} from 'react-router-dom';

class Cities extends React.Component {
	render() {
        return (
            <div className="cities">
                <h2>Sustainable Cities</h2>
                <div className="articlesContainer">
                    <div className="articleCard">
                        <div className="articleImage city1"></div>
                        <div className="articleCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <Link to="/articles/cities/sustainability"><p>Sustainability is unhelpful</p></Link>
                                </div>
                                <div className="block2"><p>| 10th June 2013</p></div>
                                <br></br>
                            </div>
                            <p>This article was published by the Guardian on 10th June 2013. It advertised my Schumacher
                            Lecture at City Hall, Bristol, as part of the annual Schumacher Lectures which I also hosted
                            for 15 years.
                            </p>
                        </div>
                    </div>
                    <div className="articleCard">
                        <div className="articleImage city2"></div>
                        <div className="articleCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <Link to="/articles/cities/regenerative"><p>Regenerative economies<br></br> for a sustainable world</p></Link>
                                </div>
                                <div className="block2"><p>| 2018</p></div>
                            </div>
                            <p>This text was written for the Club of Rome in 2018 and published by Resurgence
                            Magazine. As climate breakdown accelerates, we must urgently learn from Nature’s
                            example to counter entropy.
                            </p>
                        </div>
                    </div>
                    <div className="articleCard">
                        <div className="articleImage city3"></div>
                        <div className="articleCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                <Link to="/articles/cities/revenge"><p>Earth Emergency – a call to action</p></Link>
                                </div>
                                <div className="block2"><p>| 2002</p></div>
                                <br></br>
                            </div>
                            <p>This concise appeal was produced by myself and half a dozen colleagues for the UN Summit
                                on sustainable development in Johannesburg, 2002. I was endorsed by hundreds of NGOs
                                and environmental campaigners.</p>
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
                            <p>This report is the product of two months work by a group of people under the umbrella of the Adelaide Green City Program.
                                 As ‘Thinker in residence’ I had been asked by South Australian Premier Mike Rann to explore policy options for making Adelaide a green, sustainable city.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
	}
};

export default Cities