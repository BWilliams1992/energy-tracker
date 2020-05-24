import React from 'react'
import ReadingsList from './ReadingsList'
import AddReadingForm from './AddReadingForm.js'
import Bill from './Bill'

const ReadingsDashboardPage = () => (
  <div>
    <Bill />
    <AddReadingForm />
    <ReadingsList />
  </div>
)

export default ReadingsDashboardPage