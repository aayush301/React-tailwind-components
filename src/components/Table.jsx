import React, { useState } from 'react'

const sort = (arr, key, order) => {
  if (order == true || order == "asc") {
    return [...arr].sort((row1, row2) => (row1[key] < (row2[key]) ? -1 : 1));
  }
  return [...arr].sort((row1, row2) => (row1[key] > (row2[key]) ? -1 : 1))
}

const Table = ({ data, keys }) => {
  const [tableData, setTableData] = useState(data);
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState(true); //true=>asc, false=>desc

  const sortByKey = (key) => {
    if (sortKey === null) {
      setSortKey(key);
      setTableData(sort(tableData, key, sortOrder));
    }
    else if (sortKey === key) {
      setSortOrder(!sortOrder);
      setTableData(sort(tableData, key, !sortOrder));
    }
    else {
      setSortKey(key);
      setSortOrder(true);
      setTableData(sort(tableData, key, true));
    }
  }

  const getArrowClasses = key => {
    if (key !== sortKey) return "opacity-0 group-hover:opacity-60";
    if (!sortOrder) return "rotate-180";
    return "";
  }

  return (
    <>
      <div className='rounded-sm bg-white text-gray-600 w-full max-h-full'>
        <h1 className='px-6 pt-3 text-lg font-bold'>Table</h1>
        <table>
          <thead>
            <tr className='border-b'>
              {keys.map(key => (
                <th key={key} className='group sticky top-0 bg-gray-50 px-6 py-3 whitespace-nowrap'>
                  <span>
                    {key}
                  </span>
                  <span className={`${getArrowClasses(key)} inline-block transition ml-2 cursor-pointer`} onClick={() => sortByKey(key)}>
                    <i className='fa-solid fa-arrow-up'></i>
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableData.map((rowData, i) => (
              <tr key={i} className='border-b hover:bg-gray-50 transition'>
                {keys.map(key => (
                  <td key={key} className='px-5 py-2.5'>{rowData[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table