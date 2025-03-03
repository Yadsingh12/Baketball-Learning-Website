import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import DragAndDrop from '../Pages/DragAndDrop/DragAndDrop'
import HomePage from '../Pages/HomePage/HomePage'
import QuizPage from '../Pages/QuizPage/QuizPage'
import Begpage from '../Pages/TrainingPage/Begpage'
import Inter from '../Pages/TrainingPage/Inter'
import Advanced from '../Pages/TrainingPage/Advanced'
import Search1 from '../Pages/search1/Search1'
import Injury from '../Pages/Injury/Injury'

const ReactRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/beginner' element={<Begpage/>}></Route>
        <Route path='/intermediate' element={<Inter/>}></Route>
        <Route path='/advance' element={<Advanced/>}></Route>
        {/* <Route path='/' */}

        <Route path='/questions' element={<QuizPage/>}></Route>
        <Route path='/uploadvideo' element={<DragAndDrop/>}></Route>
        <Route path='/injury' element={<Injury/>}></Route>
        <Route path='/recommend' element={<Search1/>}></Route>
      </Routes>
    </div>
  )
}

export default ReactRouter
