import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const MyCourses = () => {
  useContext(AppContext)
  return (
    <div>
      <h1>My Courses Page</h1>
    </div>
  )
}

export default MyCourses
