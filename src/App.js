import { useState } from "react";
import data from "./data/Data";
import Question from "./components/Question";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div>
        <h1>Questions and Answers about login</h1>
        <section>
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
