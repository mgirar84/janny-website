import React from 'react';
import './Books.scss';
import {Link} from 'react-router-dom';

class Books extends React.Component {
	render() {
        return (
            <div className="Books">
                <h2>Books</h2>
                <div className="booksContainer">
                    <div className="bookCard">
                        <div className="bookImage book1"></div>
                        <div className="bookCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <Link to="/books/earthrise"><p>Chapter 4 - Amazonia Ablaze</p></Link>
                                </div>
                                <div className="block2"><p>| 1992</p></div>
                                <br></br>
                            </div>
                            <p>About this book</p>
                        </div>
                    </div>
                    <div className="bookCard">
                        <div className="bookImage book2"></div>
                        <div className="bookCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                    <Link to="/books/regenerative"><p>Regenerative economies<br></br> for a sustainable world</p></Link>
                                </div>
                                <div className="block2"><p>| 2018</p></div>
                            </div>
                            <p>About this book</p>
                        </div>
                    </div>
                    <div className="bookCard">
                        <div className="bookImage book3"></div>
                        <div className="bookCardText">
                            <div className="blockContainer">
                                <div className="block1">
                                <Link to="/books/revenge"><p>Is nature taking revenge?</p></Link>
                                </div>
                                <div className="block2"><p>| 2002</p></div>
                                <br></br>
                            </div>
                            <p>About this book</p>
                        </div>
                    </div>
                </div>
            </div>
        )
	}
};

export default Books