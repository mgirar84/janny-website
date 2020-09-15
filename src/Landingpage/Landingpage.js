import React from 'react';
import './Landingpage.scss'
import {Link} from 'react-router-dom'

class Landingpage extends React.Component {

    // navBarFunction () {
    //     var x = document.getElementsByClassName("buttonsContainer")[0]
    //     x.classList.toggle('active')
    // }

	render() {
        return (
            <div>
                <div className="mainText">
                    <h1>Herbert Girardet</h1>
                    <ul>
                        <li><a>About</a></li>
                        <li><a>Articles</a></li>
                        <li><a>Books</a></li>
                        <li><a>Documentaries</a></li>
                        <li><a>Lectures</a></li>
                        <li><a>Poems</a></li>
                    </ul>
                </div>
            </div>
        )
	}
};

export default Landingpage