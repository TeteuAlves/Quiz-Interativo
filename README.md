# 🧠 Quiz Interativo em React

Um projeto de aplicação web simples de quiz interativo, desenvolvido em React, focado na gestão de estado, *timers* e exibição de resultados detalhados.

---

## 🎯 Objetivo do Projeto

O principal objetivo deste projeto é criar um quiz funcional que demonstre as seguintes habilidades e funcionalidades:

1.  **Gestão de Estado Centralizada:** Manter o índice da questão atual, pontuação e tempo no componente principal (`App.jsx`).
2.  **Timer com Reinício:** Utilizar o *hook* `useEffect` para iniciar e **reiniciar o cronômetro** a cada nova questão.
3.  **Fluxo de Componentes:** Gerenciar a transição entre o **Modo Quiz** (`QuestionCard` e `Header`) e o **Modo Resultado** (`ScoreBoard`).
4.  **Placar Detalhado:** Calcular e exibir métricas avançadas, como **menor tempo de resposta** e **percentual de acertos**.
5.  **Reutilização:** Utilizar componentes modulares e estilização em CSS Modules para manter o código organizado.

---

## 🧩 Estrutura dos Componentes

O projeto é dividido em componentes funcionais, com a lógica de estado sendo mantida no nível superior (`App.jsx`).

| Componente | Responsabilidade Principal | Props Recebidas |
| :--- | :--- | :--- |
| **`App.jsx`** | **Componente principal.** Gerencia todos os estados (`score`, `time`, `currentIndex`, `correctAnswerTimes`) e o fluxo de exibição (Quiz vs. ScoreBoard). | N/A |
| **`Header`** | Exibe o título do quiz, o progresso (`Questão X de Y`) e o **timer atual**. | `index`, `time` |
| **`QuestionCard`** | Exibe o enunciado da questão e as alternativas. Envia a alternativa clicada para o `App.jsx`. | `index`, `onClickButton` |
| **`ScoreBoard`** | Exibido ao final do quiz. Calcula e mostra a pontuação final, o percentual de acertos, o menor tempo de resposta e o botão de reinício. | `score`, `totalQuestions`, `correctAnswerTimes`, `onRestart` |
| **`../../data/questions`** | Módulo externo contendo o array de objetos das questões (`question`), cada um com o `id`, `question`, `options` e `answer`. | N/A |

---