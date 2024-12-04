import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/Button'
import { Card } from './components/ui/Card'
import { CreateContentModal } from './components/ui/CreateContentModal'
import { Sidebar } from './components/ui/Sidebar'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
 
  return (
    <div className=' flex bg-slate-100  '>

      <CreateContentModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Left-content */}
      <Sidebar/>

      {/* Right-Content */}
        <div className=' w-full h-full min-h-screen flex flex-col p-10'>

              {/* share and add button */}
              <div className='flex items-center mb-8  p-2 justify-between'>
                <div className='text-3xl text-center font-bold'>All Notes</div>
                <div className='flex  gap-4  '>
                  <Button variant='secondary' title='Share Brain' size='md' startIcon={<ShareIcon size='md'/>} />
                  <Button onClick={() => setIsModalOpen(true)} variant='primary' title='Add Content' size='md'  startIcon={<PlusIcon size='md'/>}/>
                </div>
              </div>

              {/* cards */}
              <div className=' flex flex-wrap gap-6 p-2 '>
                <Card type='twitter' title='Productivity tip' link='https://x.com/kirat_tw/status/1633685473821425666'/>
                <Card type='youtube' title="How to build a second brain " link='https://www.youtube.com/embed/-eDkV9yMBF0?si=R_8G_jaZ104CFvGB'/>
              
                
              </div>
             
      </div>

    </div>
  )
}

export default App
