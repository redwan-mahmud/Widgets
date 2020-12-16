import React, { useState } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import NavBar from './components/NavBar'
const items = [
  {
    title: 'What is React',
    content: 'React is a front end js framework'
  },
  {
    title: 'What is your name',
    content: 'Udemy'
  },
  {
    title: 'How do you use React',
    content: 'Making components'
  }
]

const options = [
  {
    label: 'The color Red',
    value: 'Red'
  },
  {
    label: 'The color Green',
    value: 'Green'
  }, 
  {
    label: 'The color Blue',
    value: 'Blue'
  }
]
function App() {
  const [selected, setSelected] = useState(options[0])
  return (
    <BrowserRouter>
    <div >
      <NavBar/>
     <Route path = '/Translate' exact component = {Translate}/>
     <Route path = '/Search' exact component = {Search}/>
     <Route path = '/Accordion' exact render ={()=> <Accordion items = {items}/>}/>
     <Route path = '/Dropdown' exact render ={()=> <Dropdown 
                                                    options = {options}
                                                    selected = {selected}
                                                    onSelectedChange = {setSelected}
                                                    label = "Select a language"
                                                     />}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
