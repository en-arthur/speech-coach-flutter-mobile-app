'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Bar, Line } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Mock data (replace with actual data in a real implementation)
const mockData = {
  fillerWords: 15,
  speakingPace: 130,
  articulationClarity: 75,
  confidenceLevel: 68,
  paceData: [
    { time: '0s', wpm: 100 },
    { time: '10s', wpm: 120 },
    { time: '20s', wpm: 140 },
    { time: '30s', wpm: 130 },
  ],
  toneData: [
    { time: '0s', tone: 50 },
    { time: '10s', tone: 70 },
    { time: '20s', tone: 60 },
    { time: '30s', tone: 80 },
  ],
};

export default function FeedbackSummaryPage() {
  const [feedbackSaved, setFeedbackSaved] = useState(false);
  const router = useRouter();

  const handleSaveFeedback = () => {
    // Implement save functionality here
    setFeedbackSaved(true);
    router.push('/dashboard');
  };

  const handleTryAgain = () => {
    router.push('/timer');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Feedback Summary</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Filler Words</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-red-500">{mockData.fillerWords}</p>
                <p className="text-sm text-gray-500">Try pausing instead of saying 'um.'</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Speaking Pace</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-blue-500">{mockData.speakingPace} WPM</p>
                <p className="text-sm text-gray-500">Aim for 120-150 words per minute.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Articulation Clarity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-green-500">{mockData.articulationClarity}%</p>
                <p className="text-sm text-gray-500">Practice enunciating clearly.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Confidence Level</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-yellow-500">{mockData.confidenceLevel}%</p>
                <p className="text-sm text-gray-500">Work on maintaining a steady tone.</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Speaking Pace Variation</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{
                  wpm: {
                    label: "Words per Minute",
                    color: "hsl(var(--chart-1))",
                  },
                }} className="h-[200px]">
                  <Line
                    data={mockData.paceData}
                    dataKey="wpm"
                    stroke="var(--color-wpm)"
                    strokeWidth={2}
                  />
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tone Variation</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{
                  tone: {
                    label: "Tone Level",
                    color: "hsl(var(--chart-2))",
                  },
                }} className="h-[200px]">
                  <Line
                    data={mockData.toneData}
                    dataKey="tone"
                    stroke="var(--color-tone)"
                    strokeWidth={2}
                  />
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <Button onClick={handleSaveFeedback} disabled={feedbackSaved}>
              {feedbackSaved ? 'Feedback Saved' : 'Save Feedback'}
            </Button>
            <Button onClick={handleTryAgain} variant="outline">
              Try Again
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
