import React, { useEffect, useState } from 'react'
import TreeItem from './TreeItem'

const TreeView = ({ data,
  defaultExpandedKeys = [],
  defaultSelectedKey = null,
  expandedKeys: expKeys,
  selectedKey: selKey,
}) => {

  const [expandedKeys, setExpandedKeys] = useState(expKeys || defaultExpandedKeys);
  const [selectedKey, setSelectedKey] = useState(selKey || defaultSelectedKey);

  useEffect(() => {
    if (expKeys) setExpandedKeys(expKeys);
  }, [expKeys]);

  useEffect(() => {
    if (selKey) setSelectedKey(selKey);
  }, [selKey]);

  return (
    <>
      <ul className='w-full'>
        {data.map((item) => (
          <TreeItem key={item.key} level={0} treeItem={item} {...{ expandedKeys, setExpandedKeys, selectedKey, setSelectedKey }} />
        ))}
      </ul>
    </>
  )
}

export default TreeView