import styles from "./QuestionCard.module.css"
import { question } from "../../data/questions"
// Importação de useState não é mais necessária

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
                        // MODIFICADO: Passa a alternativa clicada
                        onClick={() => onClickButton(alternativa)} 
                    >
                        {alternativa}
                    </button>
                ))}
            </div>
        </div>
    )
}