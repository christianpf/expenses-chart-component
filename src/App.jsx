import { useState } from 'react'

import Chart from './components/Chart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Chart />
    </main>
  )
}

export default App
