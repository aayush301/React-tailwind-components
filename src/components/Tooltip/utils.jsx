const getTooltipPoint = (element, tooltip, position, space, arrowLength = 0) => {
  const eleRect = element.getBoundingClientRect();
  const pt = { x: 0, y: 0 };
  switch (position) {
    case "bottom": {
      pt.x = eleRect.left + (element.offsetWidth - tooltip.offsetWidth) / 2;
      pt.y = eleRect.bottom + space + arrowLength;
      if (pt.x + tooltip.offsetWidth >= window.innerWidth) {
        pt.x -= pt.x + tooltip.offsetWidth - window.innerWidth + 5;
      } else if (pt.x < 0) {
        pt.x = 5;
      }
      break;
    }
    case "left": {
      pt.x = eleRect.left - space - arrowLength - tooltip.offsetWidth;
      pt.y = eleRect.top + (element.offsetHeight - tooltip.offsetHeight) / 2;
      if (pt.y + tooltip.offsetHeight >= window.innerHeight) {
        pt.y -= pt.y + tooltip.offsetHeight - window.innerHeight + 5;
      } else if (pt.y < 0) {
        pt.y = 5;
      }
      break;
    }
    case "right": {
      pt.x = eleRect.right + (space + arrowLength);
      pt.y = eleRect.top + (element.offsetHeight - tooltip.offsetHeight) / 2;
      if (pt.y + tooltip.offsetHeight >= window.innerHeight) {
        pt.y -= pt.y + tooltip.offsetHeight - window.innerHeight + 5;
      } else if (pt.y < 0) {
        pt.y = 5;
      }
      break;
    }
    case "top": {
      pt.x = eleRect.left + (element.offsetWidth - tooltip.offsetWidth) / 2;
      pt.y = eleRect.top - space - arrowLength - tooltip.offsetHeight;
      if (pt.x + tooltip.offsetWidth >= window.innerWidth) {
        pt.x -= pt.x + tooltip.offsetWidth - window.innerWidth + 5;
      } else if (pt.x < 0) {
        pt.x = 5;
      }
      break;
    }
    default: {
      break;
    }
  }
  return pt;
};

const getArrowBoxPoint = (element, tooltip, position, space, arrowLength = 0) => {
  const eleRect = element.getBoundingClientRect();
  const pt = { x: 0, y: 0 };
  switch (position) {
    case "bottom": {
      pt.x = eleRect.left + element.offsetWidth / 2;
      pt.y = eleRect.bottom + space - arrowLength;
      break;
    }
    case "left": {
      pt.x = eleRect.left - space - arrowLength;
      pt.y = eleRect.top + element.offsetHeight / 2;
      break;
    }
    case "right": {
      pt.x = eleRect.right + space - arrowLength;
      pt.y = eleRect.top + element.offsetHeight / 2;
      break;
    }
    case "top": {
      pt.x = eleRect.left + element.offsetWidth / 2;
      pt.y = eleRect.top - space - arrowLength;
      break;
    }
    default: {
      break;
    }
  }
  return pt;
};

const getClosestAncestor = (element, selectorString) => {
  if (!document.documentElement.contains(element)) return null;
  do {
    if (element.matches(selectorString)) return element;
    element = element.parentElement;
  } while (element !== null);
  return null;
};

export { getTooltipPoint, getArrowBoxPoint, getClosestAncestor };
