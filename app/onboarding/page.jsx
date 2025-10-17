'use client'
import React, { useState } from 'react';
import { Check, ChevronRight, ChevronLeft, Plus, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const OnboardingFlow = () => {
  const [step, setStep] = useState(1);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [customGoal, setCustomGoal] = useState('');
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [customArea, setCustomArea] = useState('');
  const [proficiency, setProficiency] = useState('');
  const [showCustomGoalInput, setShowCustomGoalInput] = useState(false);
  const [showCustomAreaInput, setShowCustomAreaInput] = useState(false);

  // Initialize router

  
  const predefinedGoals = [
    "Reduce filler words",
    "Improve articulation",
    "Build confidence"
  ];

  const predefinedAreas = [
    "Public Speaking",
    "Job Interviews",
    "Daily Conversations"
  ];

  const proficiencyLevels = [
    "Beginner",
    "Intermediate",
    "Advanced"
  ];

  const handleGoalToggle = (goal) => {
    setSelectedGoals(prev => 
      prev.includes(goal) 
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    );
  };

  const handleAreaToggle = (area) => {
    setSelectedAreas(prev => 
      prev.includes(area) 
        ? prev.filter(a => a !== area)
        : [...prev, area]
    );
  };

  const addCustomGoal = () => {
    if (customGoal.trim()) {
      setSelectedGoals(prev => [...prev, customGoal.trim()]);
      setCustomGoal('');
      setShowCustomGoalInput(false);
    }
  };

  const addCustomArea = () => {
    if (customArea.trim()) {
      setSelectedAreas(prev => [...prev, customArea.trim()]);
      setCustomArea('');
      setShowCustomAreaInput(false);
    }
  };

  const removeGoal = (goal) => {
    setSelectedGoals(prev => prev.filter(g => g !== goal));
  };

  const removeArea = (area) => {
    setSelectedAreas(prev => prev.filter(a => a !== area));
  };
  const router = useRouter();
  const isStepValid = () => {
    switch (step) {
      case 1:
        return selectedGoals.length > 0;
      case 2:
        return selectedAreas.length > 0;
      case 3:
        return proficiency !== '';
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (isStepValid() && step < 3) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    if (isStepValid()) {
      console.log({
        goals: selectedGoals,
        areas: selectedAreas,
        proficiency
      });
      router.push('/promptselection');
      
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  stepNumber === step
                    ? 'bg-indigo-600 text-white'
                    : stepNumber < step
                    ? 'bg-indigo-200 text-indigo-700'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {stepNumber}
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-indigo-600 rounded-full transition-all duration-300"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Goals */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">What are your primary goals?</h2>
            <div className="space-y-4 mb-6">
              {predefinedGoals.map((goal) => (
                <button
                  key={goal}
                  onClick={() => handleGoalToggle(goal)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-colors ${
                    selectedGoals.includes(goal)
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-200'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                      selectedGoals.includes(goal)
                        ? 'border-indigo-600 bg-indigo-600'
                        : 'border-gray-300'
                    }`}>
                      {selectedGoals.includes(goal) && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    {goal}
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Goal Input */}
            {showCustomGoalInput ? (
              <div className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customGoal}
                    onChange={(e) => setCustomGoal(e.target.value)}
                    placeholder="Enter your custom goal"
                    className="flex-1 p-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:ring-0"
                  />
                  <button
                    onClick={addCustomGoal}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Add
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowCustomGoalInput(true)}
                className="flex items-center text-indigo-600 mb-6"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add custom goal
              </button>
            )}

            {/* Selected Goals */}
            {selectedGoals.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">Selected Goals:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedGoals.map((goal) => (
                    <div
                      key={goal}
                      className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full flex items-center"
                    >
                      {goal}
                      <button
                        onClick={() => removeGoal(goal)}
                        className="ml-2 text-indigo-400 hover:text-indigo-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Areas of Focus */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Select your areas of focus</h2>
            <div className="space-y-4 mb-6">
              {predefinedAreas.map((area) => (
                <button
                  key={area}
                  onClick={() => handleAreaToggle(area)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-colors ${
                    selectedAreas.includes(area)
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-200'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                      selectedAreas.includes(area)
                        ? 'border-indigo-600 bg-indigo-600'
                        : 'border-gray-300'
                    }`}>
                      {selectedAreas.includes(area) && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    {area}
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Area Input */}
            {showCustomAreaInput ? (
              <div className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customArea}
                    onChange={(e) => setCustomArea(e.target.value)}
                    placeholder="Enter your custom area"
                    className="flex-1 p-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:ring-0"
                  />
                  <button
                    onClick={addCustomArea}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Add
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowCustomAreaInput(true)}
                className="flex items-center text-indigo-600 mb-6"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add custom area
              </button>
            )}

            {/* Selected Areas */}
            {selectedAreas.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">Selected Areas:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedAreas.map((area) => (
                    <div
                      key={area}
                      className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full flex items-center"
                    >
                      {area}
                      <button
                        onClick={() => removeArea(area)}
                        className="ml-2 text-indigo-400 hover:text-indigo-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Proficiency Level */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">What's your current proficiency level?</h2>
            <div className="space-y-4 mb-6">
              {proficiencyLevels.map((level) => (
                <button
                  key={level}
                  onClick={() => setProficiency(level)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-colors ${
                    proficiency === level
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-200'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                      proficiency === level
                        ? 'border-indigo-600 bg-indigo-600'
                        : 'border-gray-300'
                    }`}>
                      {proficiency === level && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    {level}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handleBack}
            className={`flex items-center px-6 py-2 rounded-lg ${
              step === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            disabled={step === 1}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          {step < 3 ? (
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className={`flex items-center px-6 py-2 rounded-lg ${
                isStepValid()
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isStepValid()}
              className={`flex items-center px-6 py-2 rounded-lg ${
                isStepValid()
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Get Started
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;