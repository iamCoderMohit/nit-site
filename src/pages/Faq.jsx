import React from 'react'
import Question from '../components/Question'

const questions = [
    {
        id: 1,
        text: "Why should I join NIT?",
        answer: "top educators you'll find here"
    },
    {
        id: 2,
        text: "Why should I join NIT?",
        answer: "top educators you'll find here"
    },
    {
        id: 3,
        text: "Why should I join NIT?",
        answer: "top educators you'll find here"
    },
    {
        id: 4,
        text: "Why should I join NIT?",
        answer: "top educators you'll find here"
    },
    {
        id: 5,
        text: "Why should I join NIT?",
        answer: "top educators you'll find here"
    },
]

function Faq() {
  return (
    <div className='mt-20'>
        <div>
            <h1 className='font-pro text-white text-4xl font-semibold text-center mb-10'>FAQs</h1>
        </div>

        <div className='flex flex-col gap-5 '>
            {questions.map(ques => (
                <Question question={ques.text}  answer={ques.answer}/>
            ))}
        </div>
    </div>
  )
}

export default Faq