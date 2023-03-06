const isVisibleXY = (element, minPercentX = 50, minPercentY = 50) => {
  if (!element) return false;
  const elRect = element.getBoundingClientRect();
  if (elRect.bottom < 0) return false;
  if (elRect.top > document.documentElement.clientHeight) return false;

  let parent = element.parentNode;
  do {
    const parentRect = parent.getBoundingClientRect();
    const visibleX = Math.min(elRect.right, parentRect.right) - Math.max(elRect.left, parentRect.left);
    const visibleY = Math.min(elRect.bottom, parentRect.bottom) - Math.max(elRect.top, parentRect.top);
    const visiblePercentageX = (visibleX / elRect.width) * 100;
    const visiblePercentageY = (visibleY / elRect.height) * 100;

    if (visiblePercentageX < minPercentX || visiblePercentageY < minPercentY) return false;
    parent = parent.parentNode;
  } while (parent !== document.body);

  return true;
};

export default isVisibleXY;
