import { useState, useEffect, useCallback } from 'react'
import './App.module.css'
import Header from "./components/Header"
import QuestionCard from "./components/QuestionCard"
import ScoreBoard from "./components/ScoreBoard" 
import { question } from "./data/questions" 

function App() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [time, setTime] = useState(0)
    const [score, setScore] = useState(0) 
    const [correctAnswerTimes, setCorrectAnswerTimes] = useState([]) 

    
    useEffect(() => {
       
        if (currentIndex >= question.length) return;

        setTime(0) 
        const interval = setInterval(() => {
            setTime((prev) => prev + 1)
        }, 1000)

        
        return () => clearInterval(interval)
    }, [currentIndex]) 

   
    const handleAnswerClick = useCallback((selectedAnswer) => {
        const currentQuestion = question[currentIndex]
        
   
        if (selectedAnswer === currentQuestion.answer) {
            setScore(prevScore => prevScore + 1) 
           
            setCorrectAnswerTimes(prevTimes => [...prevTimes, time]) 
        }

       
        setCurrentIndex(prevIndex => prevIndex + 1)

    }, [currentIndex, time]) 


    const restartQuiz = useCallback(() => {
        setCurrentIndex(0);
        setTime(0);
        setScore(0);
        setCorrectAnswerTimes([]); 
    }, []);
    
    const isQuizFinished = currentIndex >= question.length

    return (
        <div >
      
            {!isQuizFinished && <Header index={currentIndex} time={time}/>}

            {isQuizFinished ? (
               
                <ScoreBoard 
                    score={score} 
                    totalQuestions={question.length}
                    correctAnswerTimes={correctAnswerTimes}
                    onRestart={restartQuiz} 
                />
            ) : (
                <QuestionCard 
                    index={currentIndex} 
                    onClickButton={handleAnswerClick} 
                />
            )}
        </div>
    )
}

export default App