'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Phone, Users, User, LogOut, Sparkles } from 'lucide-react';

interface SidebarProps {
  onNavigate?: () => void;
}

export default function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname();
  
  const menuItems = [
    {
      icon: <Home size={20} className="text-white" />,
      label: 'Home',
      href: '/dashboard',
      active: pathname === '/dashboard',
    },
    {
      icon: <Phone size={20} className="text-white" />,
      label: 'Calls Record',
      href: '/call-records',
      active: pathname === '/call-records',
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
    {
      icon: <Sparkles size={20} className="text-white" />,
      label: 'Assistants',
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
          <Link
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
          </Link>
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

