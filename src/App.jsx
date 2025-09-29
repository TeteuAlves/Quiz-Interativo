import { useState } from 'react'
import './App.module.css'
import Header from "./components/Header"
import QuestionCard from "./components/QuestionCard"

function App() {
  

  return (
    <>
      <Header index={currentIndex}/>
      <QuestionCard index={currentIndex} onClickButton={a} />
    </>
  )
}

export default App
