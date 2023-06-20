import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }
  const { question, incorrect_answer, correct_answer } = questions[index];
  const answers = [...incorrect_answers, correct_answer];
  return (
    <main>
      {/* <Modal /> */}
      <section className="quiz">
        <p className="correct_answers">
          correct_answers:{correct}/{index}
        </p>
        <artcile className="container">
          <h2 dangerouslySetInnerHTML={{ _html: question }} />
          <div className="btn-container">
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className="answer-btn"
                  onClick={() => checkAnswer(correct_answer === answer)}
                  dangerouslySetInnerHTML={{ _html: answer }}
                />
              );
            })}
          </div>
        </artcile>
        <button className="next-question" onClick={nextQuestion}>
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
