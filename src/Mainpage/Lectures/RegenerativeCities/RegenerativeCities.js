import React from 'react';
import './RegenerativeCities.scss';

class RegenerativeCities extends React.Component {
	render() {
        return (
            <div className="regenerativeCities">
                <div className="regenerativeBanner"></div>
                <h3>Creating Regenerative Cities</h3>
                <iframe width="608" height="324" src="https://www.youtube.com/embed/lq_6batv2yE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="regenerativeContent">
                    <p className="regenerativeDescription">Herbert Girardet, Co-Founder of the World Future Council, talks at the Academy Congress about the relationship between cities and the world's ecosystem.
                </p>
                </div>
            </div>
        )
	}
};

export default RegenerativeCities