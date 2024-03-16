import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className='container flex mx-auto justify-between'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>


    </>
  )
}

export default App
