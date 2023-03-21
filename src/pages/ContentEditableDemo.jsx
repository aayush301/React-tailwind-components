import React from "react";
import ContentEditable from "../components/ContentEditable";

const ContentEditableDemo = () => {
  return (
    <div>
      <div className="text-center my-8 text-lg">Content Editable</div>

      <ContentEditable
        className="mx-2 sm:mx-8 px-2 py-1.5 w-[300px] sm:w-[400px]"
        placeholder="Write something..."
      />
    </div>
  );
};

export default ContentEditableDemo;
