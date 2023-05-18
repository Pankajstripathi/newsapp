import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import News from './Component/News'
// import LoadingBar from 'react-top-loading-bar'
// import { BrowserRouter , Route, Routes, Router, NavLink } from 'react-router-dom'


 const App = () => {
 const pageSize = 12
  // apikey = process.env.REACT_APP_NEWS_API
 
  const [progress, setProgress] = useState(0)

  
    return (
      <>
        <Navbar/>
       {/* <LoadingBar
        color='#f11946'
        progress={20}
      /> */}
      <News pageSize={pageSize}  country='in' category="sports" />
      {/* <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Navbar/>} />
        <Route path="/" element={<News pageSize={5} country='in' category="General" />} />
        <Route path="sports" element={<News pageSize={5} country='in' category="Sports" />} />
        <Route path="Science" element={<News pageSize={5} country='in' category="Science" />} />
        <Route path="Entertainment" element={<News pageSize={5} country='in' category="Entertainment" />} />
        <Route path="Business" element={<News pageSize={5} country='in' category="Business" />} />
        <Route path="Health" element={<News pageSize={5} country='in' category="Health" />} />
        <Route path="Technology" element={<News pageSize={5} country='in' category="Technology" />} />
       </Routes>
      </BrowserRouter> */}
      </>
    )
  
}

export default App