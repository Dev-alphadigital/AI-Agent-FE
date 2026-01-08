'use client';

import React from 'react';

interface KPICardsProps {
  isMobile?: boolean;
}

export default function KPICards({ isMobile = false }: KPICardsProps) {
  const kpis = [
    {
      title: 'Inbound Calls',
      value: '120',
      subtitle: 'Total Received',
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="24" fill="#10B981" fillOpacity="0.2"/>
          <path d="M28 8C17.5066 8 9 16.5066 9 27C9 37.4934 17.5066 46 28 46C38.4934 46 47 37.4934 47 27C47 16.5066 38.4934 8 28 8Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 14L28 22" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 18L28 12L34 18" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 24C20 24 22 26 28 26C34 26 36 24 36 24" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 30C24 30 25 32 28 32C31 32 32 30 32 30" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconColor: '#10B981',
    },
    {
      title: 'Outbound Calls',
      value: isMobile ? '87' : '82',
      subtitle: 'Total made',
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="24" fill="#3B82F6" fillOpacity="0.2"/>
          <path d="M28 8C17.5066 8 9 16.5066 9 27C9 37.4934 17.5066 46 28 46C38.4934 46 47 37.4934 47 27C47 16.5066 38.4934 8 28 8Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 34L28 26" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M34 28L28 34L22 28" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 24C20 24 22 26 28 26C34 26 36 24 36 24" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 30C24 30 25 32 28 32C31 32 32 30 32 30" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconColor: '#3B82F6',
    },
    {
      title: 'Sales',
      value: '$5200',
      subtitle: 'Converted Leads',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="18" width="5" height="10" fill="#F97316" rx="1"/>
          <rect x="13.5" y="14" width="5" height="14" fill="#FBBF24" rx="1"/>
          <rect x="21" y="10" width="5" height="18" fill="#F97316" rx="1"/>
        </svg>
      ),
      iconColor: '#F97316',
    },
  ];

  return (
    <div className={`grid gap-4 ${isMobile ? 'grid-cols-3' : 'grid-cols-3'}`}>
      {kpis.map((kpi, index) => (
        <div
          key={index}
          className="bg-[#1e293b] rounded-lg p-4 flex flex-col relative overflow-hidden"
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-white text-sm font-medium">{kpi.title}</h3>
            <div className="flex-shrink-0 -mt-1 -mr-1 opacity-90">
              {kpi.icon}
            </div>
          </div>
          <div className="mt-auto">
            <p className="text-white text-2xl font-bold leading-tight">{kpi.value}</p>
            <p className="text-white text-xs mt-1.5 opacity-70">{kpi.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

