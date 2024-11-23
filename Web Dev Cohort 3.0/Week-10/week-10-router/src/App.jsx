import { useEffect } from "react"
import { BrowserRouter, Routes,Route, Link, useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
function App() {

  return (
    <BrowserRouter>
      <Header/>
          <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/blog" element={<Blog/>} /> 
            <Route path="/contact" element={<Contact/>} /> 
            <Route path="/try-out" element={<TryOut/>} /> 
            <Route path="*" element={<NotFound/>} /> 
          </Routes>
          <Footer/>
    </BrowserRouter>
  )
}



function NotFound(){
  return (
    <div> 404 not found</div>
  )
}

function Home(){
  return (
    <div>Home</div>
  )
}


function Header(){
  return( 
    <div style={{display:"flex", textDecoration:'none'}}>
 
        <Link to={'/'}>Home |</Link>
        <Link to={'/blog'}>Blog |</Link>
        <Link to={'/try-out'}>Try Out |</Link>
        <Link to={'/contact'}>contact</Link>
    </div>
  )
}
 
function Blog(){
  const navigate = useNavigate()
  
  useEffect(()=>{
    const clock = setInterval(()=>{
      navigate('/')
    },1000)
    
    console.log('clock stop')
    return () => clearInterval(clock)
  })
  return (
    <div>Blog</div>
  )
}

function TryOut(){
  return (
    <div>TryOut</div>
  )
}

function Contact(){
  return (
    <div>Contact</div>
  )
}

function Footer(){
  return (
    <div>
      Footer
    </div>
  )
}



export default App
