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
                            <Link to="/articles/green-planet" onClick={this.navBarFunction}><p>Green Planet</p></Link>
                            <Link to="/articles/cities" onClick={this.navBarFunction}><p>Sustainable Cities</p></Link>
                            <Link to="/articles/energy" onClick={this.navBarFunction}><p>Energy and Economics</p></Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <Link to="/poems" onClick={this.navBarFunction}><button className="dropbtn nonListLink">Poems</button></Link>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Lectures</button>
                        <div className="dropdownContent">
                            <Link to="/lectures/lecture1" onClick={this.navBarFunction}><p>Lecture1</p></Link>
                            <Link to="/lectures/lecture2" onClick={this.navBarFunction}><p>Lecture2</p></Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <Link to="/books" onClick={this.navBarFunction}><button className="dropbtn nonListLink">Books</button></Link>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Documentaries</button>
                        <div className="dropdownContent">
                            <Link to="/documentaries/jungle-pharmacy" onClick={this.navBarFunction}><p>Jungle Pharmacy</p></Link>
                            <Link to="/documentaries/doc2" onClick={this.navBarFunction}><p>Doc2</p></Link>
                            <Link to="/documentaries/doc3" onClick={this.navBarFunction}><p>Doc3</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
	}
};

export default Navigation