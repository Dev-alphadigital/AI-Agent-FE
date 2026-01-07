'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Input from '@/components/ui/Input';
import PasswordInput from '@/components/ui/PasswordInput';
import Button from '@/components/ui/Button';
import SocialLogin from '@/components/auth/SocialLogin';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
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
        {/* Content */}
        <div className="w-full max-w-lg">
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-10 text-center leading-tight bg-gradient-to-r from-[#5f7c8a] to-[#192125] bg-clip-text text-transparent">
            Welcome to AI Agent!
          </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full">
          <Input
            label="Full Name"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />

          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <PasswordInput
            label="Password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          <PasswordInput
            label="Repeat Password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />

          <div className="mt-12">
            <Button type="submit" variant="primary" fullWidth>
              Sign Up
            </Button>
          </div>
        </form>

        {/* Login Link */}
        <div className="mt-5 text-center">
          <p className="text-sm text-white">
            Already have an account?{' '}
            <Link
              href="/login"
              className="font-semibold text-[#60A5FA] hover:text-[#93C5FD] hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>

        {/* Social Login */}
        <div className="mt-6 flex justify-center">
          <SocialLogin />
        </div>
      </div>
      </div>
    </div>
  );
}
