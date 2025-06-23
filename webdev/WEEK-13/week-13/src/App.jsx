import screen1 from './components/screen1';


export default function App() {
  return (
    <>
      <div className="flex flex-col text-white justify-start items-center  bg-[#192166] h-screen " >
        <div className='flex flex-col justify-evenly my-10 p-10'>
          <div className=' text-[2.2vw] text-center'><span className='text-green-400'>Webinar</span>.gg</div>
          <div className=' text-[1.8vw] font-bold mt-[10vh] '>Verify Your Age</div>
        </div>
         
          <div className='flex  flex-col gap-8 items-center justify-between'>
            <p className='text-slate-400'>Please confirm your birth year. This data will not be stored</p>
            <input className='bg-none w-[26vw] border text-start bg-slate-500 bg-opacity-30 border-slate-500 px-4 py-2 rounded-md ' type='text ' ></input>
            <button className='px-6 w-full rounded-md font-bold text-sm py-2 text-[#192166] bg-green-400'>Continue</button>

          </div>
      </div>
    </>
  )
}