import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

import { PostsListPage } from 'pages/postsListPage/postsListPage'
import { PostPage } from 'pages/postPage/postPage'



interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <Routes>
        <Route path='/' element={<PostsListPage />} />
    </Routes>
  );
}

export default App;
