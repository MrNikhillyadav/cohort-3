import { useEffect, useState } from 'react'
import '../App.css'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { Sidebar } from '../components/ui/Sidebar'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { useContent } from '../hooks/useContent';
import axios from 'axios'
import { BACKEND_URL } from '../config'


function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {contents, refresh} = useContent();

  useEffect(() => {
    refresh();
  }, [isModalOpen])


  async function shareBrain(){
    const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share/`,
      {
        share : true
      },
      {
        headers:{
          "token": localStorage.getItem('token')
        }}
    )
    const hash = response.data.hash;
    const shareURL = `localhost:5173/share/${hash}`;
    alert(`${shareURL}`)
  }
 
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
                  <Button onClick={shareBrain} variant='secondary' title='Share Brain' size='md' startIcon={<ShareIcon size='md'/>} />
                  <Button onClick={() => setIsModalOpen(true)} variant='primary' title='Add Content' size='md'  startIcon={<PlusIcon size='md'/>}/>
                </div>
              </div>

              {/* cards */}
              <div className=' flex flex-wrap gap-6 p-2 '>
                { contents.map(({title,link,type}) => (
                    <Card 
                      type={type} 
                      title={title} 
                      link={link} 
                    />
                ))}

              </div>
             
      </div>

    </div>
  )
}

export default Dashboard
