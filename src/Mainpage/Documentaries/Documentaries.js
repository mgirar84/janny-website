import React from 'react';
import './Documentaries.scss';
import {Link} from 'react-router-dom';

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
                    <li><p><h4>The Peoples’ Planet, 2000</h4>A six-part series filmed in 20 countries, on addressing
                        human impacts on the biosphere, and alternatives to pollution and destruction. Lead
                        interviewee: Lester Brown, Founder of the Worldwatch Institute and Earth Policy
                        Institute, Washington; for CNN, NHK, Tokyo, Discovery Channel and Canal Plus, Paris.</p>
                    </li>
                    <li><p><h4>Deadline 2000, 1998</h4>28 three-minute films featuring leading voices in the
                        sustainability movement, such as Wangari Maathai, Vandana Shiva and Satish
                        Kumar; for Channel 4, London.</p>
                    </li>
                    <li><p><h4>Metropolis, 1998</h4>A 50-minute documentary about London’s metabolism. The film
                        examines London’s use of resources, its economy and its waste disposal; for Channel
                        4, London.</p>
                    </li>
                    <li><p><h4>Ancient Knowledge, Modern World, 1997</h4>20-minute interview-based documentary
                        with Dr. Oku Ampofo, founder-director of Ghana’s pioneering Centre for Scientific
                        Research into Plant Medicine.</p>
                    </li>
                    <li><p><h4>Urban Best Practices, 1996</h4>A 40-min film about urban regeneration projects in
                        various countries, made for the UN City Summit in Istanbul.</p>
                    </li>
                    <li><p><h4>Towards Blue Flag, 1994</h4>A 30-minute documentary about membrane wastewater
                        purification technology; for Welsh Water, Cardiff.</p>
                    </li>
                    <li><p><h4>Letter to the Kayapo, 1990</h4>Anita Roddick confirming the commitment of the
                        Bodyshop to help protect the Amazon and its people.</p>
                    </li>
                    <li><p><h4>Halting the Fires, 1989</h4>A 50-minute documentary about the fires set in the Amazon
                        to establish cattle ranches, mines, and logging camps; and about alternatives to
                        deforestation; filmed in Brazil for Channel 4, and ARD, Hamburg.</p>
                    </li>
                    <li><p><h4>The Altamira Gathering, 1989</h4>A15-minute news documentary about the first ever
                        gathering of Amazonian tribes to try and protect their rainforest home from outside
                        interference; filmed in Brazil for Channel 4, London.</p>
                    </li>
                    <li><p><h4>Jungle Pharmacy, 1988</h4>A 50-min documentary on the uses of plant-based remedies by
                        Amazonian Indians, and updated by drug companies in Europe and the US; filmed in
                        Brazil, Peru, the UK and US, for Channel 4. Winner of five awards at film festivals
                        across Europe.
                        <br></br>
                        <Link to="/documentaries/jungle-pharmacy">Click here to view!</Link></p>
                    </li>
                    <li><p><h4>Towards a Green Planet, 1987</h4>A series of six 20-minute films on personal action to
                        reduce human impacts on the environment; for Channel 4, London.</p>
                    </li>
                    <li><p><h4>Far from Paradise, The Story of Man’s Impact on the Environment, 1985</h4>This
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