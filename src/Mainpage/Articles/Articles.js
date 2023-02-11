import React from 'react';
import './Articles.scss';

class Articles extends React.Component {
	render() {
        return (
            <div className="articlesBackgroundImage">
                <p className="articlesDescription">
                    Over the last forty-five years I have written many 
                    articles on aspects of sustainable (or
                    regenerative) development. A selection of these is presented on my website.
                </p>
            </div>
        )
	}
};

export default Articles