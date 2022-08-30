import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import UserList from './users/list';
import CreateUser from './users/create';

const App = () => (
  <Router>
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/create" element={<CreateUser />} />
      </Routes>
  </Router>
);

export default  App;