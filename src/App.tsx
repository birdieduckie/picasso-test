import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

import { List } from 'pages/List/List'
import { Post } from 'pages/Post/Post'



interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <Routes>
        <Route path='/' element={<List />} />
    </Routes>
  );
}

export default App;
