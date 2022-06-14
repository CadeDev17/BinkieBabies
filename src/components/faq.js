const Faq = () => {
    return (
        <section id="faq">
            <section>
                <h1 className="title">FAQ</h1>
            </section>

            <section className="faq">
                <div className="icons-container">
                    <div className="icons faq-content">
                        <i className="fas fa-bookmark"></i>
                        <h3>What are the minting limitations?</h3>
                        <p>Per wallet: unlimited // Per transaction: 10</p>
                    </div>

                    <div className="icons faq-content">
                        <i className="fas fa-money-bill-alt"></i>
                        <h3>What is the cost?</h3>
                        <p>FREEEEEEE.99</p>
                    </div>

                    <div className="icons faq-content">
                        <i className="fas fa-cookie"></i>
                        <h3>What is the total supply?</h3>
                        <p>3,333</p>
                    </div>

                    <div className="icons faq-content">
                        <i className="fas fa-egg"></i>
                        <h3>Guaranteed free mint spots are for Genesis Binkies holders?</h3>
                        <p>1,111 (Can mint up to 2 Binkie Babies)</p>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Faq
