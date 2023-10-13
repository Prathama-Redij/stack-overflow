import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './AskQuestion.css'
import {askQuestion} from '../../actions/question'

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState('')
  const [questionBody, setQuestionBody] = useState('')
  const [questionTags, setQuestionTags] = useState('')

  const dispatch = useDispatch();
  const User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log({questionTitle, questionBody, questionTags})
    dispatch(askQuestion({questionTitle, questionBody, questionTags, userPosted: User.result.name, userId: User?.result?._id}, navigate))
  }

  const handleEnter = (e) => {
    if(e.key === 'Enter'){
      setQuestionBody(questionBody + "\n")
    }
  }
  return (
    <div className='ask-question'>
    <div className='ask-question-container'>

      <h1>Ask a public Question</h1> 
      

      <form onSubmit={handleSubmit}>
        <div className='ask-from-container'>
          <label htmlFor='ask-for-title'>
            <h4>title</h4>
            <p>Be specific and imagine you are asking a question to another person</p>
            <input type='text' name='questionTitle' id='ask-ques-title' onChange={(e) => {setQuestionTitle(e.target.value)}} placeholder='e.g is there an R function for finding the index of an element in a vector'/>
          </label>

          <label htmlFor='ask-for-body'>
            <h4>Body</h4>
            <p>Include all the information someone would need to answer the question</p>
            <textarea type='text' name='questionBody' id='ask-ques-body'  onChange={(e) => {setQuestionBody(e.target.value)}} onKeyPress={handleEnter} cols="30" rows="10"/>
          </label>

          <label htmlFor='ask-for-tags'>
            <h4>Tags</h4>
            <p>Add up to 5 tags to describe what your question is about </p>
            <input type='text' name='questionTags' id='ask-ques-tags'  onChange={(e) => {setQuestionTags(e.target.value.split(" "))}}  placeholder='e.g (xml typescript wordpress)'/>
          </label>
        </div>
        <input type='submit' value="review your question" className='review-btn'/>
      </form>
    </div>

    </div>
  )
}

export default AskQuestion
