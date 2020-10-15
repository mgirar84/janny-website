import React from 'react';
import './Landingpage.scss'
import {Link} from 'react-router-dom'

class Landingpage extends React.Component {

    toggleArticles() {
        var x = document.getElementsByClassName('articles')[0]
        x.classList.toggle('show')
    }

    toggleDocs() {
        var x = document.getElementsByClassName('docs')[0]
        x.classList.toggle('show')
    }

    toggleLectures() {
        var x = document.getElementsByClassName('lectures')[0]
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
                        <ul className="links articles">
                            <li><Link to="/articles/green-planet">Green Planet</Link></li>
                            <li><Link to="/articles/cities">Sustainable Cities</Link></li>
                            <li><Link to="/articles/energy">Energy and Economics</Link></li>
                        </ul>
                        <li><Link to="/books">Books</Link></li>
                        <li><Link to="/documentaries">Documentaries</Link></li>
                        <li><a className="dropLink" onClick={this.toggleLectures}>Lectures</a></li>
                        <ul className="links lectures">
                            <li><Link to="/lectures/lecture1">Lecture1</Link></li>
                            <li><Link to="/lectures/lecture2">Lecture2</Link></li>
                        </ul>
                        <li><Link to="/poems">Poems</Link></li>
                    </ul>
                </div>
            </div>
        )
	}
};

export default Landingpage