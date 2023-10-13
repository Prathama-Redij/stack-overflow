import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import QuestionList from './QuestionList';
import './HomeMainbar.css'
import { useSelector } from 'react-redux';

function HomeMainbar() {
  const user = 1;
  const navigate = useNavigate();


  const questionsList = useSelector(state => state.questionsReducer);
  console.log(questionsList);
//   var questionsList = [
//     {
//       _id : "1",
//       upVotes : 3,
//       downVotes :2,
//       noOfAnswers : 2,
//       questionTitle : "What is function?",
//       questionBoddy : "It meant to be",
//       questionTags : ["javascript", "R", "python"],
//       userPosted : "nano",
//       askedOn : "jan 1",
//       answer : [{
//         answerBody : 'Answer',
//         userAnswered : 'Pawar',
//         answeredOn : 'Jan 2',
//         userId : '2'
//       }]
//     },
  
//     {
//       _id : "2",
//       upVotes : 4,
//       downVotes : 2,
//       noOfAnswers : 2,
//       questionTitle : "What is function?",
//       questionBoddy : "It meant to be",
//       questionTags : ["java", "node js", "mongodb"],
//       userPosted : "nano",
//       askedOn : "jan 1",
//       answer : [{
//         answerBody : 'Answer',
//         userAnswered : 'Pawar',
//         answeredOn : 'Jan 2',
//         userId : '2'
//       }]
  
//     },
  
//     {
//       _id : '3',
//       upVotes : 3,
//       downVotes : 2,
//       noOfAnswers : 2,
//       questionTitle : "What is function?",
//       questionBoddy : "It meant to be",
//       questionTags : ["java", "node js", "mongodb"],
//       userPosted : "nano",
//       time : "jan 1",
//       askedOn : "jan 1",
//       answer : [{
//         answerBody : 'Answer',
//         userAnswered : 'Pawar',
//         answeredOn : 'Jan 2',
//         userId : '2'
//       }]
//     },
  
//     {
//       _id : "4",
//       upVotes : 3,
//       downVotes : 2,
//       noOfAnswers : 2,
//       questionTitle : "What is function?",
//       questionBoddy : "It meant to be",
//       questionTags : ["java", "node js", "mongodb"],
//       userPosted : "nano",
//       time : "jan 1",
//       askedOn : "jan 1",
//       answer : [{
//         answerBody : 'Answer',
//         userAnswered : 'Pawar',
//         answeredOn : 'Jan 2',
//         userId : '2'
//       }]
//     },
  
//     {
//       _id : "5",
//       upVotes : 3,
//       downVotes : 2,
//       noOfAnswers : 2,
//       questionTitle : "What is function?",
//       questionBoddy : "It meant to be",
//       questionTags : ["java", "node js", "mongodb"],
//       userPosted : "nano",
//       time : "jan 1",
//       askedOn : "jan 1",
//       answer : [{
//         answerBody : 'Answer',
//         userAnswered : 'Pawar',
//         answeredOn : 'Jan 2',
//         userId : '2'
//       }]
//     },
  
//     {
//       _id : "6",
//       upVotes : 3,
//       downVotes : 2,
//       noOfAnswers : 2,
//       questionTitle : "What is function?",
//       questionBoddy : "It meant to be",
//       questionTags : ["java", "node js", "mongodb"],
//       userPosted : "nano",
//       askedOn : "jan 1",
//       answer : [{
//         answerBody : 'Answer',
//         userAnswered : 'Pawar',
//         answeredOn : 'Jan 2',
//         userId : '2'
//       }]
//     },
// ]

const location = useLocation();



const checkAuth = () => {
  if(user === null){
    alert("login or signup to ask a question")
    navigate('/Auth')
  }
  else
  {
    navigate('/AskQuestion')
  }
}
  return (
    <div className='main-bar'>
    <div className='main-bar-header'>
    {
      location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
    }

   <button className='ask-btn' onClick={checkAuth}>Ask Question</button>
    </div>
      <div>
        {
          questionsList.data === null ?
          <h1>Loading...</h1> :
          <>

            <p>{ questionsList.data.length } questions </p>
            <QuestionList questionsList={questionsList.data}/>
              
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
