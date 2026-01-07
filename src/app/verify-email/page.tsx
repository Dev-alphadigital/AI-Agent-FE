'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import CodeInput from '@/components/ui/CodeInput';

export default function VerifyEmailPage() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [email] = useState('abcd@gmail.com'); // This would come from context/query params in real app

  const handleCodeComplete = (completeCode: string) => {
    setCode(completeCode);
    setError('');
    // TODO: Validate code with backend
    console.log('Verification code:', completeCode);
  };

  const handleConfirm = () => {
    if (code.length !== 5) {
      setError('Please enter the complete verification code');
      return;
    }
    // TODO: Submit code to backend
    console.log('Submitting code:', code);
  };

  const handleResend = () => {
    // TODO: Resend verification code
    console.log('Resending code to:', email);
  };

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-auto bg-black">
      {/* Dark Background with Starry Sky */}
      <div className="fixed inset-0 z-0 w-screen h-screen">
        <Image
          src="/DarkBG.png"
          alt="Dark background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        {/* Card Container */}
        <div className="w-full max-w-md">
          <div className="bg-[rgba(95,124,138,0.15)] backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-[rgba(97,126,139,0.3)] shadow-2xl">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#617e8b] to-[#fdfdfd] bg-clip-text text-transparent">
              Verify your email
            </h1>

            {/* Instruction Text */}
            <p className="text-sm text-[#9CA3AF] text-center mb-8">
              We've sent a code to{' '}
              <span className="font-medium text-white">{email}</span>
            </p>

            {/* Code Input */}
            <CodeInput
              length={5}
              onComplete={handleCodeComplete}
              error={error}
            />

            {/* Resend Code Link */}
            <div className="text-center mb-6">
              <button
                onClick={handleResend}
                className="text-sm text-[#9CA3AF] underline hover:text-[#D1D5DB] transition-colors"
              >
                Resend code
              </button>
            </div>

            {/* Confirm Button */}
            <Button
              type="button"
              onClick={handleConfirm}
              variant="primary"
              fullWidth
              className="mb-6"
            >
              Confirm
            </Button>

            {/* Re-enter Email Link */}
            <div className="text-center">
              <p className="text-sm text-[#9CA3AF]">
                Didn't get a code?{' '}
                <Link
                  href="/signup"
                  className="text-[#60A5FA] underline hover:text-[#93C5FD] transition-colors"
                >
                  Re-enter email
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

