import styles from "./ScoreBoard.module.css"

export default function ScoreBoard({ score, totalQuestions, correctAnswerTimes, onRestart }) {
 
    const minTime = correctAnswerTimes.length > 0 
        ? Math.min(...correctAnswerTimes) 
        : "N/A"
    
    const minTimeFormatted = minTime !== "N/A" ? `${minTime}s` : "N/A"

    
    const percentualAcertos = totalQuestions > 0 
        ? ((score / totalQuestions) * 100).toFixed(1) 
        : 0

    return (
        <div className={styles.scoreBoardContainer}>
            <h2 className={styles.title}>Resultados Finais</h2>
            
            <div className={styles.metricsGrid}>
                
                <div className={styles.metricCard}>
                    <span className={styles.metricLabel}>Acertos ({totalQuestions} Total)</span>
                    <span className={styles.metricValuePrimary}>{score}</span>
                </div>


                <div className={styles.metricCard}>
                    <span className={styles.metricLabel}>% de Acerto</span>
                    <span className={styles.metricValue}>{percentualAcertos}%</span>
                </div>
                
        
                <div className={styles.metricCard}>
                    <span className={styles.metricLabel}>Menor Tempo</span>
                    <span className={styles.metricValue}>{minTimeFormatted}</span>
                </div>
            </div>

            
            <button 
                onClick={onRestart} 
                className={styles.restartButton}
            >
                Reiniciar Quiz
            </button>
        </div>
    )
}