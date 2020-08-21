import React from 'react';
import './Navigation.scss'
import {Link} from 'react-router-dom'

class Navigation extends React.Component {

    myFunction() {
        var x = document.getElementsByClassName("buttonsContainer");
        if (x.id === "topNav") {
          x.id += " responsive";
        } else {
          x.id = "topNav";
        }
    }

	render() {
        return (
            <div class="buttonsContainer" id="topnav">
                <div class="dropdown">
                    <button class="dropbtn" id="topnav">Articles</button>
                    <div class="dropdownContent">
                        <Link to="/articles/green-planet"><p>Green Planet</p></Link>
                        <Link to="/articles/cities"><p>Sustainable Cities</p></Link>
                        <Link to="/articles/energy"><p>Energy and Economics</p></Link>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn" id="topnav">Poems</button>
                    <div class="dropdownContent">
                        <Link to="/poems/poem1"><p>Poem1</p></Link>
                        <Link to="/poems/poem2"><p>Poem2</p></Link>
                        <Link to="/poems/poem3"><p>Poem3</p></Link>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn" id="topnav">Lectures</button>
                    <div class="dropdownContent">
                        <Link to="/lectures/lecture1"><p>Lecture1</p></Link>
                        <Link to="/lectures/lecture2"><p>Lecture2</p></Link>
                    </div>
                </div>
                <div class="dropdown">
                    <Link to="/books"><button class="dropbtn nonListLink" id="topnav">Books</button></Link>
                    {/* <div class="dropdownContent">
                        <Link to="/books/Earthrise"><p>Earthrise</p></Link>
                        <Link to="/books/book2"><p>Book2</p></Link>
                        <Link to="/books/book3"><p>Book3</p></Link>
                    </div> */}
                </div>
                <div class="dropdown">
                    <button class="dropbtn" id="topnav">Documentaries</button>
                    <div class="dropdownContent">
                        <Link to="/documentaries/jungle-pharmacy"><p>Jungle Pharmacy</p></Link>
                        <Link to="/documentaries/doc2"><p>Doc2</p></Link>
                        <Link to="/documentaries/doc3"><p>Doc3</p></Link>
                    </div>
                </div>
                <a href="javascript:void(0);" class="icon" id="topnav" onclick={this.myFunction()}>
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        )
	}
};

export default Navigation