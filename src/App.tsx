import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting/Greeting';
import Song from './components/song';


function App() {
  return (
    <div>
    <><Greeting name="Sean" age="32" />
    <Song title="Running Up That Hill" artist="Kate Bush" /></>
    </div>
  );
}

export default App;

