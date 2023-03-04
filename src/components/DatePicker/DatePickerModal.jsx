import React from "react";
import Modal from "../Modal";
import DatePicker from "./DatePicker";

const DatePickerModal = ({
  isOpen,
  onClose,
  defaultValue,
  value,
  onSelect,
  mode,
  fromYear,
  toYear,
  fromDate,
  toDate,
  hideOutsideDays,
  isHidden,
  isDateUnselectable,
  noSelectionAllowed,
  minSelections,
  maxSelections,
  minRangeLength,
  maxRangeLength,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} showCloseIcon={false} toAnimate={false}>
        <DatePicker
          {...{
            defaultValue,
            value,
            onSelect,
            mode,
            fromYear,
            toYear,
            fromDate,
            toDate,
            hideOutsideDays,
            isHidden,
            isDateUnselectable,
            noSelectionAllowed,
            minSelections,
            maxSelections,
            minRangeLength,
            maxRangeLength,
          }}
          isOpen={isOpen}
          closeModal={onClose}
        />
      </Modal>
    </>
  );
};

export default DatePickerModal;
