import BuildingCoop from '../images/roadmap.png'

const Roadmap = () => {
    return (
        <section>
            <section>
                <h1 className="title">Roadmap</h1>
            </section>

            <section className="roadmap" id="roadmap">
                <div className="swiper mySwiper roadmap-slider">
                    <div className="swiper-wrapper wrapper">

                        <div className="swiper-slide slide">
                            <div className="user">
                                <div className="user-info">
                                    <img src={BuildingCoop}/>
                                    <h3>Roadmap... Baby Edition</h3>
                                </div>
                            </div>
                            <p>
                                • Get approval from the origional Binkies project. Then we will begin to create Binkie Babies 
                                in the best interest of the Binkies community. √
                            </p> 
                            <br></br>
                            <p>
                                • Begin constructing the Binkie Baby images, smart contract, website,
                                and planning for all of the AWESOME things we want to do with our Binkie fam. √
                            </p>
                            <br></br>
                            <p>
                                • At 150 ETH volume traded we will be starting our Binkie Baby GAMES in our discord to see who has what it takes to win our giveaway challenges
                            </p>
                            <br></br>
                            <p>
                                • At 300 ETH volume traded we will begin creating our Binkie Babies ecommerce store where we will have
                                TONS of awesome merchandise available for our Binkie fam for SUPER CHEAP. (% of profits go to further 
                                advancements in Binkies genesis collection)
                            </p>
                            <br></br>
                            <p>
                               • At 750 ETH volume traded we will be having a GIVEAWAY challenge for all our Binkie Babies holders to be able to
                                participate in. Will it be for 1 ETH, 3 ETH, 5 ETH??? who knows... we do!
                            </p>
                            <br></br>
                            <p>
                               • At 1,000 ETH volume traded... Just wait and see ;)
                            </p>
                            <br></br>
                            <p>
                               • <strong>All Binkie Babies holders will have FULL access to all of the utilities of the MAIN Binkies collection!!</strong>
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </section>
    );
}

export default Roadmap
