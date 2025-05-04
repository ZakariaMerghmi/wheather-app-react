import { useState } from 'react';
import './App.css';
import MainDiv from './components/MainDiv';

function App() {
  return (
    <>
      <div className="h-screen w-screen overflow-hidden absolute top-0 left-0">
        <div className="bg-[url('/photos/background.jpg')] w-full h-full bg-cover bg-center flex items-center justify-center" >
          <MainDiv/>
        </div>
      </div>
    </>
  );
}

export default App;
