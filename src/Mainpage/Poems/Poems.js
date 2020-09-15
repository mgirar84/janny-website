import React from 'react';
import './Poems.scss';

class Poems extends React.Component {

    

    togglePoem1() {
        var x = document.getElementsByClassName('poem1')[0]
        x.classList.toggle('show')
    }
    togglePoem2() {
        var x = document.getElementsByClassName('poem2')[0]
        x.classList.toggle('show')
    }
    togglePoem3() {
        var x = document.getElementsByClassName('poem2')[0]
        x.classList.toggle('show')
    }
    togglePoem4() {
        var x = document.getElementsByClassName('poem2')[0]
        x.classList.toggle('show')
    }
    togglePoem5() {
        var x = document.getElementsByClassName('poem2')[0]
        x.classList.toggle('show')
    }
    togglePoem6() {
        var x = document.getElementsByClassName('poem2')[0]
        x.classList.toggle('show')
    }
    togglePoem7() {
        var x = document.getElementsByClassName('poem2')[0]
        x.classList.toggle('show')
    }
    togglePoem8() {
        var x = document.getElementsByClassName('poem2')[0]
        x.classList.toggle('show')
    }
    togglePoem9() {
        var x = document.getElementsByClassName('poem2')[0]
        x.classList.toggle('show')
    }
    togglePoem10() {
        var x = document.getElementsByClassName('poem2')[0]
        x.classList.toggle('show')
    }
    togglePoem11() {
        var x = document.getElementsByClassName('poem2')[0]
        x.classList.toggle('show')
    }
    togglePoem12() {
        var x = document.getElementsByClassName('poem2')[0]
        x.classList.toggle('show')
    }

	render() {
        return (
            <div>
                <h1>Poems</h1>
                <div>
                    <div>
                        <a className="poemTitle" onClick={this.togglePoem1}><h2>To Viruses and Bacteria</h2></a>
                        <p className="poem1">
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
                    <div>
                        <a className="poemTitle" onClick={this.togglePoem2}><h2>Winter Peace</h2></a>
                        <p className="poem2">
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
                    </div>
                    <div>
                        <a className="poemTitle" onClick={this.togglePoem3}><h2>War Child</h2></a>
                        <p className="poem3">
                        </p>
                    </div>
                    <div>
                        <a className="poemTitle" onClick={this.togglePoem4}><h2>I have seen the land of Europe</h2></a>
                        <p className="poem4">
                        </p>
                    </div>
                    <div>
                        <a className="poemTitle" onClick={this.togglePoem5}><h2>Inferno</h2></a>
                        <p className="poem5">
                        </p>
                    </div>
                    <div>
                        <a className="poemTitle" onClick={this.togglePoem6}><h2>New born</h2></a>
                        <p className="poem6">
                        </p>
                    </div>
                    <div>
                        <a className="poemTitle" onClick={this.togglePoem7}><h2>Mr. President</h2></a>
                        <p className="poem7">
                        </p>
                    </div>
                    <div>
                        <a className="poemTitle" onClick={this.togglePoem8}><h2>Death in the family</h2></a>
                        <p className="poem8">
                        </p>
                    </div>
                    <div>
                        <a className="poemTitle" onClick={this.togglePoem9}><h2>Love miles</h2></a>
                        <p className="poem9">
                        </p>
                    </div>
                    <div>
                        <a className="poemTitle" onClick={this.togglePoem10}><h2>April dawn</h2></a>
                        <p className="poem10">
                        </p>
                    </div>
                    <div>
                        <a className="poemTitle" onClick={this.togglePoem11}><h2>On Ladbroke Grove again</h2></a>
                        <p className="poem11">
                        </p>
                    </div>
                    <div>
                        <a className="poemTitle" onClick={this.togglePoem12}><h2>The face of Europe</h2></a>
                        <p className="poem12">
                        </p>
                    </div>
                </div>
            </div>
        )
	}
};

export default Poems