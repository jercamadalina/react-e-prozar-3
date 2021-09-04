const Promotion = ({ promotion, selectedLanguage }) => {
    const today = new Date()
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ];
    const monthName = monthNames[today.getMonth()];
    const formattedDate = `${today.getDate()} ${monthName}`

    promotion.newPrice = Math.round(parseInt(promotion.price.substring(1)) / 2)

    return <section className="promotion">
                <h2>{selectedLanguage.promoMessageHeader}</h2>

                <div className="card">
                    <div className="card-image">
                        <img src={promotion.image} alt={promotion.name} />
                    </div>
                    <div className="card-body">
                        <h3>{promotion.name}</h3>
                        <p>{promotion.shortDescription}</p>
                        <p className="old-price">{promotion.price}</p>
                        <p>
                            <span>${promotion.newPrice}</span> only on{" "}
                            <span>{formattedDate}</span>
                        </p>
                    </div>
                </div>
            </section>
}

export default Promotion
