'use client';

import React from 'react';
import { PhoneIncoming, PhoneOutgoing, BarChart3 } from 'lucide-react';

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
        <div className="relative">
          <div className={`absolute inset-0 rounded-full bg-[#10B981] opacity-20 ${isMobile ? 'w-12 h-12' : ''}`} style={isMobile ? {} : { width: '56px', height: '56px' }} />
          <div className={`relative flex items-center justify-center ${isMobile ? 'w-12 h-12' : ''}`} style={isMobile ? {} : { width: '56px', height: '56px' }}>
            <PhoneIncoming size={isMobile ? 28 : 32} color="#10B981" strokeWidth={2.5} />
          </div>
        </div>
      ),
      iconColor: '#10B981',
    },
    {
      title: 'Outbound Calls',
      value: isMobile ? '87' : '82',
      subtitle: 'Total made',
      icon: (
        <div className="relative">
          <div className={`absolute inset-0 rounded-full bg-[#3B82F6] opacity-20 ${isMobile ? 'w-12 h-12' : ''}`} style={isMobile ? {} : { width: '56px', height: '56px' }} />
          <div className={`relative flex items-center justify-center ${isMobile ? 'w-12 h-12' : ''}`} style={isMobile ? {} : { width: '56px', height: '56px' }}>
            <PhoneOutgoing size={isMobile ? 28 : 32} color="#3B82F6" strokeWidth={2.5} />
          </div>
        </div>
      ),
      iconColor: '#3B82F6',
    },
    {
      title: 'Sales',
      value: '$5200',
      subtitle: 'Converted Leads',
      icon: (
        <BarChart3 size={isMobile ? 28 : 32} color="#F97316" strokeWidth={2.5} />
      ),
      iconColor: '#F97316',
    },
  ];

  return (
    <div className={`grid ${isMobile ? 'grid-cols-3 gap-2' : 'grid-cols-3 gap-4'}`}>
      {kpis.map((kpi, index) => (
        <div
          key={index}
          className={`bg-[#1e293b] rounded-lg flex flex-col relative overflow-hidden ${isMobile ? 'p-3' : 'p-4'}`}
        >
          <div className={`flex items-start justify-between ${isMobile ? 'mb-2' : 'mb-3'}`}>
            <h3 className={`text-white font-medium ${isMobile ? 'text-xs' : 'text-sm'}`}>{kpi.title}</h3>
            <div className={`flex-shrink-0 opacity-90 ${isMobile ? '-mt-0.5 -mr-0.5' : '-mt-1 -mr-1'}`}>
              {kpi.icon}
            </div>
          </div>
          <div className="mt-auto">
            <p className={`text-white font-bold leading-tight ${isMobile ? 'text-lg' : 'text-2xl'}`}>{kpi.value}</p>
            <p className={`text-white mt-1 opacity-70 ${isMobile ? 'text-[10px]' : 'text-xs'}`}>{kpi.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

