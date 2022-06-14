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
                            <a href="https://twitter.com/cluckiesxyz" className="btn">Twitter</a>
                            <a href="https://discord.gg/ZHEpvSVCxt" className="btn">Discord</a>
                        </div>
                        <div className="img home-img">
                            <img className="homeImg" src={homeImg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home

