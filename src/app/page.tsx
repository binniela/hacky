'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Send, LogOut, Mic, Paperclip } from 'lucide-react'
import SSOPopup from '../components/components-sso-popup'

const suggestedPrompts = [
  { text: "Explain Medicare Part A coverage and benefits", icon: '🏥' },
  { text: "How do I enroll in Medicare Part B?", icon: '📝' },
  { text: "What's the difference between Medicare and Medicaid?", icon: '🤔' },
  { text: "Find Medicare-approved doctors near me", icon: '👨‍⚕️' },
]

export default function Home() {
  const [query, setQuery] = useState('')
  const [isSignInOpen, setIsSignInOpen] = useState(true)
  const [user, setUser] = useState<{ name: string } | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isGreetingVisible, setIsGreetingVisible] = useState(false)

  useEffect(() => {
    setIsGreetingVisible(true)
  }, [])

  const handleLogin = (userData: { name: string }) => {
    setUser(userData)
    setIsSignInOpen(false)
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div className="flex h-screen bg-[#f0f0f0] text-gray-900">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}>
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-semibold">Auxilium<span className="text-[#0077C0]">.</span></h1>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-8">
          <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-[#0077C0]">New chat</a>
          <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-[#0077C0]">Settings</a>
          <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-[#0077C0]">Help</a>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex items-center justify-between">
          <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden">
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span>{user.name}</span>
                <button onClick={handleLogout} className="text-sm text-gray-600 hover:text-[#0077C0]">
                  <LogOut className="h-5 w-5" />
                </button>
              </>
            ) : (
              <button onClick={() => setIsSignInOpen(true)} className="text-sm text-gray-600 hover:text-[#0077C0]">
                Sign in
              </button>
            )}
          </div>
        </header>

        {/* Chat area */}
        <main className="flex-1 overflow-y-auto p-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className={`transition-all duration-1000 ease-in-out ${isGreetingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <h2 className="text-4xl font-bold mb-2">
                <span className="text-[#0077C0]">Hello</span>
                {user && <span className="text-gray-700">, {user.name}</span>}
              </h2>
              <p className="text-2xl text-gray-600">How can I help you today?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suggestedPrompts.map((prompt, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <p className="text-gray-700">{prompt.text}</p>
                  <span className="text-2xl mt-2 block">{prompt.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Input area */}
        <div className="bg-white shadow-md p-4">
          <div className="max-w-3xl mx-auto relative">
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-gray-100 text-gray-900 placeholder-gray-500 rounded-lg py-3 px-4 pr-24 focus:outline-none focus:ring-2 focus:ring-[#0077C0]"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
              <button className="text-gray-500 hover:text-[#0077C0]" aria-label="Attach file">
                <Paperclip className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-[#0077C0]" aria-label="Voice input">
                <Mic className="h-5 w-5" />
              </button>
              <button className="text-[#0077C0] hover:text-[#0066A0]" aria-label="Send message">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <SSOPopup isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} mode="signin" onLogin={handleLogin} />
    </div>
  )
}
