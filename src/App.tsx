import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import LineDevelop from './views/LineDevelop'
import Button from '@mui/material/Button'

function App() {
  return (
    <div className="App">
      <h1>
        這是一個使用 React、React Router、Vite、Tailwind CSS、TypeScript 和
      </h1>
      <h1>
        Material-UI 的專案。它旨在提供一個練習 React 的平台，並擁有多個頁面。
      </h1>
      <ul>
        <li>
          <Button variant="outlined">
            <Link to={`line-develop`}>line-develop</Link>
          </Button>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<LineDevelop />}>
          <Route index element={<LineDevelop />} />
          <Route path="line-develop" element={<LineDevelop />} />
          <Route path="dashboard" element={<LineDevelop />} />
          <Route path="*" element={<LineDevelop />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
