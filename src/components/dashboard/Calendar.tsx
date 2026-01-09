'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
  startDate: Date | null;
  endDate: Date | null;
  onDateRangeSelect: (start: Date | null, end: Date | null) => void;
  onClose: () => void;
}

export default function Calendar({ startDate, endDate, onDateRangeSelect, onClose }: CalendarProps) {
  // Initialize to start date if available, otherwise current month
  const initialMonth = startDate 
    ? new Date(startDate.getFullYear(), startDate.getMonth(), 1)
    : new Date();
  const [currentMonth, setCurrentMonth] = useState(initialMonth);
  const [selectingStart, setSelectingStart] = useState(!startDate);

  // Update month view when startDate changes
  useEffect(() => {
    if (startDate && !endDate) {
      setCurrentMonth(new Date(startDate.getFullYear(), startDate.getMonth(), 1));
    }
  }, [startDate, endDate]);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const normalizeDate = (date: Date): Date => {
    // Return date with time set to 00:00:00 for proper comparison
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  };

  const isSameDay = (date1: Date | null, date2: Date | null) => {
    if (!date1 || !date2) return false;
    const d1 = normalizeDate(date1);
    const d2 = normalizeDate(date2);
    return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear()
    );
  };

  const isInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    const normalizedDate = normalizeDate(date);
    const normalizedStart = normalizeDate(startDate);
    const normalizedEnd = normalizeDate(endDate);
    return normalizedDate >= normalizedStart && normalizedDate <= normalizedEnd;
  };

  // Don't disable dates when selecting end date - allow any date selection
  const shouldDisableDate = (date: Date) => {
    // Only disable if we're in the past (optional - you can remove this)
    const today = normalizeDate(new Date());
    return false; // Allow all dates for now
  };

  const handleDateClick = (day: number) => {
    const selectedDate = normalizeDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
    
    if (selectingStart || !startDate) {
      // Selecting start date
      onDateRangeSelect(selectedDate, null);
      setSelectingStart(false);
    } else {
      // Selecting end date
      const normalizedStart = startDate ? normalizeDate(startDate) : null;
      if (normalizedStart && selectedDate < normalizedStart) {
        // If selected date is before start, swap them
        onDateRangeSelect(selectedDate, startDate);
        setSelectingStart(true);
      } else {
        // Set as end date
        onDateRangeSelect(startDate, selectedDate);
        setSelectingStart(true);
      }
    }
  };

  const handleApply = () => {
    if (startDate && endDate) {
      onClose();
    }
  };

  const handleClear = () => {
    onDateRangeSelect(null, null);
    setSelectingStart(true);
  };

  const formatDateRange = () => {
    if (!startDate) return 'Select start date';
    if (!endDate) return 'Select end date';
    
    const formatDate = (date: Date) => {
      const day = date.getDate();
      const month = date.toLocaleDateString('en-US', { month: 'short' });
      const year = date.getFullYear().toString().slice(-2);
      return `${day} ${month} ${year}`;
    };
    
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
  const days = [];

  // Empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null);
  }

  // Days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg shadow-xl p-4 w-full max-w-[320px] lg:min-w-[300px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={goToPreviousMonth}
          className="p-1 hover:bg-gray-700 rounded transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft size={20} className="text-white" />
        </button>
        <h3 className="text-white font-semibold text-base">
          {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        <button
          onClick={goToNextMonth}
          className="p-1 hover:bg-gray-700 rounded transition-colors"
          aria-label="Next month"
        >
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>

      {/* Week day headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-xs text-gray-400 font-medium py-1">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          if (day === null) {
            return <div key={index} className="aspect-square" />;
          }

          const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
          const isSelectedStart = startDate && isSameDay(date, startDate);
          const isSelectedEnd = endDate && isSameDay(date, endDate);
          const inRange = isInRange(date);
          const isDisabled = shouldDisableDate(date);
          const isToday = isSameDay(date, new Date());

          return (
            <button
              key={index}
              onClick={() => handleDateClick(day)}
              className={`
                aspect-square flex items-center justify-center text-sm rounded transition-all
                ${isSelectedStart || isSelectedEnd
                  ? 'bg-[#475569] text-white font-semibold'
                  : inRange
                  ? 'bg-[#475569]/30 text-white'
                  : isDisabled
                  ? 'text-gray-500 cursor-not-allowed'
                  : 'text-white hover:bg-gray-700'
                }
                ${isToday && !isSelectedStart && !isSelectedEnd ? 'ring-1 ring-gray-500' : ''}
              `}
              disabled={isDisabled}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Selected range display */}
      <div className="mt-4 pt-4 border-t border-gray-700">
        <div className="text-sm text-gray-400 mb-2">Selected Range:</div>
        <div className="text-white font-medium text-sm mb-4">{formatDateRange()}</div>
        
        {/* Action buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleClear}
            className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm font-medium"
          >
            Clear
          </button>
          <button
            onClick={handleApply}
            disabled={!startDate || !endDate}
            className="flex-1 px-4 py-2 bg-[#475569] text-white rounded-lg hover:bg-[#64748b] disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors text-sm font-medium"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

