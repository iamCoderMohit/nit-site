import React from 'react'
import CourseCard from '../components/CourseCard'
import courseImg from '../assets/coursepicimg.png'

const courses = [
  {
    id: 1,
    image: courseImg,
    title: "HTML + CSS + JavaScript: Complete Web Development",
    description: "Master the fundamentals of web development by learning HTML, CSS, and JavaScript. Build responsive websites from scratch and gain hands-on experience with real-world projects.",
    syllabus:`HTML Basics\nHTML5 Semantic Elements\nCSS Fundamentals\nResponsive Design with Flexbox & Grid\nCSS Animations & Transitions\nJavaScript Syntax & Operators\nDOM Manipulation\nEvent Handling\nES6 Features\nForm Validation\nProject: Build a Responsive Website`,
    price: 3434,
    off: 34
  },
  {
    id: 2,
    image: courseImg,
    title: "Python Programming: From Basics to Advanced",
    description: "Start your programming journey with Python. This course covers everything from basic syntax to advanced concepts, including data structures, OOP, and practical applications.",
    syllabus: `Python Syntax & Variables\nControl Structures\nFunctions & Modules\nData Structures (Lists, Tuples, Dictionaries, Sets)\nFile Handling\nError & Exception Handling\nObject-Oriented Programming\nWorking with Libraries (NumPy, Pandas)\nProject: Build a Python Application`,
    price: 3434,
    off: 34
  },
  {
    id: 3,
    image: courseImg,
    title: "Data Science: Python + Machine Learning + AI",
    description: "Dive into data science with Python. Learn data analysis, visualization, machine learning, and AI techniques to solve real-world problems and make data-driven decisions.",
    syllabus:`Introduction to Data Science\nPython for Data Science\nData Analysis with Pandas\nData Visualization (Matplotlib, Seaborn)\nStatistics & Probability\nMachine Learning Algorithms\nSupervised & Unsupervised Learning\nModel Evaluation & Tuning\nIntroduction to AI & Deep Learning\nProject: End-to-End Data Science Solution`,
    price: 3434,
    off: 34
  },
]

function Courses() {
  return (
    <div className='mt-20'>
    <div className="w-[90vw] m-auto font-pro text-white font-semibold text-4xl mb-10">
      <h1 className="text-center">What You'll Learn with us</h1>
    </div>

    <div className='flex justify-around flex-wrap w-[90vw] m-auto gap-5'>
      {courses.map(course => (
        <CourseCard course={course}/>
      ))}
    </div>
    </div>
  )
}

export default Courses