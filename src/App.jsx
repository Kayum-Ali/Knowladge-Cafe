import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark =( blog) => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark)
  }

  const handleMarkAsRead = (time,id) =>{
   setReadingTime(readingTime + time)
  //  console.log('jhds',id)
  const remainingBoomark = bookmark.filter(bookmark => bookmark.id !== id)
  setBookmark(remainingBoomark)
  }

  return (
    <>
      <Header></Header>
      
      <div className='container flex mx-auto justify-between '>
        
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>

        <Bookmarks bookmarks={bookmark} readingTime={readingTime}></Bookmarks>
      </div>


    </>
  )
}

export default App
