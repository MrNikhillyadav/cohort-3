import './App.css'
import {Button}  from './components/ui/Button';
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';

function App() {

  return (
    <div className='flex bg-gray-100 h-[30vw] border mx-[20vw] rounded-md  flex-col justify-center gap-4 mt-10 items-center'>
      <h1 className='text-2xl font-semibold text-blue-600  my-4'>Button UI variant</h1>
        <div className='flex items-center gap-2 justify-center'>
          <Button variant='primary'  startIcon={<PlusIcon size='sm'/>} title='Add Plus'  size="sm" />
          <Button  variant='primary' startIcon={<PlusIcon size='md'/>} title='Add Plus'  size="md" />
          <Button variant='primary'  startIcon={<PlusIcon size='lg'/>} title='Add Plus'  size="lg" />
        </div>
        <div className='flex items-center gap-2 justify-center'>
          <Button variant='secondary'  startIcon={<ShareIcon size='sm'/>} title='Share'  size="sm" />
          <Button  variant='secondary' startIcon={<ShareIcon size='md'/>} title='Share'  size="md" />
          <Button variant='secondary'  startIcon={<ShareIcon size='lg'/>} title='Share'  size="lg" />
        </div>
    </div>
  )
}

export default App
