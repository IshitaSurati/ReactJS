import React from 'react'
import Form from './components/Form'
import QuestionBank from './components/QuestionBank'
import ExamPreparation from './components/ExamPreparation'

function App() {
  return (
    <div>
      <h1>Exam Management System</h1>
      <Form />
      <QuestionBank/>
      <ExamPreparation/>
    </div>
  )
}

export default App