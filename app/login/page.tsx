'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
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
        <div className="w-full max-w-4xl">
          {/* Title */}
          <h1 className="text-4xl lg:text-5xl text-center font-bold mb-12 text-left">
            <span className="text-white">Welcome</span>{" "}
            <span className="text-[#266660]">Back!</span>
          </h1>

          {/* Form */}
          <form>
            {/* Email Field */}
            <div className="mb-5">
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-transparent border border-white/40 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/50 transition-all"
              />
            </div>

            {/* Password Field */}
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 pr-12 bg-transparent border border-white/40 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/50 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right mb-8">
              <Link href="/forgot-password" className="text-sm text-gray-400 hover:text-white transition-colors">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button - Centered */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="px-24 py-3.5 bg-[#266660] hover:bg-[#2d7a73] text-white font-semibold text-lg rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#266660]/50"
              >
                Login
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="mt-10 text-center text-gray-400">
            Don't have an account?{" "}
            <Link href="/" className="text-white hover:text-gray-200 font-medium underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

