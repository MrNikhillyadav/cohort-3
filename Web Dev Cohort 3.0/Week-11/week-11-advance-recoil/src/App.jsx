import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, messageAtom, networkAtom, notificationAtom, totalNotificationsSelector } from './store/atoms/atoms'
import { useMemo } from 'react'

function App() {

  return (
    <RecoilRoot>
        <ManiApp/>
    </RecoilRoot>
  )
}

function ManiApp(){
   const networkCount = useRecoilValue(networkAtom)
   const jobCount = useRecoilValue(jobsAtom)
   const notificationsCount = useRecoilValue(notificationAtom)
   const messageCount = useRecoilState(messageAtom) 
   const totalNotifications = useRecoilValue(totalNotificationsSelector)


  { /* using useMemo */}

  // const totalNotifications = useMemo(() =>{
  //   return networkCount + jobCount + notificationsCount
  // },[networkCount, jobCount, notificationsCount,messageCount])

  return (
    <div>
      <button>Home</button>
      <button>My Network( {networkCount >=100 ? '99+' : networkCount} )</button>
      <button>Jobs( {jobCount} )</button>
      <button>Messages( {messageCount} )</button>
      <button>Notofication( {notificationsCount} )</button>
      <button>Me ({totalNotifications} )</button>
      <NotificationsUpdater/>
      <JobCountUpdater/>
    </div>
  )
}

//useSetRecoilState ( ) : to access only set function
function NotificationsUpdater(){
  const setNotificationCount = useSetRecoilState(notificationAtom)
  return (
      <button onClick={() => setNotificationCount(c => c+1)}>Notification + </button>

  )
}

//useRecoilState ( ) : to access both  state variable and set function
function JobCountUpdater(){
  const [jobCount,setJobCount] = useRecoilState(jobsAtom)
  return (
      <button onClick={() => setJobCount(jobCount + 1)}>Jobs +</button>

  )
}



export default App
