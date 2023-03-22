import React, { useEffect, useRef } from "react";

const formatSize = size => {
  return typeof size === "string" ? size : `${size}px`;
};

const Resizable = ({
  children,
  className = "",
  style = {},
  defaultSize: { defaultWidth = "fit-content", defaultHeight = "fit-content" } = {},
  minWidth,
  maxWidth,
}) => {
  const elementRef = useRef(null);
  const resizerRef = useRef(null);

  useEffect(() => {
    elementRef.current.style.width = formatSize(defaultWidth);
    elementRef.current.style.height = formatSize(defaultHeight);
  }, [defaultWidth, defaultHeight]);

  useEffect(() => {
    const resizerElement = resizerRef.current;
    let prevXRight;

    const onPointerMove = e => {
      const dx = e.clientX - prevXRight;
      const newWidth = elementRef.current.offsetWidth + dx;
      elementRef.current.style.width = formatSize(newWidth);
      prevXRight = e.clientX;
    };

    const onPointerUp = () => {
      document.removeEventListener("pointermove", onPointerMove);
    };

    const onPointerDown = e => {
      prevXRight = e.clientX;
      document.addEventListener("pointermove", onPointerMove);
      document.addEventListener("pointerup", onPointerUp);
    };

    resizerElement.addEventListener("pointerdown", onPointerDown);
    return () => {
      resizerElement.removeEventListener("pointerdown", onPointerDown);
    };
  }, [minWidth, maxWidth]);

  return (
    <div ref={elementRef} className={`relative ${className}`} style={{ minWidth, maxWidth, ...style }}>
      {children}
      <div
        className="absolute top-1/2 -translate-y-1/2 -right-5 w-2 h-8 rounded-full bg-gray-400 hover:bg-gray-500 active:bg-gray-600 cursor-e-resize"
        ref={resizerRef}
      />
    </div>
  );
};

export default Resizable;
