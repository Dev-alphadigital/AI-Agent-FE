'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Calendar from './Calendar';

interface DateRangeSelectorProps {
  dateRange: string;
  onDateRangeChange: (dateRange: string) => void;
}

export default function DateRangeSelector({ dateRange, onDateRangeChange }: DateRangeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parse initial date range from prop (only on mount)
  useEffect(() => {
    if (dateRange) {
      const dates = dateRange.split(' - ');
      if (dates.length === 2) {
        try {
          const start = parseDate(dates[0]);
          const end = parseDate(dates[1]);
          if (start && end) {
            setStartDate(start);
            setEndDate(end);
          }
        } catch (e) {
          // Invalid date format, use default
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const parseDate = (dateStr: string): Date | null => {
    // Parse format like "28 Dec 25"
    const parts = dateStr.trim().split(' ');
    if (parts.length !== 3) return null;
    
    const day = parseInt(parts[0]);
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames.indexOf(parts[1]);
    const year = 2000 + parseInt(parts[2]); // Convert 25 to 2025
    
    if (isNaN(day) || month === -1 || isNaN(year)) return null;
    
    return new Date(year, month, day);
  };

  const formatDateRange = (start: Date | null, end: Date | null): string => {
    if (!start || !end) return dateRange;
    
    const formatDate = (date: Date) => {
      const day = date.getDate();
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear().toString().slice(-2);
      return `${day} ${month} ${year}`;
    };
    
    return `${formatDate(start)} - ${formatDate(end)}`;
  };

  const handleDateRangeSelect = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
    
    if (start && end) {
      const formatted = formatDateRange(start, end);
      onDateRangeChange(formatted);
    }
  };

  const handleCalendarClose = () => {
    setIsOpen(false);
  };

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={containerRef}>
      <button
        className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white rounded-lg hover:bg-[#2a2a2a] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select date range"
      >
        <span className="text-sm font-medium">{dateRange}</span>
        <ChevronDown 
          size={16} 
          className={`text-white transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <>
          {/* Mobile: Full screen overlay */}
          <div className="lg:hidden fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
            <div className="relative z-10 w-full max-w-sm">
              <Calendar
                startDate={startDate}
                endDate={endDate}
                onDateRangeSelect={handleDateRangeSelect}
                onClose={handleCalendarClose}
              />
            </div>
          </div>
          
          {/* Desktop: Popover */}
          <div className="hidden lg:block absolute right-0 mt-2 z-50">
            <Calendar
              startDate={startDate}
              endDate={endDate}
              onDateRangeSelect={handleDateRangeSelect}
              onClose={handleCalendarClose}
            />
          </div>
        </>
      )}
    </div>
  );
}

