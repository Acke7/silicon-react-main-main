import React from 'react'

const MoneyTransfer = () => {
  return (
    <section id="money-transfer-section">
        <div className="container">
            <div className="column">
                <div className="content">
                    <div className="section-title">
                        <h2>Make your money transfer simple and clear</h2>
                    </div>

                    <div className="section-body">
                        <ul className="checklist">
                            <li>
                                <i className="fa-regular fa-circle-check"></i>
                                <p>Banking transactions are free for you</p>
                            </li>
                            <li>
                                <i className="fa-regular fa-circle-check"></i>
                                <p>No monthly cash commission</p>
                            </li>
                            <li>
                                <i className="fa-regular fa-circle-check"></i>
                                <p>Manage payments and transactions online</p>
                            </li>
                        </ul>


                        <a href="#" className="btn">Learn more <i className="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="column">
                <img src="/images/transfer-statisitcs.svg" alt="statistics" />
            </div>
        </div>
    </section>
  )
}

export default MoneyTransfer