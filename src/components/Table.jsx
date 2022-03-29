import React, { useEffect, useState } from 'react'

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
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (query == "") setTableData(data);
    else setTableData(data.filter(row => Object.values(row).some(x => x.toString().toLowerCase().includes(query.toLowerCase()))));

    if (sortKey) setTableData(prevData => sort(prevData, sortKey, sortOrder));
  }, [query]);


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
      <div className={`relative bg-white text-gray-600 w-full max-h-full ${loading ? " pointer-events-none" : ""}`}>

        {loading && (
          <div className="absolute w-full h-full bg-gray-50/50">
            <div className='absolute font-bold text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading..</div>
          </div>
        )}

        <div className='px-3 py-2 pb-4'>
          <h1 className='text-lg font-bold'>Table Title</h1>
          <p>Additional Description</p>
        </div>

        <div className='flex'>
          <div className='flex grow px-2 py-1.5 space-x-2 border-2 border-transparent bg-gray-100 focus-within:border-indigo-500 transition'>
            <span><i className="fa-solid fa-search text-gray-500"></i></span>
            <input type="text" className='grow bg-inherit focus:outline-none' onChange={e => setQuery(e.target.value)} placeholder='Search the table..' />
          </div>
          <button className='px-3 py-1.5 space-x-2 cursor-pointer text-gray-500 bg-gray-50 hover:bg-gray-200 transition'>
            <span><i className="fa-solid fa-file-export"></i></span>
          </button>
          <button className='px-3 py-1.5 space-x-2 cursor-pointer text-gray-500 bg-gray-50 hover:bg-gray-200 transition'>
            <span><i className="fa-solid fa-download"></i></span>
          </button>
          <button className='px-3 py-1.5 space-x-2 cursor-pointer text-gray-500 bg-gray-50 hover:bg-gray-200 transition'>
            <span><i className="fa-solid fa-trash"></i></span>
          </button>
          <button className='px-3 py-1.5 space-x-2 border-2 border-transparent bg-blue-500 text-white text-sm hover:bg-blue-600 transition'>
            <span><i className="fa-solid fa-plus"></i></span>
            <span>Add New</span>
          </button>
        </div>

        <table className='w-full'>
          <thead>
            <tr className='border-b'>
              {keys.map(key => (
                <th key={key} className='group sticky top-0 bg-gray-200 px-6 py-3 whitespace-nowrap'>
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
            {tableData.length > 0 && tableData.map((rowData, i) => (
              <tr key={i} className='border-b hover:bg-gray-50 transition'>
                {keys.map(key => (
                  <td key={key} className='px-5 py-2.5'>{rowData[key]}</td>
                ))}
              </tr>
            ))}

            {tableData.length == 0 && (
              <tr><td colSpan={keys.length} className='text-center py-2'>No results found</td></tr>
            )}
          </tbody>
        </table>

      </div>
    </>
  )
}

export default Table