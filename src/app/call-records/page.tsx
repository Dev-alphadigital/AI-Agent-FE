'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Sidebar from '@/components/dashboard/Sidebar';
import MobileHeader from '@/components/dashboard/MobileHeader';
import CallRecordsTable from '@/components/dashboard/CallRecordsTable';
import CallTypeTabs from '@/components/dashboard/CallTypeTabs';
import DateRangeSelector from '@/components/dashboard/DateRangeSelector';

export default function CallRecordsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'inbound' | 'outbound'>('inbound');
  const [dateRange, setDateRange] = useState('28 Dec 25 - 10 Jan 26');

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

      {/* Desktop Layout */}
      <div className="hidden lg:flex relative z-10 h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          {/* Header with Profile */}
          <header className="flex justify-end p-6 flex-shrink-0">
            <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/pfp.png"
                alt="Profile"
                width={56}
                height={56}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 flex flex-col px-6 pb-6 min-h-0 overflow-auto">
            {/* Tabs and Date Selector */}
            <div className="flex items-center justify-between mb-6 flex-shrink-0">
              <CallTypeTabs 
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                isMobile={false}
              />
              <DateRangeSelector 
                dateRange={dateRange}
                onDateRangeChange={setDateRange}
              />
            </div>

            {/* Call Records Table */}
            <div className="flex-1 overflow-auto">
              <CallRecordsTable callType={selectedTab} />
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden relative z-10 h-screen flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <MobileHeader 
          isMenuOpen={isMobileMenuOpen}
          onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />

        {/* Mobile Tabs */}
        <div className="px-4 pt-4 flex-shrink-0">
          <CallTypeTabs 
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            isMobile={true}
          />
        </div>

        {/* Date Range Selector */}
        <div className="px-4 pt-4 flex justify-end flex-shrink-0">
          <DateRangeSelector 
            dateRange={dateRange}
            onDateRangeChange={setDateRange}
          />
        </div>

        {/* Mobile Content */}
        <main className="flex-1 flex flex-col px-4 pt-4 pb-6 min-h-0 overflow-auto">
          <CallRecordsTable callType={selectedTab} isMobile={true} />
        </main>

        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 z-50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            {/* Sidebar */}
            <div 
              className="relative w-64 h-full bg-[#1a1a1a] shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Sidebar onNavigate={() => setIsMobileMenuOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

