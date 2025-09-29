import styles from "./QuestionCard.module.css"
import { question } from "../../data/questions"
import { useState } from "react"

export default function QuestionCard({ index, onClickButton }) {
  const alternativas = question[index].options

  return (
    <div className={styles.containerQuestion}>
      <p className="enunciado">{question[index].question}</p>

      <div className={styles.alternativasContainer}>
        {alternativas.map((alternativa, i) => (
          <button
            key={i}
            className={styles.alternativaButton}
            onClick={onClickButton}
          >
            {alternativa}
          </button>
        ))}
      </div>
    </div>
  )
}
