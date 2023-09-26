import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Main } from 'pages/Main/Main'
import { PostPage } from 'pages/PostPage/PostPage'

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/post/:id" element={<PostPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
