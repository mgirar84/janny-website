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

	render() {
        return (
            <div className="poems">
                <div className="poemsBanner"></div>
                <h3>Poems</h3>
                <div>
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
                    <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem3}>War Child</h4>
                        <p className="poem3">
                        And then it was my turn
                        to be born,
                        a birth in a quiet house
                        on a forest island,
                        but right next to a growling volcano
                        bursting with burning blood.
                        I was cradled within sight
                        but just out of reach of
                        a world at war,
                        <br></br>
                        <br></br>
                        Where soldiers
                        were told to kill or be killed.
                        Where suffering
                        and inflicting suffering
                        was by order of daily command,
                        where acquiring a savage mind
                        was obligatory to all.
                        <br></br>
                        <br></br>
                        Birth is departure as well as arrival,
                        a welcoming like no other.
                        There I am,
                        I cry and they laugh with joy,
                        ecstatic and full of expectant love
                        and yet with anxious smiles,
                        for who wants to bring a child into
                        a burning world.
                        <br></br>
                        <br></br>
                        A killer‘s world
                        just a short way away,
                        within that grim horizon
                        that I’m not yet aware of.
                        For who can be born and know
                        that there is more than sweet milk
                        and gentle, loving hugs.
                        <br></br>
                        <br></br>
                        On this island morning
                        the dawn chorus welcomes me,
                        welcomes the budding trees,
                        greets the vibrant worms
                        in warming soil.
                        Life always returning
                        To a rising summer sun.
                        <br></br>
                        <br></br>
                        Wars are impossible to imagine
                        except by a killer’s mind.
                        But love is easy,
                        or so it seems at first,
                        when you are a baby in arms.
                        I mean arms that embrace
                        not arms that destroy.
                        <br></br>
                        <br></br>
                        Nobody wants to leave
                        the island of love
                        where life seems so easy,
                        where cries are stilled
                        by milk and cradled sleep,
                        and gentleness reigns
                        just for a little while.
                        </p>
                    </div>
                    <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem4}>I have seen the land of Europe</h4>
                        <p className="poem4">
                        I have seen the land of Europe
                        Bathed in golden sunlight
                        Cloaked with crystal rainclouds
                        Glistening snow on summer summits
                        Streams cascading through mountain forests
                        Rivers meandering down
                        From high valleys to the plains
                        From placid lakes to the expectant sea
                        <br></br>
                        <br></br>
                        I have seen the land of Europe
                        Orchards and vineyards laden with fruit
                        Green meadows bearing sheep and cows
                        Fields of wheat waving yellow in the breeze
                        And ancient villages in patient landscapes
                        Country lanes and hedgerows engraved
                        On maps of parchment memory
                        <br></br>
                        <br></br>
                        But I have also seen the land of Europe
                        Being readied for a faster future
                        A village world being wiped away
                        By bulldozers gouging out copses
                        Levelling secret hollows
                        Tearing through the ancient soil
                        And making landscapes ready for
                        Supertractors and mega combines
                        Driven by men wearing earphones
                        Through fields where birdsong has gone
                        <br></br>
                        <br></br>
                        I have seen cities spilling over to grey horizons
                        Motorways thrashing through forests
                        Connecting tower blocks and holiday resorts
                        Coal mines and power stations
                        Hungry factories and ports
                        <br></br>
                        <br></br>

                        Crammed with tankers and freighters
                        Laden with the spoils of oil wells
                        Of copper mines and banana plantations
                        On the other side of the world
                        Container lorries carting the bounty of the earth
                        To London, Paris, Brussels and Berlin
                        On eight lane endless motorways
                        <br></br>
                        <br></br>
                        I have seen the people of Europe
                        Swarming from cottage farms
                        To factories and offices in electric cities
                        Drawn by the promise of easy futures
                        Or the high priests of the disco
                        Or the heroes of the football fields
                        TV colour glossing over a concrete world
                        Where robots have started their reign
                        <br></br>
                        <br></br>
                        And high up in the mountains
                        A wired sky
                        And up by the ski lift stations
                        Tourist cafes serve up Gluehwein
                        And vinyl songs
                        As fiddles, flutes and cow bells hang
                        As silent dusty decorations
                        <br></br>
                        <br></br>
                        I have seen the land of Europe
                        Cars standing in motorway jams
                        With engines running
                        Children chasing their dogs
                        On a littered motorway verge
                        <br></br>
                        <br></br>
                        A land submerged under fumes now
                        And up in the mountains
                        Glaciers melting
                        And trees going dry and bare
                        <br></br>
                        <br></br>
                        And even down in the plains
                        Leaves and needles going yellow
                        And brown in a premature autumn
                        <br></br>
                        <br></br>
                        And as we see the triumph
                        Of the cold machine
                        Shall we lose the life within
                        Will it be a living earth we share
                        Or the silence of a world gone bare
                        </p>
                    </div>
                    <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem5}>Inferno</h4>
                        <p className="poem5">
                        Borneo Baghdad Aleppo
                        The fires of the anthropocene
                        Searing our tired minds
                        Acrid smoke all over anxious land
                        <br></br>
                        <br></br>
                        Black smoke over Mosul again
                        Painting jagged patterns in the sky
                        Again the fires of Auschwitz
                        Dresden Hiroshima
                        <br></br>
                        <br></br>
                        And here quiet at home again
                        But there the yellow smoke over the Amazon
                        Trees as giant torches
                        Burning bright as parrots
                        <br></br>
                        <br></br>
                        Sumatra Beirut
                        The endless blanket of smoke
                        From pole to equator
                        Car exhausts and the
                        Haze of electric appliances
                        That brighten up the sitting room
                        Evening and night
                        <br></br>
                        <br></br>
                        The TV has brought it home again
                        Mosul Kirkuk
                        Not enough water in the Euphrates
                        To put out a century of flames
                        <br></br>
                        <br></br>
                        The radio proclaims the morning news
                        And after kissing the daily goodbye
                        The car engine revs up
                        More smoke over London and Shanghai
                        <br></br>
                        <br></br>
                        Remember the holocaust
                        Now the earth has the face of a woman
                        Who can no longer bury
                        So much pain
                        In her wrinkled hands
                        <br></br>
                        <br></br>
                        Only your embrace sometimes
                        Brings peace again
                        Sometimes smothers the flames
                        Of another infernal night
                        </p>
                    </div>
                    <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem6}>New born</h4>
                        <p className="poem6">
                        Hello hello here you are
                        It is you, barely born
                        And already eyes wide open
                        A world full of wonder around you
                        <br></br>
                        <br></br>
                        From over here we see a precious child
                        Held in your parent’s embrace
                        So near yet half way across the world
                        A world full of wonder inside you
                        <br></br>
                        <br></br>
                        And the throbbing pulse of love starts
                        To beat in our hearts
                        Love for you unstoppable, irrepressible
                        A world full of wonder embracing us
                        <br></br>
                        <br></br>
                        And every day you are growing
                        Inside us as we see your face, hear your voice
                        Echoing through space and time
                        A world full of wonder within us
                        </p>
                    </div>
                    <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem7}>Mr. President</h4>
                        <p className="poem7">
                        Mr. President, still eloquent
                        on his familiar podium.
                        But he looks tired
                        as he speaks, one final time,
                        about the quest for happiness,
                        equality and liberty,
                        but does anyone really want to know?
                        <br></br>
                        <br></br>
                        Few people are still clapping
                        when he ends,
                        and most photographers don’t waste
                        the flashes in their cameras.
                        And only one or two reporters
                        utter final words of praise.
                        <br></br>
                        <br></br>
                        Now is the hour to step down
                        for Mr. President,
                        down to where
                        his few successes lie trampled
                        into the dust of stark reality,
                        among some long forgotten
                        election promises.
                        <br></br>
                        <br></br>
                        The newly grey-haired man
                        steps off the stage,
                        and walks away for ever.
                        He looks haunted.
                        He must be so exhausted,
                        after all this time,
                        he should lie on a sunny beach a while
                        and get a tan, and get some rest.
                        <br></br>
                        <br></br>

                        Then the new man steps into the hall.
                        He smiles and waves theatrically,
                        walks through the screaming crowd.
                        He shakes some eager hands
                        and has some selfies taken, too.
                        <br></br>
                        <br></br>
                        He climbs the pedestal
                        and shows himself in classical demeanour.
                        ‘Now I’m your man,
                        I am your power president’!
                        <br></br>
                        <br></br>
                        And then the flashlights burst,
                        reporters smell of sweat
                        and scream into their microphones,
                        their voices heard across the world.
                        <br></br>
                        <br></br>
                        Yes, he looks presidential,
                        with his read tie and smart blue suit,
                        sun tanned and weatherproof,
                        in front of all those fluttering flags.
                        <br></br>
                        <br></br>
                        From up high he fixates the crowd.
                        He only makes a short speech today:
                        ‘I’ll do my best for you,
                        it’s you the people who will rule
                        to make our country great again.
                        Or is it me who rules?’
                        <br></br>
                        <br></br>
                        The cameras are purring,
                        admirers standing tiptoe,
                        waving placards:
                        ‘You’re our leader now,
                        let’s show the world!’
                        <br></br>
                        <br></br>
                        Around him
                        his lieutenants give commands
                        to the armed police,
                        and he tells the eager troops:
                        ‘Yes, sure, I’m your man!’
                        <br></br>
                        <br></br>
                        Then someone shouts:
                        ‘You are a lying monster,
                        an egomaniac,
                        a dangerous demagogue.’
                        But he won’t be arrested yet.
                        Not today, not yet.
                        That can wait until tomorrow.
                        <br></br>
                        <br></br>
                        He leaves the venue now.
                        This evening Mr. President
                        is celebrating in an intimate circle,
                        of party friends and wealthy pals,
                        with caviar and rare champagne.
                        And who knows what else is served,
                        and what is said,
                        behind those shuttered doors.
                        <br></br>
                        <br></br>
                        Then, late at night, in his presidential suite
                        he looks into his golden mirror,
                        admiring what he sees,
                        and practices how to speak in such a way,
                        that he doesn’t sound like he’s regurgitating
                        the favourite words of evil men.
                        But, no, he’s not afraid of ghosts.
                        </p>
                    </div>
                    <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem8}>Death in the family</h4>
                        <p className="poem8">
                        At noon today he fell,
                        the bullet had ripped his lion’s heart.
                        He stumbled into the thicket
                        that had been his family home,
                        and as he lay his soul flew away.
                        <br></br>
                        <br></br>
                        He was my brother and yet
                        I’d never met him,
                        had only seen glimpses of him once
                        On my new living room TV.
                        <br></br>
                        <br></br>
                        Or was it his brother I had seen,
                        now also turned into a signature trophy,
                        mane-shrouded skull staring up
                        from a lion-sized fireside rug.
                        <br></br>
                        <br></br>
                        In a billionaire’s palace,
                        next to exquisite ivory carvings,
                        and the head of a grizzly bear.
                        And glass jars full of monkey brains
                        behind closed iroko doors and
                        amaranth window frames.
                        <br></br>
                        <br></br>
                        There are now many deaths in my family,
                        thousands every second
                        in rainforests and deserts
                        and in the oceans.
                        But so far away from
                        this here home of mine.
                        <br></br>
                        <br></br>
                        But who keeps telling me
                        that we aren’t one family.
                        Now we are learning the language
                        of dolphins and whales talking to their young,
                        of the humming life in the soil,
                        of birdsong filling the air with exuberance.
                        <br></br>
                        <br></br>
                        Oh no we aren’t here alone,
                        and yet we will be alone
                        as we fatally rampage through life’s world.
                        And we will win this war as we die.
                        </p>
                    </div>
                    <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem9}>Love miles</h4>
                        <p className="poem9">
                        My kids were born in Kensington,
                        their cousins in Berlin.
                        One auntie lives in Adelaide,
                        another in Turin.
                        <br></br>
                        <br></br>
                        One friend comes from Jerusalem,
                        another from New York.
                        Their wedding was in Amsterdam,
                        for that is where they work.
                        <br></br>
                        <br></br>
                        My best friend comes from Liverpool,
                        his wife from Agadir.
                        Her mother lives in Delhi now,
                        they see her twice a year.
                        <br></br>
                        <br></br>
                        We are a global family,
                        with homes in every land.
                        We speak by Skype and mobile phone,
                        are good at making friends.
                        <br></br>
                        <br></br>
                        We’ve learnt to tell each other’s jokes,
                        share food we all prepare.
                        We celebrate the joys of life,
                        with people everywhere.
                        <br></br>
                        <br></br>
                        We’re learning to make love, not war,
                        try to forget the past.
                        But as we worship sun and sand,
                        let’s ask: can all this last?
                        <br></br>
                        <br></br>
                        We always sit in aeroplanes,
                        we visit everyone.
                        But are we making climate change,
                        with all our global fun?
                        <br></br>
                        <br></br>

                        What will we say when seas submerge
                        the houses where we stay?
                        Will we still travel everywhere
                        when life has washed away?
                        <br></br>
                        <br></br>
                        Yes, let’s be friends with everyone,
                        but keep the earth in mind.
                        For, folks, that is what we owe to them,
                        to those we leave behind.
                        </p>
                    </div>
                    <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem10}>April dawn</h4>
                        <p className="poem10">
                        As night lets go its dreamy grip
                        The morning birds are calling
                        Waking me
                        Exuberantly
                        They’re celebrating dawn
                        Invisible in trees and bushes
                        Voicing their abundant songs
                        That they have known forever
                        But that are new again today
                        The many languages of joy
                        Merged into one
                        Ecstatic harmony
                        <br></br>
                        <br></br>
                        And I can only stand
                        In awe
                        Immersed within
                        This wonderworld
                        That’s theirs and only theirs
                        A silent visitor who’s
                        Being told that spring
                        Is home once more
                        That sun is offering warmth again
                        A scene of tender blossoms
                        And of glorious melodies
                        <br></br>
                        <br></br>
                        And bursting forth
                        From winter wood
                        A world of sprouting leaves
                        In which I am just
                        This silent visitor
                        In awe
                        Of sacred fleeting beauty
                        Beyond imagining
                        Tunes intertwined
                        A union of expectancy
                        And no conductor
                        Needed in this concert hall today
                        <br></br>
                        <br></br>
                        And then the sun arises
                        From the mist of our forest vale
                        Displays its
                        Gleaming face once more
                        A flaming torch of life
                        That banishes the failing night
                        <br></br>
                        <br></br>
                        And then in our morning garden
                        The birds are busy flitting to and from
                        With wings too fast to see
                        And visit secret nests
                        In trees and shrubs
                        Delivering bugs and worms
                        In their now silent beaks
                        Not busy now with songs
                        But feeding
                        Their impatient hungry young
                        <br></br>
                        <br></br>
                        And I vacate this wonderworld
                        Unlatch the cottage door
                        And go inside
                        To have my breakfast too
                        An egg or maybe two
                        And then I go upstairs and hide
                        Behind the plastic screen
                        Of this my clever
                        Silent word machine
                        </p>
                    </div>
                    <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem11}>On Ladbroke Grove again</h4>
                        <p className="poem11">
                        Hallo here I am
                        on Ladbroke Grove again,
                        this old familiar place,
                        my stomping ground
                        where I was young and foolish.
                        <br></br>
                        <br></br>
                        Where we once imagined
                        in our fragile minds
                        a world of peace and love,
                        a world that could be born anew.
                        <br></br>
                        <br></br>
                        Walking streets of long ago,
                        where calypso music
                        used to fill expectant ears,
                        where we were dancing in the street
                        to the bell-like steel drum beat.
                        <br></br>
                        <br></br>
                        And where we made
                        policemen laugh sometimes,
                        despite their fearsome truncheons
                        clasped in hardened hands.
                        <br></br>
                        <br></br>
                        Where scruffy bedsits used to house
                        the likes of you and me,
                        new, shiny SUVs
                        are parked these days,
                        outside refurbished mansions.
                        And graffiti memories
                        have now succumbed to
                        advertising boards and
                        non-stick marble paint.
                        <br></br>
                        <br></br>
                        But on these well-worn streets
                        youthful desires are still rising up
                        like fragrant rainbow flowers,
                        stirred by my grazing glances
                        at these smiling girls
                        in the shortest miniskirts,
                        or with the longest afro curls.
                        <br></br>
                        <br></br>
                        ‘Hello lovely lady
                        do you remember me?
                        Or did I kiss your mother
                        all those years ago?’
                        <br></br>
                        <br></br>
                        Rock bands still practising
                        elusive fame in cellar rooms
                        with drum machines and
                        super amplified guitars,
                        recording songs of unrequited love or
                        anger at an inattentive world
                        through ever hollow microphones.
                        <br></br>
                        <br></br>
                        Outside the old familiar pub
                        I linger pint in hand
                        and stare at people walking by.
                        <br></br>
                        <br></br>
                        And then this dude comes up to me
                        with dangling arms
                        and says: ‘Hey man,
                        you haven’t seen black cats like me before?
                        you have?
                        Then stare at someone else, OK?’
                        <br></br>
                        <br></br>
                        ‘Right on, man. But I reckon
                        that I used to know you
                        when you were a little boy.
                        <br></br>
                        <br></br>
                        I used to visit and score grass
                        off your old man once in a while.
                        He always sold the coolest smoke.’
                        <br></br>
                        <br></br>
                        ‘O yeah, I’ve heard that one before.’
                        And he puts on his designer shades and
                        and wanders off into the crowd.
                        <br></br>
                        <br></br>
                        This is the place
                        where I was young and foolish,
                        where I used to know the names
                        of all the local streets,
                        but most are not familiar now.
                        <br></br>
                        <br></br>
                        They’ve been converted
                        into multicoloured maps
                        on someone’s mobile phone
                        where electric currents flow
                        on tiny circuit boards.
                        <br></br>
                        <br></br>
                        But still, as always taxis, and red buses
                        huddling at the traffic lights
                        on good old Ladbroke Grove.
                        <br></br>
                        <br></br>
                        And all these cars and scooters,
                        and sweaty cyclists delivering pizzas,
                        struggling through
                        the Portobello tourist crowds.
                        <br></br>
                        <br></br>
                        But down the road,
                        outside these mansion houses,
                        immaculate lawns sport garish roses now
                        in the fuming summer air.
                        <br></br>
                        <br></br>
                        And there on Westbourne Grove
                        the junkshops have been turned
                        into exclusive fashion shops,
                        where make-up faces stand and stare
                        at super fabulous displays,
                        spending money they don’t have
                        out of their overdrawn accounts:
                        <br></br>
                        <br></br>
                        Hoping to look rich and be famous
                        like the famous,
                        to become an A-list movie star,
                        and maybe own a mansion house,
                        and even have some love and happiness.
                        But there you go.
                        <br></br>
                        <br></br>
                        Come back with me to Ladbroke Grove,
                        and teach these streets
                        to dream again,
                        and dance and laugh once more,
                        not only once a year
                        in London’s summer carnival.
                        <br></br>
                        <br></br>
                        But there I go
                        below an electric, psychedelic sky.
                        Good day to you, good bye,
                        good night, hello.
                        </p>
                    </div>
                    <div className="poemCard">
                        <h4 className="poemTitle" onClick={this.togglePoem12}>The face of Europe</h4>
                        <p className="poem12">
                        I have seen the face of Europe,
                        smiling with summer delight,
                        flower meadows bearing cows and sheep
                        and orchards and vineyards laden with fruit.
                        Wheat fields waving yellow in the breeze,
                        and ancient villages resting in patient landscapes,
                        hedgerows and country lanes engraved
                        on maps of parchment memory.
                        <br></br>
                        <br></br>
                        I have seen the face of Europe,
                        caressed by golden sunshine,
                        glittering snow on rocky summits,
                        rainstorms emptying heavy crystal clouds,
                        and streams cascading through mountain forests,
                        with rivers meandering down
                        from high valleys to the plains,
                        from placid lakes to the expectant sea.
                        <br></br>
                        <br></br>
                        But I have also seen the land of Europe
                        covered in darker clouds,
                        ruled by a fierce new regime
                        and being readied for a faster future.
                        Restless rivers caged by concrete banks,
                        a village world that’s being swiped away
                        by bulldozers gouging out copses,
                        levelling secret hollows,
                        ripping through forgotten garden soil,
                        ancient landscapes levelled ready for
                        super tractors and their spray booms,
                        and brightly painted harvesting machines
                        driven by men wearing earphones,
                        thrashing cornfields where birdsong has gone.
                        <br></br>
                        <br></br>
                        I have seen cities spilling over to grey horizons,
                        motorways tearing through forests,
                        bridges stalking leftover secret valleys,
                        connecting tower blocks and holiday resorts,
                        lignite mines and power station turbines,
                        hungry factories and burgeoning ports,
                        crammed with tankers and freighters,
                        laden with the spoils of oil wells,
                        of copper mines and banana plantations
                        on the other side of the world,
                        container lorries on eight-lane motorways,
                        carting the bounty of the earth
                        to London, Paris, Brussels and Berlin.
                        <br></br>
                        <br></br>
                        I have seen the people of Europe
                        swarming from cottage farms
                        to office towers in electric cities,
                        drawn by the promise of easy futures,
                        by ever ascending colour charts
                        on cinema sized computer screens.
                        Or by the high priests of downtown discos
                        or the quickfire gods of football fields,
                        or the promise of easy-going robots
                        made ready to start a relentless reign.
                        <br></br>
                        <br></br>
                        And up there high in the mountains,
                        as cables dissect the ever-warming air
                        glaciers are set for further retreat,
                        cannons, not clouds, making the snow now
                        ready for city people in vinyl suits.
                        And up at the ski lift cafe
                        soothing Gluehwein is served
                        in rooms pumped full of selfie songs,
                        as fiddles, flutes and cowbells hang
                        on dusty walls as silent decoration.
                        <br></br>
                        <br></br>
                        I have seen the frowning face of Europe,
                        an anger slowly boiling up
                        cars standing marooned in traffic jams,
                        with engines humming monotonous melodies.
                        Children chasing breathless dogs
                        on littered motorway verges,
                        a land submerged under fumes now
                        as jet planes stand on runways waiting to
                        whisk us off to hasty holidays
                        on happier islands far away.
                        <br></br>
                        <br></br>
                        But I have also seen the faces of young people,
                        full of hopeful, restless anger,
                        filling city streets with placard protests,
                        flocking to the gates of parliaments
                        with painted tattoos shouting
                        “No more of this,
                        let there be future,
                        let there be life again,
                        a land where breathing is easy,
                        Where lungs can fill with real air.
                        Where water tastes fresh like childhood laughter.
                        Yes let joy and love prevail,
                        come with us to make a world
                        where life has come back to life
                        Again.”
                        </p>
                    </div>
                </div>
            </div>
        )
	}
};

export default Poems