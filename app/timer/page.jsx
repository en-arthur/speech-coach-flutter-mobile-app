'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Timer = () => {
  const [time, setTime] = useState(30);
  const router = useRouter();

  const handleNext = () => {
    router.push('/live_recording'); // Replace '/next' with the actual route for the next page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-full bg-gray-100 p-4">
      <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">Timer Adjustment</h1>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label 
              htmlFor="timer-range" 
              className="text-lg font-medium text-gray-700"
            >
              Adjust Timer (30-60 seconds):
            </label>
            <input
              type="range"
              id="timer-range"
              min="30"
              max="60"
              value={time}
              onChange={(e) => setTime(parseInt(e.target.value))}
              className="w-2/3 appearance-none h-2 bg-blue-300 rounded-full outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div 
            className="text-6xl font-extrabold text-center text-blue-600"
          >
            {time}s
          </div>
          <button
            onClick={handleNext}
            className="w-full py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
