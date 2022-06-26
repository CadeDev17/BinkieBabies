const Footer = () => {
    return (
        <footer>
            <section className="footer" id="footer" >
                <div className="footer-box-container">
                    <div className="box">
                        <h3>Quick Links</h3>
                            <a href="#home"> <i className="fa fa-arrow-right"></i>Home</a>
                            <a href="#mint"> <i className="fa fa-arrow-right"></i>Mint</a>
                            <a href="#Binkieverse"> <i className="fa fa-arrow-right"></i>BinkieVerse</a>
                            <a href="#roadmap"> <i className="fa fa-arrow-right"></i>Roadmap</a>
                            <a href="#faq"> <i className="fa fa-arrow-right"></i>FAQ</a>
                    </div>

                    <div className="box">
                        <h3>Extra Links</h3>
                        <a href="https://opensea.io/collection/binkie-babies"> <i className="fa fa-arrow-right"></i> OpenSea</a>
                        <a href="https://etherscan.io/address/0x1bb08f4c63e891049fbb716fe4636392e32b4f7c"> <i className="fa fa-arrow-right"></i> Etherscan</a>
                        <a href="https://www.gem.xyz/"> <i className="fa fa-arrow-right"></i> Rarity Tool</a>
                        <a href="https://binkies.io/"> <i className="fa fa-arrow-right"></i> Binkie Academy</a>
                    </div>
                    
                    <div className="box">
                        <h3>Follow Us</h3>
                        <a href="https://twitter.com/binkiebabies"> <i className="fab fa-twitter"></i> Twitter</a>
                        <a href="https://discord.gg/M8AvNpv5dT"> <i className="fab fa-discord"></i> Discord</a>
                    </div>
                </div>
            </section>

            <section className="credit">Created by <span>Binkies #4036</span></section>
        </footer>
    );
}

export default Footer

