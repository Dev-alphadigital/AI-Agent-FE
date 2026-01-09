'use client';

import React from 'react';

interface CallTypeTabsProps {
  selectedTab: 'inbound' | 'outbound';
  onTabChange: (tab: 'inbound' | 'outbound') => void;
  isMobile?: boolean;
}

export default function CallTypeTabs({ selectedTab, onTabChange, isMobile = false }: CallTypeTabsProps) {
  if (isMobile) {
    return (
      <div className="flex gap-2 w-full">
        {/* Inbound Calls Tab */}
        <button
          onClick={() => onTabChange('inbound')}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all ${
            selectedTab === 'inbound'
              ? 'bg-[#1e293b]'
              : 'bg-black'
          }`}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <circle cx="14" cy="14" r="12" fill="#10B981"/>
            <path d="M10 12L14 8L18 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 8V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-white font-medium text-sm whitespace-nowrap">Inbound Calls</span>
        </button>

        {/* Outbound Calls Tab */}
        <button
          onClick={() => onTabChange('outbound')}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all ${
            selectedTab === 'outbound'
              ? 'bg-[#1e293b]'
              : 'bg-black'
          }`}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <circle cx="14" cy="14" r="12" fill="#3B82F6"/>
            <path d="M10 16L14 20L18 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 20V8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-white font-medium text-sm whitespace-nowrap">Outbound Calls</span>
        </button>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="flex gap-2">
      {/* Inbound Calls Tab */}
      <button
        onClick={() => onTabChange('inbound')}
        className={`flex items-center gap-3 px-5 py-3 rounded-lg transition-all ${
          selectedTab === 'inbound'
            ? 'bg-[#475569] text-white'
            : 'bg-black text-white hover:bg-gray-900'
        }`}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
          <circle cx="14" cy="14" r="12" fill="#10B981"/>
          <path d="M10 12L14 8L18 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 8V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className={`text-white text-base whitespace-nowrap ${selectedTab === 'inbound' ? 'font-bold' : 'font-medium'}`}>Inbound Calls</span>
      </button>

      {/* Outbound Calls Tab */}
      <button
        onClick={() => onTabChange('outbound')}
        className={`flex items-center gap-3 px-5 py-3 rounded-lg transition-all ${
          selectedTab === 'outbound'
            ? 'bg-[#475569] text-white'
            : 'bg-black text-white hover:bg-gray-900'
        }`}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
          <circle cx="14" cy="14" r="12" fill="#3B82F6"/>
          <path d="M10 16L14 20L18 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 20V8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className={`text-white text-base whitespace-nowrap ${selectedTab === 'outbound' ? 'font-bold' : 'font-medium'}`}>Outbound Calls</span>
      </button>
    </div>
  );
}

