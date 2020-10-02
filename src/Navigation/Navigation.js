import React from 'react';
import './Navigation.scss'
import {Link} from 'react-router-dom'

class Navigation extends React.Component {

    navBarFunction () {
        var x = document.getElementsByClassName("buttonsContainer")[0]
        x.classList.toggle('active')
    }

	render() {
        return (
            <div className="navbar">
                <a href="javascript:void(0);" className="icon" onClick={this.navBarFunction}>
                    <i className="fa fa-bars"></i>
                </a>
                <div className="buttonsContainer">
                    <div className="dropdown">
                        <button className="dropbtn">Articles</button>
                        <div className="dropdownContent">
                            <Link to="/articles/green-planet"><p>Green Planet</p></Link>
                            <Link to="/articles/cities"><p>Sustainable Cities</p></Link>
                            <Link to="/articles/energy"><p>Energy and Economics</p></Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <Link to="/poems"><button className="dropbtn nonListLink">Poems</button></Link>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Lectures</button>
                        <div className="dropdownContent">
                            <Link to="/lectures/lecture1"><p>Lecture1</p></Link>
                            <Link to="/lectures/lecture2"><p>Lecture2</p></Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <Link to="/books"><button className="dropbtn nonListLink">Books</button></Link>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Documentaries</button>
                        <div className="dropdownContent">
                            <Link to="/documentaries/jungle-pharmacy"><p>Jungle Pharmacy</p></Link>
                            <Link to="/documentaries/doc2"><p>Doc2</p></Link>
                            <Link to="/documentaries/doc3"><p>Doc3</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
	}
};

export default Navigation