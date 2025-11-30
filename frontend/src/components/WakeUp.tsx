import React, { useState } from 'react';

function WakeUp() {
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);

  const handleWakeUp = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://test-cd0n.onrender.com/wake-up');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.msg === 'ok') {
        setStarted(true);
      }
    } catch (error) {
      // Optionally, handle error state here
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      size="lg"
      className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-12 py-4 rounded-xl transition-all duration-300 hover:scale-105 font-sans flex items-center justify-center"
      onClick={handleWakeUp}
      disabled={loading || started}
    >
      {started ? 'Server Started' : (loading ? 'Waking up...' : 'Start Server')}
      {loading && (
        <svg
          className="animate-spin ml-3 h-5 w-5 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      )}
    </button>
  );
}

export default WakeUp;
