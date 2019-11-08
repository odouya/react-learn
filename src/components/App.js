
import React from 'react'

import DataList from './DataList'

export default function App() {
  const numbers = [1,2,3,4,5]
  return (
    <div>
      <DataList numbers={numbers}/>
    </div>
  )
}
