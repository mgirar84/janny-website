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
        var x = document.getElementsByClassName('poem3')[0]
        x.classList.toggle('show')
    }
    togglePoem4() {
        var x = document.getElementsByClassName('poem4')[0]
        x.classList.toggle('show')
    }
    togglePoem5() {
        var x = document.getElementsByClassName('poem5')[0]
        x.classList.toggle('show')
    }
    togglePoem6() {
        var x = document.getElementsByClassName('poem6')[0]
        x.classList.toggle('show')
    }
    togglePoem7() {
        var x = document.getElementsByClassName('poem7')[0]
        x.classList.toggle('show')
    }
    togglePoem8() {
        var x = document.getElementsByClassName('poem8')[0]
        x.classList.toggle('show')
    }
    togglePoem9() {
        var x = document.getElementsByClassName('poem9')[0]
        x.classList.toggle('show')
    }
    togglePoem10() {
        var x = document.getElementsByClassName('poem10')[0]
        x.classList.toggle('show')
    }
    togglePoem11() {
        var x = document.getElementsByClassName('poem11')[0]
        x.classList.toggle('show')
    }
    togglePoem12() {
        var x = document.getElementsByClassName('poem12')[0]
        x.classList.toggle('show')
    }
    togglePoem13() {
        var x = document.getElementsByClassName('poem13')[0]
        x.classList.toggle('show')
    }

	render() {
        return (
            <div className="poems">
                <div className="poemsBanner"></div>
                <h3>Poems</h3>
                <div>
                <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem13}>I.C.U</h4>
                        <p className="poem13">
                        Don’t breathe in<br></br>
                        My love,<br></br>
                        Don’t breathe out,<br></br>
                        There is a virus about.
                        <br></br>
                        <br></br>
                        My lungs are too weak<br></br>
                        To fill the flute I used to play,<br></br>
                        I’ve put it away.<br></br>
                        Remember our songs of yesterday.
                        <br></br>
                        <br></br>
                        I make the radio play<br></br>
                        The tunes that we used to sing,<br></br>
                        Dancing the Samba with you,<br></br>
                        Dancing the Swing.
                        <br></br>
                        <br></br>
                        Hear what I whisper, my dear,<br></br>
                        But you won’t like what you hear.<br></br>
                        My mind marooned in my head,<br></br>
                        Am I alive or am I dead?
                        <br></br>
                        <br></br>
                        Please don’t breathe in,<br></br>
                        My love,<br></br>
                        Don’t breathe out,<br></br>
                        There is a virus about.
                        <br></br>
                        <br></br>
                        Can you hear my rasping voice,<br></br>
                        Can you understand?<br></br>
                        Please, come over once more,<br></br>
                        Come, hold my hand?
                        <br></br>
                        <br></br>
                        But don’t breathe in,<br></br>
                        My love,<br></br>
                        Don’t breathe out,<br></br>
                        There is a virus about.
                        <br></br>
                        <br></br>
                        Yes, my lungs are too weak now<br></br>
                        To fill the flute I used to play<br></br>
                        I’ve put it away,<br></br>
                        I’m dreaming songs of yesterday.
                        <br></br>
                        <br></br>
                        Are you listening<br></br>
                        My dear,<br></br>
                        Can you hear my breathless voice<br></br>
                        Are you still here?
                        </p>
                    </div>
                    <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem1}>To Viruses and Bacteria</h4>
                        <p className="poem1">
                            If you will live within me,
                            <br></br>
                            Live in peace with me, not anger.
                            <br></br>
                            If you must, be part of me
                            <br></br>
                            Like I reside within
                            <br></br>
                            This throbbing world.
                            <br></br>
                            So, be a kind companion,
                            <br></br>
                            Not a raging, angry conqueror
                            <br></br>
                            In a defenceless valley,
                            <br></br>
                            Where peace wants to reside
                            <br></br>
                            Upon an endless day.
                            <br></br>
                            <br></br>
                            If you must live within me,
                            <br></br>
                            Let us be friends, not
                            <br></br>
                            Mortal enemies.
                            <br></br>
                            Let’s live in fond embrace,
                            <br></br>
                            You, tiny unknown multitudes
                            <br></br>
                            And me, my pulsing body.
                            <br></br>
                            Remember: suffocating me
                            <br></br>
                            Will surely be your end as well.
                            <br></br>
                            <br></br>
                            So, let us jointly
                            <br></br>
                            Spend our lives in harmony
                            <br></br>
                            Within an ocean of eternity.
                            <br></br>
                            <br></br>
                            Disease
                        </p>
                    </div>
                    <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem2}>Winter Peace</h4>
                        <p className="poem2">
                            This afternoon the earth stands still
                            <br></br>
                            the wind has settled in its secret nest<br></br>
                            no sign of restless stirring<br></br>
                            as silver mist embraces shadow trees<br></br>
                            no questions seeking answers now<br></br><br></br>
                            This afternoon I have embraced<br></br>
                            the present glory of this winter world<br></br>
                            no bird song and no barking dogs<br></br>
                            as deer rest silent in the forest field<br></br>
                            my heart a fluffy ball of cotton wool<br></br><br></br>
                            This afternoon the world is whole<br></br>
                            no hint of music in this house<br></br>
                            or careless thoughts arising in my head<br></br>
                            no whispering expectations<br></br>
                            not of death nor of eternity<br></br><br></br>
                            This afternoon the rude insistent clocks<br></br>
                            are hiding peacefully away<br></br>
                            no nagging radio news<br></br>
                            no future clamouring<br></br>
                            to start another irksome day<br></br>
                        </p>
                    </div>
                    <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem3}>War Child</h4>
                        <p className="poem3">
                        And then it was my turn<br></br>
                        to be born,<br></br>
                        a birth in a quiet house<br></br>
                        on a forest island,<br></br>
                        but right next to a growling volcano<br></br>
                        bursting with burning blood.<br></br>
                        I was cradled within sight<br></br>
                        but just out of reach of<br></br>
                        a world at war,
                        <br></br>
                        <br></br>
                        Where soldiers<br></br>
                        were told to kill or be killed.<br></br>
                        Where suffering<br></br>
                        and inflicting suffering<br></br>
                        was by order of daily command,<br></br>
                        where acquiring a savage mind<br></br>
                        was obligatory to all.
                        <br></br>
                        <br></br>
                        Birth is departure as well as arrival,<br></br>
                        a welcoming like no other.<br></br>
                        There I am,<br></br>
                        I cry and they laugh with joy,<br></br>
                        ecstatic and full of expectant love<br></br>
                        and yet with anxious smiles,<br></br>
                        for who wants to bring a child into<br></br>
                        a burning world.
                        <br></br>
                        <br></br>
                        A killer‘s world<br></br>
                        just a short way away,<br></br>
                        within that grim horizon<br></br>
                        that I’m not yet aware of.<br></br>
                        For who can be born and know<br></br>
                        that there is more than sweet milk<br></br>
                        and gentle, loving hugs.
                        <br></br>
                        <br></br>
                        On this island morning<br></br>
                        the dawn chorus welcomes me,<br></br>
                        welcomes the budding trees,<br></br>
                        greets the vibrant worms<br></br>
                        in warming soil.<br></br>
                        Life always returning<br></br>
                        To a rising summer sun.
                        <br></br>
                        <br></br>
                        Wars are impossible to imagine<br></br>
                        except by a killer’s mind.<br></br>
                        But love is easy,<br></br>
                        or so it seems at first,<br></br>
                        when you are a baby in arms.<br></br>
                        I mean arms that embrace<br></br>
                        not arms that destroy.
                        <br></br>
                        <br></br>
                        Nobody wants to leave<br></br>
                        the island of love<br></br>
                        where life seems so easy,<br></br>
                        where cries are stilled<br></br>
                        by milk and cradled sleep,<br></br>
                        and gentleness reigns<br></br>
                        just for a little while.
                        </p>
                    </div>
                    {/* <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem4}>I have seen the land of Europe</h4>
                        <p className="poem4">
                        I have seen the land of Europe<br></br>
                        Bathed in golden sunlight<br></br>
                        Cloaked with crystal rainclouds<br></br>
                        Glistening snow on summer summits<br></br>
                        Streams cascading through mountain forests<br></br>
                        Rivers meandering down<br></br>
                        From high valleys to the plains<br></br>
                        From placid lakes to the expectant sea
                        <br></br>
                        <br></br>
                        I have seen the land of Europe<br></br>
                        Orchards and vineyards laden with fruit<br></br>
                        Green meadows bearing sheep and cows<br></br>
                        Fields of wheat waving yellow in the breeze<br></br>
                        And ancient villages in patient landscapes<br></br>
                        Country lanes and hedgerows engraved<br></br>
                        On maps of parchment memory
                        <br></br>
                        <br></br>
                        But I have also seen the land of Europe<br></br>
                        Being readied for a faster future<br></br>
                        A village world being wiped away<br></br>
                        By bulldozers gouging out copses<br></br>
                        Levelling secret hollows<br></br>
                        Tearing through the ancient soil<br></br>
                        And making landscapes ready for<br></br>
                        Supertractors and mega combines<br></br>
                        Driven by men wearing earphones<br></br>
                        Through fields where birdsong has gone
                        <br></br>
                        <br></br>
                        I have seen cities spilling over to grey horizons<br></br>
                        Motorways thrashing through forests<br></br>
                        Connecting tower blocks and holiday resorts<br></br>
                        Coal mines and power stations<br></br>
                        Hungry factories and ports
                        <br></br>
                        <br></br>

                        Crammed with tankers and freighters<br></br>
                        Laden with the spoils of oil wells<br></br>
                        Of copper mines and banana plantations<br></br>
                        On the other side of the world<br></br>
                        Container lorries carting the bounty of the earth<br></br>
                        To London, Paris, Brussels and Berlin<br></br>
                        On eight lane endless motorways
                        <br></br>
                        <br></br>
                        I have seen the people of Europe<br></br>
                        Swarming from cottage farms<br></br>
                        To factories and offices in electric cities<br></br>
                        Drawn by the promise of easy futures<br></br>
                        Or the high priests of the disco<br></br>
                        Or the heroes of the football fields<br></br>
                        TV colour glossing over a concrete world<br></br>
                        Where robots have started their reign
                        <br></br>
                        <br></br>
                        And high up in the mountains<br></br>
                        A wired sky<br></br>
                        And up by the ski lift stations<br></br>
                        Tourist cafes serve up Gluehwein<br></br>
                        And vinyl songs<br></br>
                        As fiddles, flutes and cow bells hang<br></br>
                        As silent dusty decorations
                        <br></br>
                        <br></br>
                        I have seen the land of Europe<br></br>
                        Cars standing in motorway jams<br></br>
                        With engines running<br></br>
                        Children chasing their dogs<br></br>
                        On a littered motorway verge
                        <br></br>
                        <br></br>
                        A land submerged under fumes now<br></br>
                        And up in the mountains<br></br>
                        Glaciers melting<br></br>
                        And trees going dry and bare
                        <br></br>
                        <br></br>
                        And even down in the plains<br></br>
                        Leaves and needles going yellow<br></br>
                        And brown in a premature autumn
                        <br></br>
                        <br></br>
                        And as we see the triumph<br></br>
                        Of the cold machine<br></br>
                        Shall we lose the life within<br></br>
                        Will it be a living earth we share<br></br>
                        Or the silence of a world gone bare
                        </p>
                    </div> */}
                    <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem5}>Inferno</h4>
                        <p className="poem5">
                        Borneo Baghdad Aleppo<br></br>
                        The fires of the anthropocene<br></br>
                        Searing our tired minds<br></br>
                        Acrid smoke all over anxious land
                        <br></br>
                        <br></br>
                        Black smoke over Mosul again<br></br>
                        Painting jagged patterns in the sky<br></br>
                        Again the fires of Auschwitz<br></br>
                        Dresden Hiroshima
                        <br></br>
                        <br></br>
                        And here quiet at home again<br></br>
                        But there the yellow smoke over the Amazon<br></br>
                        Trees as giant torches<br></br>
                        Burning bright as parrots
                        <br></br>
                        <br></br>
                        Sumatra Beirut<br></br>
                        The endless blanket of smoke<br></br>
                        From pole to equator<br></br>
                        Car exhausts and the<br></br>
                        Haze of electric appliances<br></br>
                        That brighten up the sitting room<br></br>
                        Evening and night
                        <br></br>
                        <br></br>
                        The TV has brought it home again<br></br>
                        Mosul Kirkuk<br></br>
                        Not enough water in the Euphrates<br></br>
                        To put out a century of flames
                        <br></br>
                        <br></br>
                        The radio proclaims the morning news<br></br>
                        And after kissing the daily goodbye<br></br>
                        The car engine revs up<br></br>
                        More smoke over London and Shanghai
                        <br></br>
                        <br></br>
                        Remember the holocaust<br></br>
                        Now the earth has the face of a woman<br></br>
                        Who can no longer bury<br></br>
                        So much pain<br></br>
                        In her wrinkled hands
                        <br></br>
                        <br></br>
                        Only your embrace sometimes<br></br>
                        Brings peace again<br></br>
                        Sometimes smothers the flames<br></br>
                        Of another infernal night
                        </p>
                    </div>
                    <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem6}>New born</h4>
                        <p className="poem6">
                        Hello hello here you are<br></br>
                        It is you, barely born<br></br>
                        And already eyes wide open<br></br>
                        A world full of wonder around you
                        <br></br>
                        <br></br>
                        From over here we see a precious child<br></br>
                        Held in your parent’s embrace<br></br>
                        So near yet half way across the world<br></br>
                        A world full of wonder inside you
                        <br></br>
                        <br></br>
                        And the throbbing pulse of love starts<br></br>
                        To beat in our hearts<br></br>
                        Love for you unstoppable, irrepressible<br></br>
                        A world full of wonder embracing us
                        <br></br>
                        <br></br>
                        And every day you are growing<br></br>
                        Inside us as we see your face, hear your voice<br></br>
                        Echoing through space and time<br></br>
                        A world full of wonder within us
                        </p>
                    </div>
                    <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem7}>Mr. President</h4>
                        <p className="poem7">
                        Mr. President, still eloquent<br></br>
                        on his familiar podium.<br></br>
                        But he looks tired<br></br>
                        as he speaks, one final time,<br></br>
                        about the quest for happiness,<br></br>
                        equality and liberty,<br></br>
                        but does anyone really want to know?
                        <br></br>
                        <br></br>
                        Few people are still clapping<br></br>
                        when he ends,<br></br>
                        and most photographers don’t waste<br></br>
                        the flashes in their cameras.<br></br>
                        And only one or two reporters<br></br>
                        utter final words of praise.
                        <br></br>
                        <br></br>
                        Now is the hour to step down<br></br>
                        for Mr. President,<br></br>
                        down to where<br></br>
                        his few successes lie trampled<br></br>
                        into the dust of stark reality,<br></br>
                        among some long forgotten<br></br>
                        election promises.
                        <br></br>
                        <br></br>
                        The newly grey-haired man<br></br>
                        steps off the stage,<br></br>
                        and walks away for ever.<br></br>
                        He looks haunted.<br></br>
                        He must be so exhausted,<br></br>
                        after all this time,<br></br>
                        he should lie on a sunny beach a while<br></br>
                        and get a tan, and get some rest.
                        <br></br>
                        <br></br>

                        Then the new man steps into the hall.<br></br>
                        He smiles and waves theatrically,<br></br>
                        walks through the screaming crowd.<br></br>
                        He shakes some eager hands<br></br>
                        and has some selfies taken, too.
                        <br></br>
                        <br></br>
                        He climbs the pedestal<br></br>
                        and shows himself in classical demeanour.<br></br>
                        ‘Now I’m your man,<br></br>
                        I am your power president’!
                        <br></br>
                        <br></br>
                        And then the flashlights burst,<br></br>
                        reporters smell of sweat<br></br>
                        and scream into their microphones,<br></br>
                        their voices heard across the world.
                        <br></br>
                        <br></br>
                        Yes, he looks presidential,<br></br>
                        with his read tie and smart blue suit,<br></br>
                        sun tanned and weatherproof,<br></br>
                        in front of all those fluttering flags.
                        <br></br>
                        <br></br>
                        From up high he fixates the crowd.<br></br>
                        He only makes a short speech today:<br></br>
                        ‘I’ll do my best for you,<br></br>
                        it’s you the people who will rule<br></br>
                        to make our country great again.<br></br>
                        Or is it me who rules?’
                        <br></br>
                        <br></br>
                        The cameras are purring,<br></br>
                        admirers standing tiptoe,<br></br>
                        waving placards:<br></br>
                        ‘You’re our leader now,<br></br>
                        let’s show the world!’
                        <br></br>
                        <br></br>
                        Around him<br></br>
                        his lieutenants give commands<br></br>
                        to the armed police,<br></br>
                        and he tells the eager troops:<br></br>
                        ‘Yes, sure, I’m your man!’
                        <br></br>
                        <br></br>
                        Then someone shouts:<br></br>
                        ‘You are a lying monster,<br></br>
                        an egomaniac,<br></br>
                        a dangerous demagogue.’<br></br>
                        But he won’t be arrested yet.<br></br>
                        Not today, not yet.<br></br>
                        That can wait until tomorrow.
                        <br></br>
                        <br></br>
                        He leaves the venue now.<br></br>
                        This evening Mr. President<br></br>
                        is celebrating in an intimate circle,<br></br>
                        of party friends and wealthy pals,<br></br>
                        with caviar and rare champagne.<br></br>
                        And who knows what else is served,<br></br>
                        and what is said,<br></br>
                        behind those shuttered doors.
                        <br></br>
                        <br></br>
                        Then, late at night, in his presidential suite<br></br>
                        he looks into his golden mirror,<br></br>
                        admiring what he sees,<br></br>
                        and practices how to speak in such a way,<br></br>
                        that he doesn’t sound like he’s regurgitating<br></br>
                        the favourite words of evil men.<br></br>
                        But, no, he’s not afraid of ghosts.
                        </p>
                    </div>
                    <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem8}>Death in the family</h4>
                        <p className="poem8">
                        At noon today he fell,<br></br>
                        the bullet had ripped his lion’s heart.<br></br>
                        He stumbled into the thicket<br></br>
                        that had been his family home,<br></br>
                        and as he lay his soul flew away.
                        <br></br>
                        <br></br>
                        He was my brother and yet<br></br>
                        I’d never met him,<br></br>
                        had only seen glimpses of him once<br></br>
                        On my new living room TV.
                        <br></br>
                        <br></br>
                        Or was it his brother I had seen,<br></br>
                        now also turned into a signature trophy,<br></br>
                        mane-shrouded skull staring up<br></br>
                        from a lion-sized fireside rug.
                        <br></br>
                        <br></br>
                        In a billionaire’s palace,<br></br>
                        next to exquisite ivory carvings,<br></br>
                        and the head of a grizzly bear.<br></br>
                        And glass jars full of monkey brains<br></br>
                        behind closed iroko doors and<br></br>
                        amaranth window frames.
                        <br></br>
                        <br></br>
                        There are now many deaths in my family,<br></br>
                        thousands every second<br></br>
                        in rainforests and deserts<br></br>
                        and in the oceans.<br></br>
                        But so far away from<br></br>
                        this here home of mine.
                        <br></br>
                        <br></br>
                        But who keeps telling me<br></br>
                        that we aren’t one family.<br></br>
                        Now we are learning the language<br></br>
                        of dolphins and whales talking to their young,<br></br>
                        of the humming life in the soil,<br></br>
                        of birdsong filling the air with exuberance.
                        <br></br>
                        <br></br>
                        Oh no we aren’t here alone,<br></br>
                        and yet we will be alone<br></br>
                        as we fatally rampage through life’s world.<br></br>
                        And we will win this war as we die.
                        </p>
                    </div>
                    <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem9}>Love miles</h4>
                        <p className="poem9">
                        My kids were born in Kensington,<br></br>
                        their cousins in Berlin.<br></br>
                        One auntie lives in Adelaide,<br></br>
                        another in Turin.
                        <br></br>
                        <br></br>
                        One friend comes from Jerusalem,<br></br>
                        another from New York.<br></br>
                        Their wedding was in Amsterdam,<br></br>
                        for that is where they work.
                        <br></br>
                        <br></br>
                        My best friend comes from Liverpool,<br></br>
                        his wife from Agadir.<br></br>
                        Her mother lives in Delhi now,<br></br>
                        they see her twice a year.
                        <br></br>
                        <br></br>
                        We are a global family,<br></br>
                        with homes in every land.<br></br>
                        We speak by Skype and mobile phone,<br></br>
                        are good at making friends.
                        <br></br>
                        <br></br>
                        We’ve learnt to tell each other’s jokes,<br></br>
                        share food we all prepare.<br></br>
                        We celebrate the joys of life,<br></br>
                        with people everywhere.
                        <br></br>
                        <br></br>
                        We’re learning to make love, not war,<br></br>
                        try to forget the past.<br></br>
                        But as we worship sun and sand,<br></br>
                        let’s ask: can all this last?
                        <br></br>
                        <br></br>
                        We always sit in aeroplanes,<br></br>
                        we visit everyone.<br></br>
                        But are we making climate change,<br></br>
                        with all our global fun?
                        <br></br>
                        <br></br>

                        What will we say when seas submerge<br></br>
                        the houses where we stay?<br></br>
                        Will we still travel everywhere<br></br>
                        when life has washed away?
                        <br></br>
                        <br></br>
                        Yes, let’s be friends with everyone,<br></br>
                        but keep the earth in mind.<br></br>
                        For, folks, that is what we owe to them,<br></br>
                        to those we leave behind.
                        </p>
                    </div>
                    <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem10}>April dawn</h4>
                        <p className="poem10">
                        As night lets go its dreamy grip<br></br>
                        The morning birds are calling<br></br>
                        Waking me<br></br>
                        Exuberantly<br></br>
                        They’re celebrating dawn<br></br>
                        Invisible in trees and bushes<br></br>
                        Voicing their abundant songs<br></br>
                        That they have known forever<br></br>
                        But that are new again today<br></br>
                        The many languages of joy<br></br>
                        Merged into one<br></br>
                        Ecstatic harmony
                        <br></br>
                        <br></br>
                        And I can only stand<br></br>
                        In awe<br></br>
                        Immersed within<br></br>
                        This wonderworld<br></br>
                        That’s theirs and only theirs<br></br>
                        A silent visitor who’s<br></br>
                        Being told that spring<br></br>
                        Is home once more<br></br>
                        That sun is offering warmth again<br></br>
                        A scene of tender blossoms<br></br>
                        And of glorious melodies
                        <br></br>
                        <br></br>
                        And bursting forth<br></br>
                        From winter wood<br></br>
                        A world of sprouting leaves<br></br>
                        In which I am just<br></br>
                        This silent visitor<br></br>
                        In awe<br></br>
                        Of sacred fleeting beauty<br></br>
                        Beyond imagining<br></br>
                        Tunes intertwined<br></br>
                        A union of expectancy<br></br>
                        And no conductor<br></br>
                        Needed in this concert hall today
                        <br></br>
                        <br></br>
                        And then the sun arises<br></br>
                        From the mist of our forest vale<br></br>
                        Displays its<br></br>
                        Gleaming face once more<br></br>
                        A flaming torch of life<br></br>
                        That banishes the failing night
                        <br></br>
                        <br></br>
                        And then in our morning garden<br></br>
                        The birds are busy flitting to and from<br></br>
                        With wings too fast to see<br></br>
                        And visit secret nests<br></br>
                        In trees and shrubs<br></br>
                        Delivering bugs and worms<br></br>
                        In their now silent beaks<br></br>
                        Not busy now with songs<br></br>
                        But feeding<br></br>
                        Their impatient hungry young
                        <br></br>
                        <br></br>
                        And I vacate this wonderworld<br></br>
                        Unlatch the cottage door<br></br>
                        And go inside<br></br>
                        To have my breakfast too<br></br>
                        An egg or maybe two<br></br>
                        And then I go upstairs and hide<br></br>
                        Behind the plastic screen<br></br>
                        Of this my clever<br></br>
                        Silent word machine
                        </p>
                    </div>
                    <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem11}>On Ladbroke Grove again</h4>
                        <p className="poem11">
                        Hallo here I am<br></br>
                        on Ladbroke Grove again,<br></br>
                        this old familiar place,<br></br>
                        my stomping ground<br></br>
                        where I was young and foolish.
                        <br></br>
                        <br></br>
                        Where we once imagined<br></br>
                        in our fragile minds<br></br>
                        a world of peace and love,<br></br>
                        a world that could be born anew.
                        <br></br>
                        <br></br>
                        Walking streets of long ago,<br></br>
                        where calypso music<br></br>
                        used to fill expectant ears,<br></br>
                        where we were dancing in the street<br></br>
                        to the bell-like steel drum beat.
                        <br></br>
                        <br></br>
                        And where we made<br></br>
                        policemen laugh sometimes,<br></br>
                        despite their fearsome truncheons<br></br>
                        clasped in hardened hands.
                        <br></br>
                        <br></br>
                        Where scruffy bedsits used to house<br></br>
                        the likes of you and me,<br></br>
                        new, shiny SUVs<br></br>
                        are parked these days,<br></br>
                        outside refurbished mansions.<br></br>
                        And graffiti memories<br></br>
                        have now succumbed to<br></br>
                        advertising boards and<br></br>
                        non-stick marble paint.
                        <br></br>
                        <br></br>
                        But on these well-worn streets<br></br>
                        youthful desires are still rising up<br></br>
                        like fragrant rainbow flowers,<br></br>
                        stirred by my grazing glances<br></br>
                        at these smiling girls<br></br>
                        in the shortest miniskirts,<br></br>
                        or with the longest afro curls.
                        <br></br>
                        <br></br>
                        ‘Hello lovely lady<br></br>
                        do you remember me?<br></br>
                        Or did I kiss your mother<br></br>
                        all those years ago?’
                        <br></br>
                        <br></br>
                        Rock bands still practising<br></br>
                        elusive fame in cellar rooms<br></br>
                        with drum machines and<br></br>
                        super amplified guitars,<br></br>
                        recording songs of unrequited love or<br></br>
                        anger at an inattentive world<br></br>
                        through ever hollow microphones.
                        <br></br>
                        <br></br>
                        Outside the old familiar pub<br></br>
                        I linger pint in hand<br></br>
                        and stare at people walking by.
                        <br></br>
                        <br></br>
                        And then this dude comes up to me<br></br>
                        with dangling arms<br></br>
                        and says: ‘Hey man,<br></br>
                        you haven’t seen black cats like me before?<br></br>
                        you have?<br></br>
                        Then stare at someone else, OK?’
                        <br></br>
                        <br></br>
                        ‘Right on, man. But I reckon<br></br>
                        that I used to know you<br></br>
                        when you were a little boy.
                        <br></br>
                        <br></br>
                        I used to visit and score grass<br></br>
                        off your old man once in a while.<br></br>
                        He always sold the coolest smoke.’
                        <br></br>
                        <br></br>
                        ‘O yeah, I’ve heard that one before.’<br></br>
                        And he puts on his designer shades and<br></br>
                        and wanders off into the crowd.
                        <br></br>
                        <br></br>
                        This is the place<br></br>
                        where I was young and foolish,<br></br>
                        where I used to know the names<br></br>
                        of all the local streets,<br></br>
                        but most are not familiar now.
                        <br></br>
                        <br></br>
                        They’ve been converted<br></br>
                        into multicoloured maps<br></br>
                        on someone’s mobile phone<br></br>
                        where electric currents flow<br></br>
                        on tiny circuit boards.
                        <br></br>
                        <br></br>
                        But still, as always taxis, and red buses<br></br>
                        huddling at the traffic lights<br></br>
                        on good old Ladbroke Grove.
                        <br></br>
                        <br></br>
                        And all these cars and scooters,<br></br>
                        and sweaty cyclists delivering pizzas,<br></br>
                        struggling through<br></br>
                        the Portobello tourist crowds.
                        <br></br>
                        <br></br>
                        But down the road,<br></br>
                        outside these mansion houses,<br></br>
                        immaculate lawns sport garish roses now<br></br>
                        in the fuming summer air.
                        <br></br>
                        <br></br>
                        And there on Westbourne Grove<br></br>
                        the junkshops have been turned<br></br>
                        into exclusive fashion shops,<br></br>
                        where make-up faces stand and stare<br></br>
                        at super fabulous displays,<br></br>
                        spending money they don’t have<br></br>
                        out of their overdrawn accounts:
                        <br></br>
                        <br></br>
                        Hoping to look rich and be famous<br></br>
                        like the famous,<br></br>
                        to become an A-list movie star,<br></br>
                        and maybe own a mansion house,<br></br>
                        and even have some love and happiness.<br></br>
                        But there you go.
                        <br></br>
                        <br></br>
                        Come back with me to Ladbroke Grove,<br></br>
                        and teach these streets<br></br>
                        to dream again,<br></br>
                        and dance and laugh once more,<br></br>
                        not only once a year<br></br>
                        in London’s summer carnival.
                        <br></br>
                        <br></br>
                        But there I go<br></br>
                        below an electric, psychedelic sky.<br></br>
                        Good day to you, good bye,<br></br>
                        good night, hello.
                        </p>
                    </div>
                    <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem12}>The face of Europe</h4>
                        <p className="poem12">
                        I have seen the face of Europe,<br></br>
                        smiling with summer delight,<br></br>
                        flower meadows bearing cows and sheep<br></br>
                        and orchards and vineyards laden with fruit.<br></br>
                        Wheat fields waving yellow in the breeze,<br></br>
                        and ancient villages resting in patient landscapes,<br></br>
                        hedgerows and country lanes engraved<br></br>
                        on maps of parchment memory.
                        <br></br>
                        <br></br>
                        I have seen the face of Europe,<br></br>
                        caressed by golden sunshine,<br></br>
                        glittering snow on rocky summits,<br></br>
                        rainstorms emptying heavy crystal clouds,<br></br>
                        and streams cascading through mountain forests,<br></br>
                        with rivers meandering down<br></br>
                        from high valleys to the plains,<br></br>
                        from placid lakes to the expectant sea.
                        <br></br>
                        <br></br>
                        But I have also seen the land of Europe<br></br>
                        covered in darker clouds,<br></br>
                        ruled by a fierce new regime<br></br>
                        and being readied for a faster future.<br></br>
                        Restless rivers caged by concrete banks,<br></br>
                        a village world that’s being swiped away<br></br>
                        by bulldozers gouging out copses,<br></br>
                        levelling secret hollows,<br></br>
                        ripping through forgotten garden soil,<br></br>
                        ancient landscapes levelled ready for<br></br>
                        super tractors and their spray booms,<br></br>
                        and brightly painted harvesting machines<br></br>
                        driven by men wearing earphones,<br></br>
                        thrashing cornfields where birdsong has gone.
                        <br></br>
                        <br></br>
                        I have seen cities spilling over to grey horizons,<br></br>
                        motorways tearing through forests,<br></br>
                        bridges stalking leftover secret valleys,<br></br>
                        connecting tower blocks and holiday resorts,<br></br>
                        lignite mines and power station turbines,<br></br>
                        hungry factories and burgeoning ports,<br></br>
                        crammed with tankers and freighters,<br></br>
                        laden with the spoils of oil wells,<br></br>
                        of copper mines and banana plantations<br></br>
                        on the other side of the world,<br></br>
                        container lorries on eight-lane motorways,<br></br>
                        carting the bounty of the earth<br></br>
                        to London, Paris, Brussels and Berlin.
                        <br></br>
                        <br></br>
                        I have seen the people of Europe<br></br>
                        swarming from cottage farms<br></br>
                        to office towers in electric cities,<br></br>
                        drawn by the promise of easy futures,<br></br>
                        by ever ascending colour charts<br></br>
                        on cinema sized computer screens.<br></br>
                        Or by the high priests of downtown discos<br></br>
                        or the quickfire gods of football fields,<br></br>
                        or the promise of easy-going robots<br></br>
                        made ready to start a relentless reign.
                        <br></br>
                        <br></br>
                        And up there high in the mountains,<br></br>
                        as cables dissect the ever-warming air<br></br>
                        glaciers are set for further retreat,<br></br>
                        cannons, not clouds, making the snow now<br></br>
                        ready for city people in vinyl suits.<br></br>
                        And up at the ski lift cafe<br></br>
                        soothing Gluehwein is served<br></br>
                        in rooms pumped full of selfie songs,<br></br>
                        as fiddles, flutes and cowbells hang<br></br>
                        on dusty walls as silent decoration.
                        <br></br>
                        <br></br>
                        I have seen the frowning face of Europe,<br></br>
                        an anger slowly boiling up<br></br>
                        cars standing marooned in traffic jams,<br></br>
                        with engines humming monotonous melodies.<br></br>
                        Children chasing breathless dogs<br></br>
                        on littered motorway verges,<br></br>
                        a land submerged under fumes now<br></br>
                        as jet planes stand on runways waiting to<br></br>
                        whisk us off to hasty holidays<br></br>
                        on happier islands far away.
                        <br></br>
                        <br></br>
                        But I have also seen the faces of young people,<br></br>
                        full of hopeful, restless anger,<br></br>
                        filling city streets with placard protests,<br></br>
                        flocking to the gates of parliaments<br></br>
                        with painted tattoos shouting<br></br>
                        “No more of this,<br></br>
                        let there be future,<br></br>
                        let there be life again,<br></br>
                        a land where breathing is easy,<br></br>
                        Where lungs can fill with real air.<br></br>
                        Where water tastes fresh like childhood laughter.<br></br>
                        Yes let joy and love prevail,<br></br>
                        come with us to make a world<br></br>
                        where life has come back to life<br></br>
                        Again.”
                        </p>
                    </div>
                </div>
            </div>
        )
	}
};

export default Poems