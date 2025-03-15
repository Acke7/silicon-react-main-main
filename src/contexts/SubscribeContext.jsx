import { useState, createContext } from "react";

// Create a Context for Subscription
export const SubscribeContext = createContext();

export const SubscribeProvider = ({ children }) => {
  const apiUrl = 'https://kyhn24.azurewebsites.net/api/subscribe'; // Your API URL
  const defaultValues = { email: '' };
  const [formData, setFormData] = useState(defaultValues);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle change in email input
  const handleChange = (e) => {
    setFormData({ email: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    // Send email to the API
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message); // Success message
      } else {
        setError('There was an issue with your subscription. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }

    // Reset the form data after submission
    setFormData(defaultValues);
  };

  return (
    <SubscribeContext.Provider value={{ formData, handleChange, handleSubmit, message, error, loading }}>
      {children}
    </SubscribeContext.Provider>
  );
};
