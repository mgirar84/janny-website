import React from 'react';
import './Documentaries.scss';

class Documentaries extends React.Component {
	render() {
        return (
            <div className="documentaries">
                <div className="documentariesBanner"></div>
                <h3>Documentaries</h3>
                <p className="mainText">
                I worked as a filmmaker for 18 years from 1983 till 2001 – as researcher, producer and
                director – making environmentally-focussed documentaries for various broadcasters. I also
                made several films for some institutions and companies:
                </p>
                <ul>
                    <li><p>The Peoples’ Planet, 2000, a six-part series filmed in 20 countries, on addressing
                        human impacts on the biosphere, and alternatives to pollution and destruction. Lead
                        interviewee: Lester Brown, Founder of the Worldwatch Institute and Earth Policy
                        Institute, Washington; for CNN, NHK, Tokyo, Discovery Channel and Canal Plus, Paris.</p>
                    </li>
                    <li><p>Deadline 2000, 1998, 28 three-minute films featuring leading voices in the
                        sustainability movement, such as Wangari Maathai, Vandana Shiva and Satish
                        Kumar; for Channel 4, London.</p>
                    </li>
                    <li><p>Metropolis, 1998, a 50-minute documentary about London’s metabolism. The film
                        examines London’s use of resources, its economy and its waste disposal; for Channel
                        4, London.</p>
                    </li>
                    <li><p>Ancient Knowledge, Modern World, 1997, 20-minute interview-based documentary
                        with Dr. Oku Ampofo, founder-director of Ghana’s pioneering Centre for Scientific
                        Research into Plant Medicine.</p>
                    </li>
                    <li><p>Urban Best Practices, 1996, a 40-min film about urban regeneration projects in
                        various countries, made for the UN City Summit in Istanbul.</p>
                    </li>
                    <li><p>Towards Blue Flag, 1994, a 30-minute documentary about membrane wastewater
                        purification technology; for Welsh Water, Cardiff.</p>
                    </li>
                    <li><p>Letter to the Kayapo, 1990. Anita Roddick confirming the commitment of the
                        Bodyshop to help protect the Amazon and its people.</p>
                    </li>
                    <li><p>Halting the Fires, 1989, a 50-minute documentary about the fires set in the Amazon
                        to establish cattle ranches, mines, and logging camps; and about alternatives to
                        deforestation; filmed in Brazil for Channel 4, and ARD, Hamburg.</p>
                    </li>
                    <li><p>The Altamira Gathering, 1989, a 15-minute news documentary about the first ever
                        gathering of Amazonian tribes to try and protect their rainforest home from outside
                        interference; filmed in Brazil for Channel 4, London.</p>
                    </li>
                    <li><p>Jungle Pharmacy, 1988, 50-min documentary on the uses of plant-based remedies by
                        Amazonian Indians, and updated by drug companies in Europe and the US; filmed in
                        Brazil, Peru, the UK and US, for Channel 4. Winner of five awards at film festivals
                        across Europe.</p>
                    </li>
                    <li><p>Towards a Green Planet, 1987, a series of six 20-minute films on personal action to
                        reduce human impacts on the environment; for Channel 4, London.</p>
                    </li>
                    <li><p>Far from Paradise, The Story of Man’s Impact on the Environment, 1985. This
                        pioneering seven-hour series made over three years, and filmed in 12 countries, was
                        initiated and researched by me and presented by John Seymour; for BBC 2, ZDF,
                        Germany, ORF, Austria, and RAI, Italy.</p>
                    </li>
                </ul>
            </div>
        )
	}
};

export default Documentaries