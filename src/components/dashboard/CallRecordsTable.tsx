'use client';

import React from 'react';
import { Play, Download, Check, X } from 'lucide-react';

interface CallRecord {
  date: string;
  interest: 'interested' | 'not-interested';
}

interface CallRecordsTableProps {
  callType: 'inbound' | 'outbound';
  isMobile?: boolean;
}

// Sample data - replace with actual data from API
const sampleCallRecords: CallRecord[] = [
  { date: '28/12/2025', interest: 'interested' },
  { date: '29/12/2025', interest: 'not-interested' },
  { date: '30/12/2025', interest: 'interested' },
  { date: '31/12/2025', interest: 'interested' },
];

export default function CallRecordsTable({ callType, isMobile = false }: CallRecordsTableProps) {
  const handlePlay = (date: string) => {
    // TODO: Implement play functionality
    console.log('Play recording for:', date);
  };

  const handleDownload = (date: string) => {
    // TODO: Implement download functionality
    console.log('Download recording for:', date);
  };

  const handleFollowUp = (date: string) => {
    // TODO: Implement follow-up functionality
    console.log('Send follow-up for:', date);
  };

  if (isMobile) {
    return (
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left text-white text-sm font-medium py-3 px-2">Date</th>
              <th className="text-left text-white text-sm font-medium py-3 px-2">Actions</th>
              <th className="text-left text-white text-sm font-medium py-3 px-2">Interest</th>
              <th className="text-left text-white text-sm font-medium py-3 px-2">Follow up</th>
            </tr>
          </thead>
          <tbody>
            {sampleCallRecords.map((record, index) => (
              <tr key={index} className="border-b border-gray-800">
                <td className="text-white text-sm py-3 px-2">{record.date}</td>
                <td className="py-3 px-2">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handlePlay(record.date)}
                      className="p-1 hover:opacity-80 transition-opacity"
                      aria-label="Play recording"
                    >
                      <Play size={16} className="text-red-500 fill-red-500" />
                    </button>
                    <button
                      onClick={() => handleDownload(record.date)}
                      className="p-1 hover:opacity-80 transition-opacity"
                      aria-label="Download recording"
                    >
                      <Download size={16} className="text-green-500" />
                    </button>
                  </div>
                </td>
                <td className="py-3 px-2">
                  {record.interest === 'interested' ? (
                    <Check size={18} className="text-green-500" />
                  ) : (
                    <X size={18} className="text-red-500" />
                  )}
                </td>
                <td className="py-3 px-2">
                  <button
                    onClick={() => handleFollowUp(record.date)}
                    className="px-3 py-1.5 bg-[#1a1a1a] text-white text-xs rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors shadow-[0_0_8px_rgba(59,130,246,0.3)]"
                  >
                    Send Follow Up
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left text-white text-base font-medium py-4 px-4">Date</th>
            <th className="text-left text-white text-base font-medium py-4 px-4">Actions</th>
            <th className="text-left text-white text-base font-medium py-4 px-4">Interest</th>
            <th className="text-left text-white text-base font-medium py-4 px-4">Follow up</th>
          </tr>
        </thead>
        <tbody>
          {sampleCallRecords.map((record, index) => (
            <tr key={index} className="border-b border-gray-800 hover:bg-gray-900/30 transition-colors">
              <td className="text-white text-base py-4 px-4">{record.date}</td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handlePlay(record.date)}
                    className="p-2 hover:opacity-80 transition-opacity"
                    aria-label="Play recording"
                  >
                    <Play size={20} className="text-red-500 fill-red-500" />
                  </button>
                  <button
                    onClick={() => handleDownload(record.date)}
                    className="p-2 hover:opacity-80 transition-opacity"
                    aria-label="Download recording"
                  >
                    <Download size={20} className="text-green-500" />
                  </button>
                </div>
              </td>
              <td className="py-4 px-4">
                {record.interest === 'interested' ? (
                  <Check size={20} className="text-green-500" />
                ) : (
                  <X size={20} className="text-red-500" />
                )}
              </td>
              <td className="py-4 px-4">
                <button
                  onClick={() => handleFollowUp(record.date)}
                  className="px-4 py-2 bg-[#1a1a1a] text-white text-sm rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors shadow-[0_0_8px_rgba(59,130,246,0.3)]"
                >
                  Send Follow Up
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

