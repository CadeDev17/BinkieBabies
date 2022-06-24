import Owner from '../images/marketingBinkie.png'
import Marketer from '../images/developerBinkie.png'


const Team = () => {
    return (
        <section>
            <section className="teams">
                <h1 className="title">Binkie Babies <span>Team</span></h1>
            </section>


            <section>
                <div className="team-container">

                    <div className="team-box">
                        <div className="team-img-container">
                            <img className="teamImg" src={Owner}/>
                        </div>
                        <div className="team-content">
                            <div className="icons">
                                <a className="fas fa-calendar calendar-icon">6+ yrs</a>
                                <a className="fas fa-user">Head of Marketing</a>
                            </div>
                            <h3>Binkies #4036</h3>
                            <p>From 20yrs+ in ecommerce and web2 marketing to NFTs and web3 marketing. Binkie for lyfe. Marketing is easy.</p>
                        </div>
                    </div>

                    <div className="team-box">
                        <div className="team-img-container">
                            <img className="teamImg" src={Marketer}/>
                        </div>
                        <div className="team-content">
                            <div className="icons">
                                <a className="fas fa-calendar calendar-icon">3+ yrs</a>
                                <a className="fas fa-user">Blockchain Developer</a>
                            </div>
                            <h3>General Bink</h3>
                            <p>ETH Maxi. I code for fun on the weekends.</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Team