'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const fillerWords = ['um', 'uh', 'like', 'you know', 'actually', 'basically', 'literally'];

export default function LiveRecordingPage() {
  const [timeLeft, setTimeLeft] = useState(30);
  const [fillerWordCount, setFillerWordCount] = useState(0);
  const [transcription, setTranscription] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isRecording && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isRecording && timeLeft === 0) {
      router.push('/feedback-summary');
    }
  }, [timeLeft, router, isRecording]);

  useEffect(() => {
    if (isRecording) {
      const recognitionInterval = setInterval(() => {
        const newWord = Math.random() < 0.2 ? fillerWords[Math.floor(Math.random() * fillerWords.length)] : 'word';
        setTranscription((prev) => `${prev} ${newWord}`.trim());
        setWordCount((prev) => prev + 1);
        if (fillerWords.includes(newWord)) {
          setFillerWordCount((prev) => prev + 1);
        }
      }, 500);

      return () => clearInterval(recognitionInterval);
    }
  }, [isRecording]);

  const startRecording = () => {
    setIsRecording(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">Live Recording</h2>
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Time Remaining</h3>
              <div className="text-6xl font-bold text-blue-600">{timeLeft}</div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Filler Words Detected</h3>
              <div className="text-4xl font-bold text-red-500">{fillerWordCount}</div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Live Transcription</h3>
              <div className="bg-gray-100 p-4 rounded-lg h-40 overflow-y-auto">
                <p className="text-gray-800">{transcription}</p>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={startRecording}
                disabled={isRecording}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isRecording ? 'Recording...' : 'Start Recording'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

