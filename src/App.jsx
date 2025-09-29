// app.jsx: (Código MODIFICADO)
import { useState, useEffect } from 'react' // Importe useEffect
import './App.module.css'
import Header from "./components/Header"
import QuestionCard from "./components/QuestionCard"

function App() {
    const [currentIndex, setCurrentIndex] = useState(0)
   
    const [time, setTime] = useState(0)

    useEffect(() => {
        
        setTime(0)

        const interval = setInterval(() => {
            setTime((prev) => prev + 1)
        }, 1000)

        
        return () => clearInterval(interval)
 
    }, [currentIndex]) 

    return (
        <>
            <Header index={currentIndex} time={time}/>
            <QuestionCard 
                index={currentIndex} 
                onClickButton={() => setCurrentIndex(currentIndex + 1)} 
            />
        </>
    )
}

export default App