import React, { useState } from "react";
import DatePickerModal from "../components/DatePicker";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const DatePickerDemo = () => {
  const [datePickerModal, setDatePickerModal] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <>
      <h1 className="m-8 text-center">Date Picker</h1>
      <button
        onClick={() => setDatePickerModal(true)}
        className="m-8 rounded-md bg-gray-200 px-3 py-1 font-medium text-gray-800 transition hover:bg-gray-300"
      >
        <span>
          {days[date.getDay()]}, {date.getDate()} {months[date.getMonth()]}
          <i className="fa-solid fa-angle-down ml-1 text-xs"></i>
        </span>
      </button>

      <DatePickerModal
        value={date}
        isOpen={datePickerModal}
        onClose={() => setDatePickerModal(false)}
        onSelect={date => setDate(date)}
      />
    </>
  );
};

export default DatePickerDemo;
