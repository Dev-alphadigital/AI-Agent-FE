'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        backgroundImage: 'url(/plainbg.png)',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Robot Image Overlay - Right Side */}
      <div className="absolute right-0 bottom-0 w-[50%] h-[80%] pointer-events-none z-0">
        <Image
          src="/Robot.png"
          alt="AI Robot"
          fill
          className="object-contain object-right-bottom"
          priority
          quality={100}
        />
      </div>

      {/* Form Container - Left Side */}
      <div className="relative z-10 min-h-screen flex items-center justify-start pl-12 lg:pl-20">
        <div className="w-full max-w-xl">
          {/* Glassmorphism Container */}
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            {/* Back Arrow */}
            <Link href="/login" className="inline-flex items-center text-white hover:text-gray-300 transition-colors mb-6">
              <ArrowLeft size={24} />
            </Link>

            {/* Title */}
            <h1 className="text-4xl font-bold mb-4 text-white text-left">
              Forgot password
            </h1>

            {/* Instructions */}
            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
              Please enter your email to reset the password
            </p>

            {/* Email Input Field */}
            <div className="mb-8">
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-transparent border border-white/40 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/50 transition-all"
              />
            </div>

            {/* Reset Password Button */}
            <div className="flex justify-center mb-6">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#266660] hover:bg-[#2d7a73] text-white font-semibold text-lg rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#266660]/50"
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

