"use client";

import { useState } from 'react';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowForm(false);
  };

  const handleNextClick = () => {
    setShowForm(true);
  };

  const renderCalendar = () => {
    const today = new Date();
    const startDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    const calendarDays = [];
    for (let i = 0; i < startDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(today.getFullYear(), today.getMonth(), day);
      calendarDays.push(
        <div
          key={day}
          className={`day ${selectedDate && selectedDate.getDate() === day ? 'bg-blue-500 text-white' : ''} border border-gray-300 flex items-center justify-center cursor-pointer`}
          onClick={() => handleDateClick(date)}
          style={{ width: '14.28%', height: '40px' }}
        >
          {day}
        </div>
      );
    }

    return calendarDays;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Booking Calendar</h1>
      <div className="calendar flex flex-col items-center">
        <div className="days-of-week flex justify-between w-full">
          {daysOfWeek.map((day) => (
            <div key={day} className="day-of-week text-center font-bold" style={{ width: '14.28%' }}>
              {day}
            </div>
          ))}
        </div>
        <div className="calendar-days flex flex-wrap w-full">
          {renderCalendar()}
        </div>
      </div>
      {selectedDate && (
        <div className="mt-4 flex flex-col items-center">
          <p className="text-green-500">Selected Date: {selectedDate.toDateString()}</p>
          <button
            onClick={handleNextClick}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Next
          </button>
        </div>
      )}
      {showForm && (
        <div className="mt-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Booking Form</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                Date
              </label>
              <input
                type="text"
                id="date"
                name="date"
                value={selectedDate.toDateString()}
                readOnly
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Calendar;