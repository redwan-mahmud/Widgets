import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'

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
  


  return (
    <div >
     <Translate/>
    </div>
  );
}

export default App;
