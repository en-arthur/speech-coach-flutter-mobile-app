'use client'
import React, { useState } from 'react';
import {
  BarChart,
  LineChart,
  Home,
  Award,
  BookOpen,
  ChevronRight,
  Timer,
  Volume2,
  Mic,
  User,
  Settings,
  Mail,
  Lock,
  Trash2,
  Shield,
  Target,
  MessageCircle,
  Gauge,
  Sparkles,
  Brain,
  Play,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Calendar
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState('home');
  const [difficulty, setDifficulty] = useState('intermediate');

  const sidebarMenus = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'challenges', label: 'Challenges', icon: Award },
    { id: 'learning', label: 'Learning Path', icon: BookOpen },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const recentRecordings = [
    {
      id: 1,
      prompt: "Talk about your hobbies for 30 seconds",
      date: "Today, 2:30 PM",
      metrics: [
        {
          title: "Filler Words",
          value: "15",
          icon: MessageCircle,
          suggestion: "Try pausing instead of saying 'um.'",
          trend: "up",
          color: "red"
        },
        {
          title: "Speaking Pace",
          value: "130 WPM",
          icon: Gauge,
          suggestion: "Aim for 120-150 words per minute.",
          trend: "stable",
          color: "green"
        },
        {
          title: "Articulation Clarity",
          value: "75%",
          icon: Sparkles,
          suggestion: "Practice enunciating clearly.",
          trend: "up",
          color: "yellow"
        },
        {
          title: "Confidence Level",
          value: "68%",
          icon: Brain,
          suggestion: "Work on maintaining a steady tone.",
          trend: "up",
          color: "yellow"
        }
      ]
    },
    {
      id: 2,
      prompt: "Describe your ideal vacation",
      date: "Today, 1:15 PM",
      metrics: [
        {
          title: "Filler Words",
          value: "12",
          icon: MessageCircle,
          suggestion: "Good improvement! Keep reducing filler words.",
          trend: "down",
          color: "yellow"
        },
        {
          title: "Speaking Pace",
          value: "125 WPM",
          icon: Gauge,
          suggestion: "Perfect pace maintained.",
          trend: "stable",
          color: "green"
        },
        {
          title: "Articulation Clarity",
          value: "82%",
          icon: Sparkles,
          suggestion: "Excellent clarity achieved.",
          trend: "up",
          color: "green"
        },
        {
          title: "Confidence Level",
          value: "72%",
          icon: Brain,
          suggestion: "Growing confidence noticed.",
          trend: "up",
          color: "green"
        }
      ]
    }
  ];

  const challenges = [
    {
      title: "Speak without fillers",
      description: "Speak for 60 seconds without using 'um' or 'like'",
      duration: "60 seconds",
      difficulty: "Intermediate",
      icon: Mic
    },
    {
      title: "Control your pace",
      description: "Slow your pace to 120 words per minute",
      duration: "2 minutes",
      difficulty: "Beginner",
      icon: Timer
    },
    {
      title: "Storytelling Challenge",
      description: "Tell a compelling story with a clear beginning, middle, and end",
      duration: "3 minutes",
      difficulty: "Advanced",
      icon: BookOpen
    }
  ];

  const recommendedExercises = [
    {
      title: "Pause Effectively",
      description: "Practice slowing down and pausing during speech",
      duration: "5 minutes",
      completed: false,
      icon: Timer
    },
    {
      title: "Remove Filler Words",
      description: "Record 30 seconds without using filler words",
      duration: "2 minutes",
      completed: true,
      icon: Mic
    },
    {
      title: "Improve Pace",
      description: "Exercise to maintain moderate speaking speed",
      duration: "3 minutes",
      completed: false,
      icon: Volume2
    }
  ];

  const profileSettings = {
    goals: [
      { id: 'clarity', label: 'Clarity', active: true },
      { id: 'articulation', label: 'Articulation', active: false },
      { id: 'pacing', label: 'Pacing', active: true },
      { id: 'confidence', label: 'Confidence', active: false }
    ],
    difficulties: ['beginner', 'intermediate', 'advanced'],
    email: 'user@example.com'
  };

  const renderHomePage = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Recent Recordings</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm flex items-center">
          View All <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      {recentRecordings.map((recording) => (
        <Card key={recording.id} className="w-full">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {recording.prompt}
                </CardTitle>
                <p className="text-sm text-gray-500 mt-1">{recording.date}</p>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm flex items-center">
                Play Recording <Play className="w-4 h-4 ml-1" />
              </button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recording.metrics.map((metric) => (
                <div 
                  key={metric.title} 
                  className="flex flex-col p-4 rounded-lg bg-gray-50"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <metric.icon 
                        className={`w-5 h-5 mr-2 text-${metric.color}-500`} 
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {metric.title}
                      </span>
                    </div>
                    <div className="flex items-center">
                      {metric.trend === "up" && (
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      )}
                      {metric.trend === "down" && (
                        <TrendingDown className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                  </div>
                  <div className="text-2xl font-bold mb-2">{metric.value}</div>
                  <p className="text-sm text-gray-600">{metric.suggestion}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderChallenges = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Speaking Challenges</h2>
        <div className="flex gap-2">
          {profileSettings.difficulties.map(level => (
            <button
              key={level}
              onClick={() => setDifficulty(level)}
              className={`px-4 py-2 rounded-lg text-sm ${
                difficulty === level
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <Card key={challenge.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{challenge.title}</CardTitle>
                <challenge.icon className="w-5 h-5 text-blue-500" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{challenge.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">{challenge.duration}</span>
                  <span className="text-sm text-gray-500">{challenge.difficulty}</span>
                </div>
                <button className="flex items-center text-blue-500 hover:text-blue-600">
                  Start <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderLearningPath = () => (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Your Learning Path</h2>
        <p className="text-gray-600">Personalized exercises based on your progress</p>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">Recommended Exercises</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedExercises.map((exercise) => (
            <Card key={exercise.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{exercise.title}</CardTitle>
                  <exercise.icon className="w-5 h-5 text-blue-500" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{exercise.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{exercise.duration}</span>
                  <div className="flex items-center">
                    {exercise.completed && (
                      <span className="text-green-500 text-sm mr-3">Completed</span>
                    )}
                    <button className="flex items-center text-blue-500 hover:text-blue-600">
                      {exercise.completed ? 'Retry' : 'Start'} 
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProfileSection = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Profile Settings</h2>
        

        
        {/* Goals Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Learning Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {profileSettings.goals.map(goal => (
                <div key={goal.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={goal.id}
                    checked={goal.active}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor={goal.id} className="text-sm text-gray-700">
                    {goal.label}
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Difficulty Settings */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Difficulty Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              {profileSettings.difficulties.map(level => (
                <button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  className={`px-4 py-2 rounded-lg text-sm ${
                    difficulty === level
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Account Settings */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700">{profileSettings.email}</span>
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm">
                  Change Email
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Password</span>
                  </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm">
                  Change Password
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Trash2 className="w-4 h-4 text-red-500" />
                  <span className="text-sm text-red-600">Delete Account</span>
                </div>
                <button className="text-red-600 hover:text-red-700 text-sm">
                  Delete
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Privacy Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Mic className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Recorded Sessions</span>
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm">
                  Manage Recordings
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <BarChart className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Performance Data</span>
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm">
                  Manage Data
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800">Speech Coach</h1>
        </div>
        <nav className="mt-4">
          {sidebarMenus.map((menu) => (
            <button
              key={menu.id}
              onClick={() => setActiveMenu(menu.id)}
              className={`w-full flex items-center px-4 py-3 text-left ${
                activeMenu === menu.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <menu.icon className="w-5 h-5 mr-3" />
              <span>{menu.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {activeMenu === 'home' && renderHomePage()}
          {activeMenu === 'challenges' && renderChallenges()}
          {activeMenu === 'learning' && renderLearningPath()}
          {activeMenu === 'profile' && renderProfileSection()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;