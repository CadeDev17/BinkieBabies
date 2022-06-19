import coopImg from '../images/heartBinkie.png'

const Binkieverse = () => {
    return (
        <section>
            <section id="Binkieverse">
                <h1 className="title"> Meet the <span>Binkie Babies</span> <a href="https://discord.gg/binkies">Join the binkieverse</a> </h1>
            </section>
            <section className="firepit">
                <div className="content">
                    <h3>About Binkie Babies</h3>
                    <p>
                    You know how the genesis Binkies collection said they are hopping around and banging on the Ethereum blockchain?
                    Well... some Binkies weren't playing it very safe and now have <strong>Binkie Babies</strong>, a collection of 3,333
                    babies trying to find their parents out in the wild west of Web3.
                    </p>
                    <br></br>
                    <p>
                    We reduced the amount of traits to really bring out the cuteness in our colleciton of Binkie Babies. But other than the cute
                    faces we left all the other traits so you can find your Binkies offspring! (Or get another chance to pull a SUPER RARE)
                    </p>
                    <br></br>
                    <p>
                    We are working directly with the Binkies founders to make sure that this collection follows the high standards that Binkies 
                    Genesis collection has set. This generation of Binkies will be a huge advocate to how awesome BinkieVille and Binkie Academy is!
                    </p>
                    <br></br>
                    <p>
                    Join the genesis holders in BinkyVille and help us bridge the gap between Web3 and the physical world. We can’t wait to welcome our newest member: YOU!
                    </p>
                    <a href="https://discord.gg/binkies" className="btn">Discord</a>
                </div>

                <div className="img">
                    <img src={coopImg}/>
                </div>
            </section>
        </section>
    );
}

export default Binkieverse









