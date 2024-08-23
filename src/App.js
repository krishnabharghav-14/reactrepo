import logo from './logo.svg';
import './App.css';
import NavigationStack from './navigation/navigation';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Question from "./Components/Question";
// import qBank from "./Components/QuestionBank";
// import Score from "./Components/Score";
import { useState } from 'react';
import qBank from './Screens/questionBank';
import Question from './Screens/question';
import Score from './Screens/score';

function App() {


  const [state, setState] = useState({
    questionBank: qBank,
    currentQuestion: 0,
    selectedOption: "",
    score: 0,
    quizEnd: false,
  })

  const handleOptionChange = (e) => {
    setState({ ...state, selectedOption: e.target.value });
  };

  const handleFormSubmit = (e) => {
    // console.log(state.score)
    e.preventDefault();
    checkAnswer();
    handleNextQuestion();
  };

  const checkAnswer = () => {
    // console.log("Not Checked")

    const { questionBank, currentQuestion, selectedOption } = state;
    if (selectedOption === questionBank[currentQuestion].answer) {
      console.log("checked")
      console.log(state.score)
      setState({...state, score: state.score+1})
    }
  };

  const handleNextQuestion = () => {
    const { questionBank, currentQuestion } = state;
    console.log(state)
    if (currentQuestion + 1 < questionBank.length) {
      setState(({
        ...state,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
      }));
    } else {
      setState({
        ...state,
        quizEnd: true,
      });
    }
  };





  return (
    <div className="App">
      {/* <NavigationStack/> */}

      <div className="App d-flex flex-column align-items-center justify-content-center">
        <h1 className="app-title">QUIZ APP</h1>
        {!state.quizEnd ? (
          <Question
            question={state.questionBank[state.currentQuestion]}
            selectedOption={state.selectedOption}
            onOptionChange={handleOptionChange}
            onSubmit={handleFormSubmit}
          />
        ) : (
          <Score
            score={state.score}
            onNextQuestion={handleNextQuestion}
            className="score"
          />
        )}
      </div>
    </div>
  );
}

export default App;
