import React from 'react';
import SubscribeForm from '../forms/SubscribeForm';

const Subscribe = () => {
  return (
    <section id="subscribe">
      <div className="container">
        <div className="headline">
          <img src="/images/icons/notification-bell.svg" alt="subscribe notification bell" />
          <h2>
            Subscribe to our newsletter
            <span> to stay informed about latest updates</span>
          </h2>
        </div>
        <div className="subscribe-to-newsletter">
          <SubscribeForm />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
