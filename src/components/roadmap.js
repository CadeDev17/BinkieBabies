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
                                in the best interest of the Binkies community.
                            </p> 
                            <br></br>
                            <p>
                                • After that, we will quickly begin constructing the BB images, smart contract, website,
                                and planning for all of the AWESOME things we want to do with our Binkie fam.
                            </p>
                            <br></br>
                            <p>
                                • At 150 ETH traded we will be taking a snapshot of Binkie Baby holders and AIRDROPPING 5 1/1 Binkie 
                                Babies to our holder fam.
                            </p>
                            <br></br>
                            <p>
                                • At 300 ETH volume traded we will be creating our Binkie Babies ecommerce store where we will have
                                TONS of awesome merchandise available for our Binkie fam for SUPER CHEAP. (Profits go to further 
                                advancements in Binkies main project)
                            </p>
                            <br></br>
                            <p>
                                • At 500 ETH volume traded we will be starting our staking mechanism where holders of BOTH Binkies 
                                and Binkie Babies will be able to stake for $BINK (token name subject to change)
                            </p>
                            <br></br>
                            <p>
                               • At 750 ETH volume traded we will be having a GIVEAWAY challenge for all our Binkie Babies holders to be able to
                                participate in. Will it be for 1 ETH, 3 ETH, 5 ETH??? who knows... we do ;)
                            </p>
                            <br></br>
                            <p>
                               • At 1,000 ETH volume traded we have a special suprise for our community but until then, our lips are sealed.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </section>
    );
}

export default Roadmap
