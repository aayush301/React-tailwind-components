import React, { useState } from 'react'
import Drawer from '../components/Drawer'

const DrawerDemo = () => {

  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isTopDrawerOpen, setIsTopDrawerOpen] = useState(false);
  const [isBottomDrawerOpen, setIsBottomDrawerOpen] = useState(false);

  return (
    <>
      <h1 className="m-8 text-center">Drawer</h1>
      <div className="ml-4">
        <button className='py-2 px-3 transition bg-emerald-500 hover:bg-emerald-600 text-white ml-8' onClick={() => setIsRightDrawerOpen(true)}>Open Drawer to right</button>
        <button className='py-2 px-3 transition bg-emerald-500 hover:bg-emerald-600 text-white ml-8' onClick={() => setIsLeftDrawerOpen(true)}>Open Drawer to left</button>
        <button className='py-2 px-3 transition bg-emerald-500 hover:bg-emerald-600 text-white ml-8' onClick={() => setIsTopDrawerOpen(true)}>Open Drawer to top</button>
        <button className='py-2 px-3 transition bg-emerald-500 hover:bg-emerald-600 text-white ml-8' onClick={() => setIsBottomDrawerOpen(true)}>Open Drawer to bottom</button>

        <Drawer title="Sample drawer" placement='right' isOpen={isRightDrawerOpen} onClose={() => setIsRightDrawerOpen(false)}>
          <div className='px-4 py-4'>Some dummy content</div>
        </Drawer>

        <Drawer title="Sample drawer" placement='left' isOpen={isLeftDrawerOpen} onClose={() => setIsLeftDrawerOpen(false)}>
          <div className='px-4 py-4'>Some dummy content</div>
        </Drawer>

        <Drawer title="Sample drawer" placement='top' isOpen={isTopDrawerOpen} onClose={() => setIsTopDrawerOpen(false)}>
          <div className='px-4 py-4'>Some dummy content</div>
        </Drawer>

        <Drawer title="Sample drawer" placement='bottom' isOpen={isBottomDrawerOpen} onClose={() => setIsBottomDrawerOpen(false)}>
          <div className='px-4 py-4'>Some dummy content</div>
        </Drawer>
      </div>
    </>
  )
}

export default DrawerDemo