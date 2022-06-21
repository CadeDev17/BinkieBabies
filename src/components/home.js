import homeImg from '../images/BinkieUniverse.png'


const Home = () => {
    return (
        <section className="home" id="home">
            <div className="slides-container">
                <div className="slide">
                    <div className="home-container">
                        <div className="home-content">
                            <h1>Binkie Babies</h1>
                            <h3>Made by Binkie holders, for Binkie holders. CC0 Project, FREE MINT, expanding the BinkieVerse</h3>
                            <a href="https://twitter.com/binkiebabies" className="btn">Twitter</a>
                            <a href="https://discord.gg/M8AvNpv5dT" className="btn">Discord</a>
                        </div>
                        <div>
                            <img className="homeImg" src={homeImg} alt=""/>
                        </div>
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home

