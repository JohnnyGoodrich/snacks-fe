import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {




const [searchBarItem, setSearchBarItem] = useState('')
const [isSearch, setIsSearch] = useState(false)


// Event handler for setting the search bar input to an event and saving that event to state.
const handleItemChange = (e) => 
{
  const newSearchItem = e.target.value
  setSearchBarItem(newSearchItem)
}

// Function to change state and reset state to false after click search by name.
const onClick = () => 
{
  setIsSearch(current => !current)
  if (setIsSearch) 
  {
    setTimeout(function() 
    {
      setIsSearch(current => !current)
    }, 1);
  } 
  else 
  {
  }
}


  return (
   
      <div className="searchBar">
          <input type="text" id="myInput" value={searchBarItem} onChange={handleItemChange} placeholder='Search..'/>
            <Link to={`/drinks-details/${searchBarItem}`}> 
              <button onClick={onClick} className='searchName' > by name of meal </button>
            </Link>
      </div>
  )
}

export default Header