'use client';

import React from 'react';
import Image from 'next/image';

interface MobileHeaderProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export default function MobileHeader({ isMenuOpen, onMenuToggle }: MobileHeaderProps) {
  return (
    <header className="flex items-center justify-between p-4">
      {/* Hamburger Menu */}
      <button
        onClick={onMenuToggle}
        className="text-white p-2"
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21M3 6H21M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Profile Picture */}
      <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
        <Image
          src="/pfp.png"
          alt="Profile"
          width={40}
          height={40}
          className="object-cover w-full h-full rounded-full"
        />
      </div>
    </header>
  );
}

