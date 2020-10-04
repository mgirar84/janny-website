import React from 'react';
import './Books.scss';
import {Link} from 'react-router-dom';

class Books extends React.Component {
	render() {
        return (
            <div className="books">
                <div className="booksBanner"></div>
                <h3 className="bookTitle">Books</h3>
                <div className="booksContainer">
                <div className="bookCard">
                        <div className="bookImage book1"></div>
                        <div className="bookCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <h4>Creating Regenerative <br></br>Cities</h4>
                                    {/* <Link to="/books/earthrise"><p>Chapter 4 - Amazonia Ablaze</p></Link> */}
                                </div>
                                <div className="block2"><h4>| 2014</h4></div>
                            </div>
                            <p>This book argues that whilst humanity is building an urban
                                future, urbanisation in its current form is threatening the very future of humanity and the natural
                                world. Its key premise is that sustainability is not enough. Cities, as the primary users of the world’s
                                resources, need to make an active contribution towards regenerating the ecosystems on whose
                                health they depend. The book features 20 case studies where these ideas are being implemented.
                            </p>
                            <a href='https://www.amazon.co.uk/Creating-Regenerative-Cities-Herbert-Girardet-ebook/dp/B00O1PQQX0/ref=sr_1_1?dchild=1&keywords=creating+regenerative+cities&qid=1598015030&sr=8-1' target='_BLANK'>Buy on Amazon</a>
                        </div>
                    </div>
                    <div className="bookCard">
                        <div className="bookImage book2"></div>
                        <div className="bookCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <h4>A Renewable World</h4>
                                    {/* <Link to="/books/earthrise"><p>Chapter 4 - Amazonia Ablaze</p></Link> */}
                                </div>
                                <div className="block2"><h4>| 2009</h4></div>
                            </div>
                            <p>This book was written for the Rio Earth Summit, 1992. It aims to give an overview of
                                how we are affecting the biosphere and that there are ways out of the mess we have been making.
                                Much of the book is based on my experiences as a film maker, travelling to places that we usually
                                don’t have access too. It introduces the concept of the ‘amplified man’: our powers have been
                                greatly enhanced by technology. But can we tame ourselves for the benefit of future generations?
                            </p>
                            <a href='https://www.amazon.co.uk/Renewable-World-Ecology-Equality-Council-ebook/dp/B00EGWJNTW/ref=sr_1_2?dchild=1&keywords=a+renewable+world&qid=1598015202&sr=8-2' target='_BLANK'>Buy on Amazon</a>
                        </div>
                    </div>
                    <div className="bookCard">
                        <div className="bookImage book13"></div>
                        <div className="bookCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <h4>Cities, People, Planet</h4>
                                    {/* <Link to="/books/earthrise"><p>Chapter 4 - Amazonia Ablaze</p></Link> */}
                                </div>
                                <div className="block2"><h4>| 2008</h4></div>
                            </div>
                            <p>
                                An urbanising humanity has come to dominate much of the surface of the earth.
                                 This book argues that developing a sustainable relationship between urban people
                                  and planet is one of humanity's greatest challenges, with climate change top of 
                                  the agenda. After a succinct overview of the environmental history of cities, the
                                   book presents a great variety of case studies from across the world of how cities
                                    could transform themselves into sustainable systems.
                            </p>
                            <a href='https://www.amazon.co.uk/Cities-People-Planet-Development-Climate/dp/0470772700/ref=sr_1_1?crid=7VWQRVIFXPI7&dchild=1&keywords=cities+people+planet&qid=1598606491&sprefix=people+cities+pla%2Caps%2C147&sr=8-1' target='_BLANK'>Buy on Amazon</a>
                        </div>
                    </div>
                    <div className="bookCard">
                        <div className="bookImage book3"></div>
                        <div className="bookCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <h4>Surviving the Century</h4>
                                    {/* <Link to="/books/earthrise"><p>Chapter 4 - Amazonia Ablaze</p></Link> */}
                                </div>
                                <div className="block2"><h4>| 2007</h4></div>
                            </div>
                            <p>I edited and co-authored this book for the WFC. It starts by pointing
                                out that despite unprecedented knowledge, skills and resources we are on a collision course with
                                our own future. It deals with climate change, renewable energy, food supply, rainforest destruction,
                                urban futures, circular economy, and new visons for world trade and for democracy. Its 8 authors
                                are mostly members of the WFC. The book was also published in a German language edition.
                            </p>
                            <a href='https://www.amazon.co.uk/Surviving-Century-Facing-Climate-Challenges-ebook/dp/B00872FPUI/ref=sr_1_1?dchild=1&keywords=Surviving+the+century&qid=1598015355&sr=8-1' target='_BLANK'>Buy on Amazon</a>
                        </div>
                    </div>
                    <div className="bookCard">
                        <div className="bookImage book4"></div>
                        <div className="bookCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <h4>Creating the World</h4>
                                    <h4>Future Council</h4>
                                    {/* <Link to="/books/earthrise"><p>Chapter 4 - Amazonia Ablaze</p></Link> */}
                                </div>
                                <div className="block2"><h4>| 2004</h4></div>
                            </div>
                            <p>This short book, by Jakob von Uexkull and myself, was the
                                document which launched a new international NGO in 2005 – the World Future Council (WFC). At
                                the turn of the millennium it had become apparent that the lack of long-term perspectives in policy
                                making by governments had to be addressed in new, creative ways. The WFC has since become an
                                important, internationally recognised and increasingly effective ‘voice of future generations’.
                            </p>
                            <a href='https://www.amazon.co.uk/Shaping-Our-Future-Creating-Council/dp/1903998654/ref=sr_1_1?dchild=1&keywords=creating+the+world+future+council&qid=1598015401&sr=8-1' target='_BLANK'>Buy on Amazon</a>
                        </div>
                    </div>
                    <div className="bookCard">
                        <div className="bookImage book5"></div>
                        <div className="bookCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <h4>The People’s Planet</h4>
                                    {/* <Link to="/books/earthrise"><p>Chapter 4 - Amazonia Ablaze</p></Link> */}
                                </div>
                                <div className="block2"><h4>| 2001</h4></div>
                            </div>
                            <p>This book has only been published in Japanese. It is based on a six-part
                                TV series produced by NHK, Tokyo, and CNN, for which I wrote the scripts and then worked as series
                                consultant. The main interviewee was Lester Brown, director of the Earth Policy Institute in
                                Washington. Filmed in 40 countries, the series tried to indicate solutions to all the key human
                                impacts on Planet Earth – farming, energy, urbanisation, industrial pollution and population growth.
                            </p>
                            {/* <a href='https://www.amazon.co.uk/Creating-Regenerative-Cities-Herbert-Girardet-ebook/dp/B00O1PQQX0/ref=sr_1_1?dchild=1&keywords=creating+regenerative+cities&qid=1598015030&sr=8-1' target='_BLANK'>Buy on Amazon</a> */}
                        </div>
                    </div>
                    <div className="bookCard">
                        <div className="bookImage book6"></div>
                        <div className="bookCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <h4>Creating Sustainable Cities</h4>
                                    {/* <Link to="/books/earthrise"><p>Chapter 4 - Amazonia Ablaze</p></Link> */}
                                </div>
                                <div className="block2"><h4>| 1999</h4></div>
                            </div>
                            <p>This is part of a series of short books called Schumacher Briefings
                                edited by myself. This book draws a lot on the work I did in London, analysing its metabolism and
                                quantifying its use of resources and its ecological footprint. It describes cities as superorganisms that
                                need to develop a better understanding of how to become truly sustainable – environmentally,
                                economically and socially. The booklet has also been published in four foreign language editions.
                            </p>
                            <a href='https://www.amazon.co.uk/Creating-Sustainable-Cities-Schumacher-Briefings/dp/1870098773/ref=sr_1_1?dchild=1&keywords=creating+sustainable+cities&qid=1598015482&sr=8-1' target='_BLANK'>Buy on Amazon</a>
                        </div>
                    </div>
                    <div className="bookCard">
                        <div className="bookImage book7"></div>
                        <div className="bookCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <h4>Making Cities Work</h4>
                                    {/* <Link to="/books/earthrise"><p>Chapter 4 - Amazonia Ablaze</p></Link> */}
                                </div>
                                <div className="block2"><h4>| 1996</h4></div>
                            </div>
                            <p>This book was commissioned by UN Habitat for the 1996 United Nations
                                Cities Summit in Istanbul. It is a hands-on text concerned with the organisational challenges and
                                practicalities of creating a sustainable world of cities. Its four co-authors, including myself, draw on a
                                great range of ‘best practice’ case studies from many countries. The book emphasises the joint
                                learning that is needed for rich and poor cities to benefit from each other’s experiences.
                            </p>
                            {/* <a href='https://www.amazon.co.uk/Creating-Regenerative-Cities-Herbert-Girardet-ebook/dp/B00O1PQQX0/ref=sr_1_1?dchild=1&keywords=creating+regenerative+cities&qid=1598015030&sr=8-1' target='_BLANK'>Buy on Amazon</a> */}
                        </div>
                    </div>
                    <div className="bookCard">
                        <div className="bookImage book8"></div>
                        <div className="bookCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <h4>The Gaia Atlas of Cities</h4>
                                    {/* <Link to="/books/earthrise"><p>Chapter 4 - Amazonia Ablaze</p></Link> */}
                                </div>
                                <div className="block2"><h4>| 1993</h4></div>
                            </div>
                            <p>This is not primarily about urban planning but about how cities can
                                thrive whilst curtailing their impacts on the living world beyond. Cities use vast amounts of resources
                                but most of these originate from outside the urban territory. The book indicates new directions for
                                sustainable urban living, in both theory and in practice. It was adopted as a key text by the United
                                Nations City Summit in Istanbul in 1996. Four foreign language editions were also published.
                            </p>
                            <a href='https://www.amazon.co.uk/Gaia-Atlas-Cities-Directions-Sustainable/dp/0385419155/ref=sr_1_1?dchild=1&keywords=the+gaia+atlas+of+cities&qid=1598015593&sr=8-1' target='_BLANK'>Buy on Amazon</a>
                        </div>
                    </div>
                    <div className="bookCard">
                        <div className="bookImage book9"></div>
                        <div className="bookCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <h4>Earthrise</h4>
                                </div>
                                <div className="block2"><h4>| 1992</h4></div>
                            </div>
                            <p>This book was written for the Rio Earth Summit, 1992. It aims to give an overview of
                                how we are affecting the biosphere and that there are ways out of the mess we have been making.
                                Much of the book is based on my experiences as a film maker, travelling to places that we usually
                                don’t have access too. It introduces the concept of the ‘amplified man’: our powers have been
                                greatly enhanced by technology. But can we tame ourselves for the benefit of future generations?
                            </p>
                            <a href='https://www.amazon.co.uk/Earthrise-Herbert-Girardet/dp/0586092528/ref=sr_1_1?dchild=1&keywords=earthrise+herbert&qid=1598015623&sr=8-1' target='_BLANK'>Buy on Amazon</a>
                            <Link to="/books/earthrise"><p>Click here to read chapter 4 - Amazonia Ablaze</p></Link>
                        </div>
                    </div>
                    <div className="bookCard">
                        <div className="bookImage book10"></div>
                        <div className="bookCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <h4>Blueprint for a Green<br></br> Planet</h4>
                                    {/* <Link to="/books/earthrise"><p>Chapter 4 - Amazonia Ablaze</p></Link> */}
                                </div>
                                <div className="block2"><h4>| 1987</h4></div>
                            </div>
                            <p>This book follows on from Far from Paradise as a guide to
                                practical action to fight pollution and to live sustainably, one of the first books on this topic. In the
                                late 1980s it was becoming apparent that the rise of consumerism was causing huge environmental
                                damage, and that personal responsibility had to be taken in response. The highly illustrated book
                                was published in the UK by Dorling Kindersley and also in 14 foreign language editions.
                            </p>
                            <a href='https://www.amazon.co.uk/Blueprint-Green-Planet-Practical-Environment/dp/0130796255/ref=sr_1_1?dchild=1&keywords=blueprint+for+a+green+planet&qid=1598015652&sr=8-1' target='_BLANK'>Buy on Amazon</a>
                        </div>
                    </div>
                    <div className="bookCard">
                        <div className="bookImage book12"></div>
                        <div className="bookCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    {/* <Link to="/books/earthrise"><p>Chapter 4 - Amazonia Ablaze</p></Link> */}
                                    <h4>Land for the People</h4>
                                </div>
                                <div className="block2"><h4>| 1986</h4></div>
                            </div>
                            <p>This short, edited book, written by 12 co-authors, argues that the time
                                had come for land in Britain to be made available for people who want to resettle the rural areas
                                and make a living there. At a time of economic uncertainty, a new balance between urban and rural
                                living was needed. Would it be possible for new villages to be built on existing farmland, enabling
                                people to lead sustainable rural lives and to help Britain achieve greater food self-sufficiency?
                            </p>
                            {/* <a href='https://www.amazon.co.uk/Far-Paradise-Story-Impact-Environment/dp/0563203579/ref=sr_1_2?dchild=1&keywords=far+from+paradise+herbert&qid=1598015679&sr=8-2' target='_BLANK'>Buy on Amazon</a> */}
                        </div>
                    </div>
                    <div className="bookCard">
                        <div className="bookImage book11"></div>
                        <div className="bookCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <h4>Far from Paradise</h4>
                                    {/* <Link to="/books/earthrise"><p>Chapter 4 - Amazonia Ablaze</p></Link> */}
                                </div>
                                <div className="block2"><h4>| 1986</h4></div>
                            </div>
                            <p>This book was written to accompany a seven-part TV series produced by
                                BBC Wales for BBC 2, and co-produced by German and Austrian broadcasters. As an exploration of
                                the history of human impacts on the environment, it was filmed across Europe, the Middle East and
                                the United States. John Seymour, as presenter, and myself, as researcher of the TV series alternate
                                the 16 chapters of the book, published by BBC Publications, and also as a German language edition.
                            </p>
                            <a href='https://www.amazon.co.uk/Far-Paradise-Story-Impact-Environment/dp/0563203579/ref=sr_1_2?dchild=1&keywords=far+from+paradise+herbert&qid=1598015679&sr=8-2' target='_BLANK'>Buy on Amazon</a>
                        </div>
                    </div>
                </div>
            </div>
        )
	}
};

export default Books