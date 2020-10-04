import React from 'react';
import './JunglePharmacy.scss';

class JunglePharmacy extends React.Component {
	render() {
        return (
            <div className="junglePharmacy">
                <div className="jungleBanner"></div>
                <h3>Jungle Pharmacy</h3>
                <div className="jungleContent">
                    <iframe width="608" height="324" src="https://www.youtube.com/embed/fRJpZeBvAqM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p className="jungleDescription">Over a quarter of western medicines contain plant toxins – half deriving from tropical forest species. 
                        Forest plants have been the source of the most effective drugs in the history of pharmacology – from the common aspirin to a leukaemia drug derived from the rosy periwinkle. 
                        But so far only two per cent have been screened for their pharmaceutical potential. 
                        Jungle Pharmacy looks at research into the commercial possibilites of plant remedies, and explores the traditional knowledge of the shamen – the tribal healers in Peru and Brazil who use plant remedies to cure a variety of illnesses. 
                        US anthropologist Darrell Posey believes the Kayapo Indians have developed a perfect model for sustainable development, managing the forest in a way that actually increases its biological diversity.
                    </p>
                </div>
            </div>
        )
	}
};

export default JunglePharmacy