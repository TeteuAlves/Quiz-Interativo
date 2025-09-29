
import {question} from "../../data/questions"
import styles from "./Header.module.css"


export default function Header({index, time}) { 
    

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    return (
        <header className={styles.header}>
            <h1>Quiz Interativo</h1>
            <h2>{`Questão ${question[index].id} de ${question.length}`}</h2>
            <h3>Tempo ⌛ {minutes}:{seconds.toString().padStart(2, "0")}</h3>
        </header>
    )
}