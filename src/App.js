import React from 'react';
import './App.css';
import Accordion from './components/Accordion'
import Search from './components/Search'

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
function App() {
  return (
    <div >
    
     <Search/>
    </div>
  );
}

export default App;
