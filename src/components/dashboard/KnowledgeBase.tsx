'use client';

import React, { useState } from 'react';

export default function KnowledgeBase() {
  const [content, setContent] = useState('');

  return (
    <div className="bg-[#1e293b] rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-[#1e293b] px-4 py-3">
        <h2 className="text-white text-base font-medium">Knowledge Base</h2>
      </div>

      {/* Content Area */}
      <div className="p-4 relative">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter your knowledge base info here..."
          className="w-full h-48 bg-[#f3f4f6] rounded-lg px-4 py-3 text-gray-800 placeholder:text-gray-500 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        {/* Add Button */}
        <button
          className="absolute bottom-6 right-6 w-9 h-9 bg-[#94a3b8] rounded-md flex items-center justify-center hover:bg-[#64748b] transition-colors shadow-sm"
          onClick={() => {
            // Handle add action
            console.log('Add knowledge base entry');
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3.5V14.5M3.5 9H14.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

