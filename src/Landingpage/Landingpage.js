import React from 'react';
import './Landingpage.scss'
import {Link} from 'react-router-dom'

class Landingpage extends React.Component {

    toggleArticles() {
        var x = document.getElementsByClassName('articleLinks')[0]
        x.classList.toggle('show')
    }

	render() {
        return (
            <div className="landingPage">
                <div className="mainText">
                    <h1>Herbert Girardet</h1>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><a className="dropLink" onClick={this.toggleArticles}>Articles</a></li>
                        <ul className="articleLinks">
                            <li><Link to="/articles/green-planet">Green Planet</Link></li>
                            <li><Link to="/articles/cities">Sustainable Cities</Link></li>
                            <li><Link to="/articles/energy"><p>Energy and Economics</p></Link></li>
                        </ul>
                        <li><Link to="/books">Books</Link></li>
                        <li><a className="dropLink">Documentaries</a></li>
                        <li><a className="dropLink">Lectures</a></li>
                        <li><Link to="/poems">Poems</Link></li>
                    </ul>
                </div>
            </div>
        )
	}
};

export default Landingpage