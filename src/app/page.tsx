'use client'

import { useState } from 'react'
import { Stethoscope, Paperclip, ArrowRight, Mic, MessageSquare, ChevronDown, Eye } from 'lucide-react'
import SSOPopup from '../components/components-sso-popup'

export default function Home() {
  const [query, setQuery] = useState('')
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f9f5f1] p-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-700">
            Auxilium<span className="text-purple-500">.</span>
          </h1>
          <div className="flex space-x-2">
            <button
              className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
              aria-label="Login"
              onClick={() => setIsLoginOpen(true)}
            >
              Login
            </button>
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
              aria-label="Sign Up"
              onClick={() => setIsSignupOpen(true)}
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Stethoscope className="text-purple-500" aria-hidden="true" />
              <h2 className="text-4xl font-serif text-gray-800">Good afternoon</h2>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="relative">
                <textarea
                  className="w-full h-24 p-2 pr-28 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="How can Auxilium help you today?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Query input"
                />
                <div className="absolute bottom-2 right-2 flex space-x-2">
                  <button
                    className="p-2 text-gray-400 hover:text-purple-500 focus:outline-none"
                    aria-label="Attach file"
                  >
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <button
                    className="p-2 text-gray-400 hover:text-purple-500 focus:outline-none"
                    aria-label="Voice input"
                  >
                    <Mic className="w-5 h-5" />
                  </button>
                  <button
                    className="p-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    aria-label="Send message"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Your recent chats
                <ChevronDown className="w-4 h-4 ml-1" />
              </h3>
              <button className="text-gray-600 hover:underline flex items-center">
                View all
                <Eye className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-4 h-24">
                  {/* Empty box for recent chat */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SSOPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} mode="login" />
      <SSOPopup isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} mode="signup" />
    </div>
  )
}
