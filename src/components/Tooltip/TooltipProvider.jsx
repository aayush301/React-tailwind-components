import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { getTooltipPoint, getArrowBoxPoint, getClosestAncestor } from "./utils";

const Portal = ({ children }) => {
  return ReactDOM.createPortal(children, document.body);
};

/**
 * @param {number} space - Dist between the tip of tooltip and the element
 * @param children - It is expected to have only 1 child
 * @param {number} delayShow - Tooltip show will be delayed in ms by the amount of value
 * @param {number} delayHide - Tooltip hide will be delayed in ms by the amount of value
 * @param {boolean} closeOnEsc - Pressing escape key will close the tooltip
 * @param {string} scopeSelector - CSS Selector string. All titles within this scope selector will be rendered by tooltip.
 * @param {string} titleAttribute - Attribute for getting the title content for the element
 * @param {string} fontSize - Font size for title
 * @param {Function} renderTooltip - Custom Function for rendering the tooltip
 */
const TooltipProvider = ({
  children,
  position = "bottom",
  space = 5,
  delayShow = 0,
  delayHide = 0,
  noArrow = false,
  noTranslateAnimation = false,
  noOpacityAnimation = false,
  closeOnEsc = false,
  scopeSelector = "",
  titleAttribute = "title",
  arrowLength = 10,
  fontSize = "13px",
  renderTooltip,
}) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [showTimeoutId, setShowTimeoutId] = useState("");
  const [closeTimeoutId, setCloseTimeoutId] = useState("");
  const titleNodeRef = useRef();
  const tooltipRef = useRef();
  const arrowRef = useRef();

  const showTooltip = node => {
    if (closeTimeoutId) {
      window.clearTimeout(closeTimeoutId);
      setCloseTimeoutId("");
    }
    const showTimeoutId = window.setTimeout(() => {
      const title = node.getAttribute(titleAttribute);
      titleNodeRef.current = node;
      setTitle(title);
      setShow(true);
      setShowTimeoutId("");
    }, delayShow);
    setShowTimeoutId(showTimeoutId);
  };

  const closeTooltip = useCallback(() => {
    const closeTimeoutId = window.setTimeout(() => {
      titleNodeRef.current = null;
      setShow(false);
      setCloseTimeoutId("");
    }, delayHide);
    setCloseTimeoutId(closeTimeoutId);

    if (showTimeoutId) {
      window.clearTimeout(showTimeoutId);
      setShowTimeoutId("");
    }
  }, [titleNodeRef, delayHide, showTimeoutId]);

  useEffect(() => {
    if (!show || !closeOnEsc) return;
    const escHandler = e => {
      if (e.key !== "Escape") return;
      closeTooltip();
    };
    document.addEventListener("keydown", escHandler);
    return () => document.removeEventListener("keydown", escHandler);
  }, [show, closeOnEsc, closeTooltip]);

  useEffect(() => {
    if (!show) return;
    const wheelHandler = () => {
      closeTooltip();
    };
    document.addEventListener("wheel", wheelHandler);
    return () => document.removeEventListener("wheel", wheelHandler);
  }, [show, closeTooltip]);

  useEffect(() => {
    if (!show) return;
    const { x, y } = getTooltipPoint(
      titleNodeRef.current,
      tooltipRef.current,
      position,
      space,
      noArrow ? 0 : arrowLength
    );

    const { x: ax, y: ay } = getArrowBoxPoint(
      titleNodeRef.current,
      tooltipRef.current,
      position,
      space,
      noArrow ? 0 : arrowLength
    );

    tooltipRef.current.style.left = `${x}px`;
    tooltipRef.current.style.top = `${y}px`;

    if (arrowRef.current) {
      arrowRef.current.style.left = `${ax}px`;
      arrowRef.current.style.top = `${ay}px`;
    }
  }, [show, noArrow, title, position, space, arrowLength]);

  const onMouseOver = e => {
    const target = e.target;
    const node = getClosestAncestor(target, `${scopeSelector}[${titleAttribute}]`);
    if (!node) {
      if (show || showTimeoutId) closeTooltip();
    } else if (node !== titleNodeRef.current) {
      closeTooltip();
      showTooltip(node);
    } else {
      if (!show) showTooltip(node);
    }
  };

  const getArrowClasses = position => {
    switch (position) {
      case "top":
        return "translate-x-[-50%] border-t-black";
      case "bottom":
        return "translate-x-[-50%] border-b-black";
      case "left":
        return "translate-y-[-50%] border-l-black";
      case "right":
        return "translate-y-[-50%] border-r-black";
      default:
        return "";
    }
  };

  const getTranslateClasses = position => {
    switch (position) {
      case "top":
        return show ? "translate-x-0 translate-y-0" : "translate-x-0 -translate-y-3";
      case "bottom":
        return show ? "translate-x-0 translate-y-0" : "translate-x-0 translate-y-3";
      case "left":
        return show ? "translate-x-0 translate-y-0" : "translate-y-0 -translate-x-3";
      case "right":
        return show ? "translate-x-0 translate-y-0" : "translate-y-0 translate-x-3";
      default:
        return "";
    }
  };

  return (
    <>
      {React.cloneElement(children, {
        ...children.props,
        onMouseOver,
        onMouseLeave: () => setShow(false),
      })}

      <Portal>
        <div>
          {!noArrow && (
            <div
              ref={arrowRef}
              className={`fixed z-[200] border-transparent
                ${show ? "opacity-100" : "opacity-0"}
                ${getArrowClasses(position)}
                ${!noTranslateAnimation && getTranslateClasses(position)}
              `}
              style={{
                borderWidth: ["top", "bottom"].includes(position)
                  ? `${arrowLength}px ${arrowLength / 2}px`
                  : `${arrowLength / 2}px ${arrowLength}px`,
                transition: show
                  ? `transform 200ms ${noTranslateAnimation ? "step-start" : "linear"}, opacity 200ms ${
                      noOpacityAnimation ? "step-start" : "linear"
                    }`
                  : `transform 200ms ${noTranslateAnimation ? "step-end" : "linear"}, opacity 200ms ${
                      noOpacityAnimation ? "step-end" : "linear"
                    }`,
              }}
            />
          )}

          <div
            ref={tooltipRef}
            className={`pointer-events-none fixed z-[200] min-w-min max-w-[100vw] overflow-hidden
              ${show ? "opacity-100" : "opacity-0"}
              ${!noTranslateAnimation && getTranslateClasses(position)}
            `}
            style={{
              transition: show
                ? `transform 200ms ${noTranslateAnimation ? "step-start" : "linear"}, opacity 200ms ${
                    noOpacityAnimation ? "step-start" : "linear"
                  }`
                : `transform 200ms ${noTranslateAnimation ? "step-end" : "linear"}, opacity 200ms ${
                    noOpacityAnimation ? "step-end" : "linear"
                  }`,
            }}
          >
            {renderTooltip?.({ element: titleNodeRef, title }) || (
              <div
                style={{ fontSize }}
                className={`rounded-md bg-gray-900 px-3 py-1 text-center text-gray-300`}
              >
                {title}
              </div>
            )}
          </div>
        </div>
      </Portal>
    </>
  );
};

export default TooltipProvider;
