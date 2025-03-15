import React from 'react'
import LinkButton from '../elements/LinkButton'

const MoneyTransfer = () => {
    return (
        <section id="money-transfer">
            <div class="container">
                <div class="column left">
                    <div class="content">
                        <div class="section-title">
                            <h2>Make your money transfer simple and clear</h2>
                        </div>
                        <div class="section-body">
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>Banking transactions are free for you</li>
                                <li><i class="fa-regular fa-circle-check"></i>No monthly cash commission</li>
                                <li><i class="fa-regular fa-circle-check"></i>Manage payments and transactions online</li>
                            </ul>
                            <div className="learn-more-link">
                                <LinkButton to="/" color="purple" text="Learn more" icon="bi bi-arrow-right" iconAfter={true} />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    <img src="/images/transfer-statisitcs.svg" alt="statistics" />
                </div>
            </div>
        </section>
    )
}

export default MoneyTransfer