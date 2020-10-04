import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom'

class Header extends React.Component {
	render() {
        return (
            <div className="header">
                <Link to="/">
                    <div className="headerContainer">
                        <h1>Herbert Girardet</h1>
                    </div>
                </Link>
                {/* <div class="socialMediaButtons">
                    <br></br>
                    <br></br>
					<a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
					<a href="#"><i class="fas fa-envelope-square" target="_blank"></i></a>
				</div> */}
            </div>
        )
	}
};

export default Header