import React, { useState, useEffect } from 'react';

// Assuming you have a service to fetch forecast data
const fetchForecastData = async () => {
  // Simulated fetch request
  const response = await fetch('https://example.com/api/forecast');
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Failed to fetch forecast data');
  }
};

const NonCriticalComponent = () => {
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLoadData = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchForecastData();
      setForecastData(data);
    } catch (e) {
      setError('Failed to load data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Optionally, auto-fetch data on component mount or leave it to a user action.
  }, []);

  return (
    <div>
      <button onClick={handleLoadData} disabled={loading}>
        {loading ? 'Loading...' : 'Load Forecast Data'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {forecastData && (
        <div>
          {/* Render your forecast data here */}
          <p>Forecast data loaded!</p>
        </div>
      )}
    </div>
  );
};

export default NonCriticalComponent;