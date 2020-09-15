import React from 'react';
import './Poems.scss';

class Poems extends React.Component {
    state = {
        poemDisplay : false
    }

    togglePoem = () => {
        this.setState({
            poemDisplay: !this.state.poemDisplay
        })
    }

	render() {
        const poemVis = this.state.poemDisplay ? 'show' : 'hide';
        return (
            <div>
                <h1>Poems</h1>
                <div>
                    <div>
                        <a className="poemTitle" onClick={this.togglePoem}><h2>To Viruses and Bacteria</h2></a>
                        <p className={`poem1 ${poemVis}`}>
                            If you will live within me,
                            Live in peace with me, not anger.
                            <br></br>
                            If you must, be part of me
                            Like I reside within
                            This throbbing world.
                            <br></br>
                            So, be a kind companion,
                            Not a raging, angry conqueror
                            In a defenceless valley,
                            Where peace wants to reside
                            Upon an endless day.
                            <br></br>
                            <br></br>
                            If you must live within me,
                            Let us be friends, not
                            Mortal enemies.
                            <br></br>
                            Let’s live in fond embrace,
                            You, tiny unknown multitudes
                            And me, my pulsing body.
                            <br></br>
                            Remember: suffocating me
                            Will surely be your end as well.
                            <br></br>
                            So, let us jointly
                            Spend our lives in harmony
                            Within an ocean of eternity.
                            <br></br>
                            <br></br>
                            Disease
                        </p>
                    </div>
                    <a className="poemTitle" onClick={this.togglePoem}><h2>Winter Peace</h2></a>
                    <p className={`poem2 ${poemVis}`}>
                        This afternoon the earth stands still
                        the wind has settled in its secret nest
                        no sign of restless stirring
                        as silver mist embraces shadow trees
                        no questions seeking answers now
                        This afternoon I have embraced
                        the present glory of this winter world
                        no bird song and no barking dogs
                        as deer rest silent in the forest field
                        my heart a fluffy ball of cotton wool
                        This afternoon the world is whole
                        no hint of music in this house
                        or careless thoughts arising in my head
                        no whispering expectations
                        not of death nor of eternity
                        This afternoon the rude insistent clocks
                        are hiding peacefully away
                        no nagging radio news
                        no future clamouring
                        to start another irksome day
                    </p>
                    <h2><a>War Child</a></h2>
                    <h2><a>I have seen the land of Europe</a></h2>
                    <h2><a>Inferno</a></h2>
                    <h2><a>New born</a></h2>
                    <h2><a>Mr. President</a></h2>
                    <h2><a>Death in the family</a></h2>
                    <h2><a>Love miles</a></h2>
                    <h2><a>April dawn</a></h2>
                    <h2><a>On Ladbroke Grove again</a></h2>
                    <h2><a>The face of Europe</a></h2>
                </div>
            </div>
        )
	}
};

export default Poems