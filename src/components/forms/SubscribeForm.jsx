import React, { useContext } from "react";
import { SubscribeContext } from "../../contexts/SubscribeContext";

const SubscribeForm = () => {
  const { formData, handleChange, handleSubmit, message, error, loading } = useContext(SubscribeContext);

  return (
    <div className="subscribe-to-newsletter"> {/* Wrapper needed for positioning */}
      <form onSubmit={handleSubmit} noValidate>
        <i className="fa-regular fa-envelope"></i>
        <input
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button className="btn btn-purple" type="submit" disabled={loading}>
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {/* Success or error message */}
      <div className="validating-message">
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default SubscribeForm;
