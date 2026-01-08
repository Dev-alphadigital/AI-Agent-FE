'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Sidebar from '@/components/dashboard/Sidebar';
import KPICards from '@/components/dashboard/KPICards';
import KnowledgeBase from '@/components/dashboard/KnowledgeBase';
import MobileHeader from '@/components/dashboard/MobileHeader';
import MobileTabs from '@/components/dashboard/MobileTabs';

export default function DashboardPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'inbound' | 'outbound'>('inbound');

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
        <div className="flex-1 flex flex-col h-full">
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
          <main className="flex-1 flex flex-col px-6 pb-6 min-h-0 overflow-hidden">
            <div className="mb-6 flex-shrink-0">
              <KPICards />
            </div>
            <div className="flex-1 flex flex-col justify-end min-h-0">
              <KnowledgeBase />
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
          <MobileTabs 
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
          />
        </div>

        {/* Mobile Content */}
        <main className="flex-1 flex flex-col px-4 pt-4 pb-6 min-h-0 overflow-hidden">
          <div className="mb-4 flex-shrink-0">
            <KPICards isMobile={true} />
          </div>
          <div className="flex-1 flex flex-col justify-end min-h-0">
            <KnowledgeBase />
          </div>
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

