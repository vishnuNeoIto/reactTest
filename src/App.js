import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import UserList from './users/list';
import CreateUser from './users/create';
import ViewUser from './users/view';
const App = () => (
  <Router>
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/user/:id" element={<ViewUser />} />
      </Routes>
  </Router>
);

export default  App;