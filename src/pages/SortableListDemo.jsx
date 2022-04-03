import React from 'react'
import SortableList from '../components/SortableList'

const SortableListDemo = () => {
  return (
    <>
      <h1 className="m-8 text-center">Sortable List</h1>
      <div className="ml-16">
        <SortableList list={["one", "two", "three", "four", "five"]} />
      </div>
    </>
  )
}

export default SortableListDemo