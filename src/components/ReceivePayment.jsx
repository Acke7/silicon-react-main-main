import React from 'react'
import LinkButton from '../elements/LinkButton'

const ReceivePayment = () => {
  return (
    <section id="receive-payment">
        <div class="container">
            <div class="column left">
                <img src="/images/receive-payment.svg" alt="payment" />
            </div>
            <div class="column right">
                <div class="content">
                    <div class="section-title">
                        <h2>Receive payment from international bank details</h2>
                    </div>
                    <div class="section-body">
                        <div className="features">
                            <div className="feature">
                                <div className="feature-icon">
                                    <img src="images/icons/credit-card.svg" alt="credit card" />
                                </div>
                                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">
                                    <img src="images/icons/wallet.svg" alt="credit card" />
                                </div>
                                <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                            </div>
                        </div>

                        <div className="learn-more-link">
                            <LinkButton to="/" color="purple" text="Learn more" icon="bi bi-arrow-right" iconAfter={true} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default ReceivePayment