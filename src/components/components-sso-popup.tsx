import React from 'react'
import { X } from 'lucide-react'

interface SSOPopupProps {
  isOpen: boolean
  onClose: () => void
  mode: 'signin' | 'signup'
  onLogin: (userData: { name: string }) => void
}

const SSOPopup: React.FC<SSOPopupProps> = ({ isOpen, onClose, mode, onLogin }) => {
  if (!isOpen) return null

  const title = mode === 'signin' ? 'Welcome back.' : 'Create your account'
  const alternateActionText = mode === 'signin' ? "No account?" : "Already have an account?"
  const alternateActionLink = mode === 'signin' ? "Create one" : "Sign in"
  //const buttonText = mode === 'signin' ? "Sign in" : "Sign up"

  //const handleSubmit = (e: React.FormEvent) => {
    //e.preventDefault()
    // Simulate login/signup process
   // onLogin({ name: 'User' }) // Replace with actual user data
   // onClose()
  //}

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative shadow-lg">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">{title}</h2>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-full py-3 px-4 hover:bg-gray-50 transition duration-150">
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
              </g>
            </svg>
            <span>Sign in with Google</span>
          </button>
          <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-full py-3 px-4 hover:bg-gray-50 transition duration-150">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Sign in with Facebook</span>
          </button>
          <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-full py-3 px-4 hover:bg-gray-50 transition duration-150">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm5.144 14.5h-10.288c-.472 0-.856-.384-.856-.857v-7.286c0-.473.384-.857.856-.857h10.288c.472 0 .856.384.856.857v7.286c0 .473-.384.857-.856.857zm-5.144-7.858c-1.94 0-3.517 1.576-3.517 3.517s1.577 3.517 3.517 3.517 3.517-1.576 3.517-3.517-1.577-3.517-3.517-3.517zm0 5.517c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z" fill="#000000"/>
            </svg>
            <span>Sign in with Apple</span>
          </button>
          <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-full py-3 px-4 hover:bg-gray-50 transition duration-150">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" fill="#1DA1F2"/>
            </svg>
            <span>Sign in with X</span>
          </button>
          <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-full py-3 px-4 hover:bg-gray-50 transition duration-150">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Sign in with email</span>
          </button>
        </div>
        <p className="text-center mt-6 text-sm">
          <span className="text-gray-600">{alternateActionText}</span>{' '}
          <a href="#" className="text-[#0077C0] hover:underline" onClick={() => onLogin({ name: 'New User' })}>{alternateActionLink}</a>
        </p>
        <p className="text-center mt-4 text-sm">
          <a href="#" className="text-gray-600 hover:underline">Forgot email or trouble signing in? Get help.</a>
        </p>
        <p className="text-center text-xs text-gray-500 mt-8">
          Click &quot;Sign in&quot; to agree to Auxilium&apos;s Terms of Service and acknowledge that Auxilium&apos;s Privacy Policy applies to you.
        </p>
      </div>
    </div>
  )
}

export default SSOPopup
