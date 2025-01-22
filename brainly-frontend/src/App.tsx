import Dashboard from "./pages/Dashboard"
import { SharePostPage } from "./pages/SharePostPage"
import { SignIn } from "./pages/SignIn"
import { SignUp } from "./pages/SignUp"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} /> 
         <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/share/:shareId" element={<SharePostPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
