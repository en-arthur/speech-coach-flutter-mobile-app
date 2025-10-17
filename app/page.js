'use client'
import React, { useState } from 'react';
import { ChevronRight, Check, Play, Mic, Brain, Target, Star } from 'lucide-react';
import Link from 'next/link'; // Import Link from next/router
import { useRouter } from 'next/router';

const LandingPage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const handleFreeTrialClick = () => {
    router.push('/onboarding'); // Navigate to onboarding page
  };


  const features = [
    {
      icon: <Brain className="w-6 h-6 text-indigo-600" />,
      title: "AI-Powered Analysis",
      description: "Get real-time feedback on your speech patterns, tone, and delivery using advanced AI technology"
    },
    {
      icon: <Mic className="w-6 h-6 text-indigo-600" />,
      title: "Filler Word Detection",
      description: "Eliminate um's, uh's, and other filler words with intelligent speech recognition"
    },
    {
      icon: <Target className="w-6 h-6 text-indigo-600" />,
      title: "Personalized Coaching",
      description: "Receive tailored exercises and recommendations based on your unique speaking style"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Public Speaking Coach",
      content: "This app has transformed how I train my clients. The AI feedback is incredibly accurate and helpful.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Sales Executive",
      content: "My presentation skills improved dramatically within weeks. The real-time feedback is game-changing.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Speak with Confidence,<br />
            Powered by AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your communication skills with personalized AI coaching that helps you speak clearly, confidently, and effectively.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link href="/onboarding" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            
          </div>
          <div className="relative mx-auto max-w-5xl">
            <img
              src="/api/placeholder/800/450"
              alt="App Interface Preview"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Features for Better Communication
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive analysis and feedback to help you become a more effective communicator.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <div className="flex justify-center items-center space-x-4 mb-8">
              <button
                className={`px-4 py-2 rounded-md ${
                  selectedPlan === 'monthly' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-600'
                }`}
                onClick={() => setSelectedPlan('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-md ${
                  selectedPlan === 'annual' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-600'
                }`}
                onClick={() => setSelectedPlan('annual')}
              >
                Annual
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Basic</h3>
              <p className="text-4xl font-bold mb-4">
                {selectedPlan === 'monthly' ? '$9' : '$90'}
                <span className="text-base font-normal text-gray-500">
                  /{selectedPlan === 'monthly' ? 'mo' : 'yr'}
                </span>
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Basic speech analysis
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  5 practice sessions/month
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Email support
                </li>
              </ul>
              <button className="w-full px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-indigo-600 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 rounded-bl-lg text-sm">
                Popular
              </div>
              <h3 className="text-xl font-bold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-4">
                {selectedPlan === 'monthly' ? '$29' : '$290'}
                <span className="text-base font-normal text-gray-500">
                  /{selectedPlan === 'monthly' ? 'mo' : 'yr'}
                </span>
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Advanced AI analysis
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Unlimited practice sessions
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Priority support
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Custom exercises
                </li>
              </ul>
              <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Enterprise</h3>
              <p className="text-4xl font-bold mb-4">Custom</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Everything in Pro
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Custom integrations
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Dedicated support
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Team analytics
                </li>
              </ul>
              <button className="w-full px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                How accurate is the AI analysis?
              </h3>
              <p className="text-gray-600">
                Our AI model has been trained on millions of speech samples and achieves over 95% accuracy in detecting speech patterns, filler words, and delivery characteristics.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Can I use it offline?
              </h3>
              <p className="text-gray-600">
                While an internet connection is required for real-time AI analysis, you can download practice exercises and review previous sessions offline.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                What languages are supported?
              </h3>
              <p className="text-gray-600">
                Currently, we support English (US, UK, AU), Spanish, and French, with more languages coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

    
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; 2024 AI Communication Coach. All rights reserved.</p>
        </div>
      </div>
    </footer>

   
  </div>
);
};

export default LandingPage;