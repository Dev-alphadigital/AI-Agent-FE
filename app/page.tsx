import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
      <div className="relative z-10 min-h-screen flex items-center justify-start pl-16 lg:pl-32">
        <div className="w-full max-w-[700px]">
          {/* Title */}
          <h1 className="text-5xl lg:text-6xl font-bold mb-10 text-left">
            <span className="text-white">Welcome to</span>{" "}
            <span className="text-[#165646]">AI Agent!</span>
          </h1>

          {/* Form */}
          <form className="space-y-5">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              {/* Left Column */}
              <div className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your Full name here"
                    className="w-full px-4 py-3 bg-transparent border border-[#165646]/50 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#165646] focus:ring-1 focus:ring-[#165646] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your Email here"
                    className="w-full px-4 py-3 bg-transparent border border-[#165646]/50 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#165646] focus:ring-1 focus:ring-[#165646] transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your Phone number"
                    className="w-full px-4 py-3 bg-transparent border border-[#165646]/50 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#165646] focus:ring-1 focus:ring-[#165646] transition-all"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-5">
                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-white mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Enter your Company name here"
                    className="w-full px-4 py-3 bg-transparent border border-[#165646]/50 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#165646] focus:ring-1 focus:ring-[#165646] transition-all"
                  />
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password here"
                    className="w-full px-4 py-3 bg-transparent border border-[#165646]/50 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#165646] focus:ring-1 focus:ring-[#165646] transition-all"
                  />
                </div>

                {/* Repeat Password */}
                <div>
                  <label htmlFor="repeatPassword" className="block text-sm font-medium text-white mb-2">
                    Repeat Password
                  </label>
                  <input
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                    placeholder="Enter your password here"
                    className="w-full px-4 py-3 bg-transparent border border-[#165646]/50 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#165646] focus:ring-1 focus:ring-[#165646] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Create Account Button - Centered */}
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="px-20 py-3.5 bg-[#165646] hover:bg-[#1a6b54] text-white font-semibold text-base rounded-lg transition-all duration-200 shadow-lg shadow-[#165646]/30"
              >
                Create Account
              </button>
            </div>
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-white hover:text-gray-200 font-medium underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
