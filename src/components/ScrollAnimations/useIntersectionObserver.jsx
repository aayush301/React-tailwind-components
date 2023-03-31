import { useEffect, useState } from "react";

/**
 * ARGUMENTS DESC:
 *
 * elementRef:
 *  - reference of target element whose visibility has to be observed.
 *
 * callback:
 *  - called when element enters into /leaves from screen from top or bottom.
 *
 * rootRef:
 *  - Reference of element that is used as viewport for checking visibility of the target.
 *  - Must be ancestor of the target.
 *  - Defaults to browser viewport if not specified or null.
 *
 * rootMargin:
 *  - Margin around the root.
 *  - Can have values similar to CSS margin property (E.G., "10px 20px 10px 10px" (top, right, bottom, left)).
 *  - The values can be percentages.
 *  - This set of values serves to grow or shrink each side of root element's bounding box before computing intersections.
 *  - Defaults to all 0s
 *
 * threshold:
 *  - Either a single number or an array of numbers.
 *  - Indicate at what percentage of the target's visibility the observer's callback should be executed.
 *  - Example:
 *      - If you only want to detect when visibility passes 50% mark, you can use value of 0.5
 *      - If you want the callback to run every time visibility passes another 25%, you would specify the array [0,0.25,0.5,0.75,1]
 *      - A value of 1 means that when 100% of target is visible within the element specified by root option, the callback is invoked.
 *  - Default is 0. This means as soon as even 1 pixel is visible, the callback will be run.
 *
 * Source of doc: MDN Web Docs
 */
const useIntersectionObserver = (
  elementRef,
  { callback = () => {}, rootRef = null, rootMargin = "0px", threshold = 0, freezeOnceVisible = false } = {}
) => {
  const [entry, setEntry] = useState({ isVisible: false });
  const frozen = freezeOnceVisible && entry?.isIntersecting;

  const handleIntersect = ([entry]) => {
    setEntry({ isVisible: entry.isIntersecting });
    console.log(entry);
    callback(entry);
  };

  useEffect(() => {
    const element = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport || !element || frozen) return;

    const observerParams = { root: rootRef?.current, rootMargin, threshold };
    const observer = new IntersectionObserver(handleIntersect, observerParams);
    observer.observe(element);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, rootRef, rootMargin, JSON.stringify(threshold), frozen]);

  return entry;
};

export default useIntersectionObserver;
