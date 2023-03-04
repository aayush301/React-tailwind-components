import React, { useCallback, useEffect, useRef } from 'react'

const TreeItem = ({ level, treeItem, expandedKeys, setExpandedKeys, selectedKey, setSelectedKey }) => {

  const hasChildren = treeItem.children && treeItem.children?.length > 0;
  const expanded = expandedKeys.includes(treeItem.key);
  const isSelected = selectedKey === treeItem.key;

  const itemRef = useRef();

  const toggleExpand = useCallback(() => {
    if (!hasChildren) return;
    if (!expanded) setExpandedKeys([...expandedKeys, treeItem.key]);
    else setExpandedKeys(expandedKeys.filter(key => key !== treeItem.key));
  }, [expandedKeys, setExpandedKeys]);

  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === "Enter" || e.key === " ") toggleExpand();
    }
    itemRef.current?.addEventListener("keypress", handleKeyPress);
    return () => itemRef.current?.removeEventListener("keypress", handleKeyPress);
  }, [toggleExpand]);


  const handleListItemClick = () => {
    setSelectedKey(treeItem.key);
    toggleExpand();
  }


  return (
    <>
      <li className='w-full mt-2'>
        <div className='flex'>
          <div style={{ width: `${level * 20}px` }}></div>
          <div tabIndex={0} ref={itemRef} className={`flex grow py-0.5 px-2 cursor-pointer transition hover:bg-gray-200 ${isSelected && "bg-blue-200"} outline-blue-200`} onClick={handleListItemClick}>
            <span className='w-4'>{hasChildren && (<i className={`fa-solid fa-angle-right ${expanded ? "rotate-90" : ""} transition duration-300`}></i>)}</span>
            <span>{treeItem.title}</span>
          </div>
        </div>

        {hasChildren && (
          <ul className={`${expanded ? "h-auto max-h-[500px]" : "max-h-0"} transition-all duration-500 overflow-y-hidden`}>
            {treeItem.children.map(item => (
              <TreeItem key={item.key} level={level + 1} treeItem={item} {...{ expandedKeys, setExpandedKeys, selectedKey, setSelectedKey }} />
            ))}
          </ul>
        )}
      </li>
    </>
  )
}

export default TreeItem