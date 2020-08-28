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
            <div>
                <a href="javascript:void(0);" class="icon" onClick={this.navBarFunction}>
                    <i class="fa fa-bars"></i>
                </a>
                <div class="buttonsContainer">
                    <div class="dropdown">
                        <button class="dropbtn">Articles</button>
                        <div class="dropdownContent">
                            <Link to="/articles/green-planet"><p>Green Planet</p></Link>
                            <Link to="/articles/cities"><p>Sustainable Cities</p></Link>
                            <Link to="/articles/energy"><p>Energy and Economics</p></Link>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Poems</button>
                        <div class="dropdownContent">
                            <Link to="/poems/poem1"><p>Poem1</p></Link>
                            <Link to="/poems/poem2"><p>Poem2</p></Link>
                            <Link to="/poems/poem3"><p>Poem3</p></Link>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Lectures</button>
                        <div class="dropdownContent">
                            <Link to="/lectures/lecture1"><p>Lecture1</p></Link>
                            <Link to="/lectures/lecture2"><p>Lecture2</p></Link>
                        </div>
                    </div>
                    <div class="dropdown">
                        <Link to="/books"><button class="dropbtn nonListLink">Books</button></Link>
                        {/* <div class="dropdownContent">
                            <Link to="/books/Earthrise"><p>Earthrise</p></Link>
                            <Link to="/books/book2"><p>Book2</p></Link>
                            <Link to="/books/book3"><p>Book3</p></Link>
                        </div> */}
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Documentaries</button>
                        <div class="dropdownContent">
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