import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

function QuestionList({questions, handleDelete, handleUpdateCorrectAnswer}) {
  // const [questions, setQuestions] = useState([]);
  // // Fetch questions when component mounts
  // useEffect(() => {
  //   fetch("http://localhost:4000/questions")
  //   .then((res) => res.json())
  //   .then((questions) => setQuestions(questions))
  // })
  const questionList = questions.map((question) => {
    return <QuestionItem key={question.id} question={question} onHandleDelete={() => handleDelete(question.id)} onHandleUpdate={(newCorrectIndex) => handleUpdateCorrectAnswer(question.id, newCorrectIndex)}/> 
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
      <ul>{}</ul>
    </section>
  );
}

}

export default QuestionList;