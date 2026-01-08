'use client';

import React from 'react';
import { Home, Phone, Users, User, LogOut } from 'lucide-react';

interface SidebarProps {
  onNavigate?: () => void;
}

export default function Sidebar({ onNavigate }: SidebarProps) {
  const menuItems = [
    {
      icon: <Home size={20} className="text-white" />,
      label: 'Home',
      href: '#',
      active: true,
    },
    {
      icon: <Phone size={20} className="text-white" />,
      label: 'Calls Record',
      href: '#',
      active: false,
    },
    {
      icon: <Users size={20} className="text-white" />,
      label: 'Lead Generation',
      href: '#',
      active: false,
    },
    {
      icon: <User size={20} className="text-white" />,
      label: 'Profile',
      href: '#',
      active: false,
    },
  ];

  return (
    <div className="h-full w-64 bg-[#1a1a1a] flex flex-col p-6">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-white mb-8">AI AGENT</h1>

      {/* Menu Items */}
      <nav className="flex-1">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={onNavigate}
            className={`flex items-center gap-3 mb-4 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              item.active
                ? 'bg-gray-700 text-white'
                : 'text-white hover:bg-gray-800'
            }`}
          >
            {item.icon}
            <span className="text-base">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Logout */}
      <div className="mt-auto">
        <a
          href="#"
          onClick={onNavigate}
          className="flex items-center gap-3 text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors cursor-pointer"
        >
          <LogOut size={20} className="text-white" />
          <span className="text-base">Logout</span>
        </a>
      </div>
    </div>
  );
}

