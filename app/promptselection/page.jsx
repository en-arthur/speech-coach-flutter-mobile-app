'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
// import { generatePrompts } from '../actions/generatePrompts' // Commented out

const PromptSelection = () => {
  const [selectedPrompt, setSelectedPrompt] = useState('')
  const [customPrompt, setCustomPrompt] = useState('')
  const [predefinedPrompts, setPredefinedPrompts] = useState([]) // Initialize as an empty array
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchPrompts = async () => {
      setIsLoading(true)
      // Simulating fetching predefined prompts
      const generatedPrompts = ['Example Prompt 1', 'Example Prompt 2', 'Example Prompt 3']
      setPredefinedPrompts(generatedPrompts)
      setIsLoading(false)
    }

    fetchPrompts()
  }, [])

  const handleNext = () => {
    router.push('/timer')
  }

  return (
    <div className="max-w-2xl mx-auto bg-white px-8 pb-8 rounded-lg shadow-md">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">AI-Generated Prompts</h3>
          {isLoading ? (
            <p className="text-gray-600">Loading prompts...</p>
          ) : (
            <ul className="space-y-2">
              {predefinedPrompts.map((prompt, index) => (
                <li key={index}>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="prompt"
                      value={prompt}
                      checked={selectedPrompt === prompt}
                      onChange={(e) => setSelectedPrompt(e.target.value)}
                      className="form-radio text-blue-600"
                    />
                    <span className="text-gray-700">{prompt}</span>
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">Custom Prompt</h3>
          <textarea
            value={customPrompt}
            onChange={(e) => {
              setCustomPrompt(e.target.value)
              setSelectedPrompt('custom')
            }}
            placeholder="Enter your own prompt here..."
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            rows={3}
          ></textarea>
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={handleNext}
          disabled={!selectedPrompt && !customPrompt}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default PromptSelection
