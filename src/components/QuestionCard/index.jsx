import styles from "./QuestionCard.module.css"
import { questions } from "../../data/questions"
import { useState } from "react"

export default function QuestionCard({ index }) {
  const alternativas = questions[index].options

  return (
    <div className={styles.containerQuestion}>
      <p className={styles.enunciado}>{questions[index].question}</p>

      <div className={styles.alternativasContainer}>
        {alternativas.map((alternativa) => (
          <button className={styles.alternativaButton}>
            {alternativa}
          </button>
        ))}
      </div>
    </div>
  )
}

function verifiyClick(){
    
}