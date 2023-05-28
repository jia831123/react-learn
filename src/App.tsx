import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import LineDevelop from './views/LineDevelop'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
    <Routes>
        <Route path='/' element={<LineDevelop />}>
            <Route index element={<LineDevelop />} />
            <Route path='about' element={<LineDevelop />} />
            <Route path='dashboard' element={<LineDevelop />} />
            <Route path='*' element={<LineDevelop />} />
        </Route>
    </Routes>
</div>
  )
}

export default App
