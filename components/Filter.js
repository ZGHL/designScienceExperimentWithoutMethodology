import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Handle date selection
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    onFilterChange(e.target.value, selectedTime); // Pass the selected date and current time to the parent
  };

  // Handle time selection
  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
    onFilterChange(selectedDate, e.target.value); // Pass the current date and selected time to the parent
  };

  return (
    <div className="filter-container">
      <div>
        <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <label htmlFor="time">Select Time:</label>
        <select id="time" value={selectedTime} onChange={handleTimeChange}>
          <option value="">--Select Time--</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="1:00 PM">1:00 PM</option>
          <option value="2:00 PM">2:00 PM</option>
          <option value="3:00 PM">3:00 PM</option>
          <option value="4:00 PM">4:00 PM</option>
          <option value="5:00 PM">5:00 PM</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;