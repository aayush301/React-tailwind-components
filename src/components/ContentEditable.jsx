import React from "react";

const ContentEditable = ({ value = "", onChange = () => {}, onFocus, placeholder = "", className = "" }) => {
  return (
    <div
      contentEditable
      suppressContentEditableWarning
      placeholder={placeholder}
      onFocus={() => onFocus?.()}
      dangerouslySetInnerHTML={{ __html: value }}
      onBlur={onChange}
      className={`whitespace-pre border-b border-b-gray-400 bg-gray-50 px-1 py-1 outline-none transition before:cursor-text empty:before:font-normal empty:before:text-gray-500 empty:before:content-[attr(placeholder)] focus:border-b-2 focus:border-b-violet-500 ${className} `}
    />
  );
};

export default ContentEditable;
