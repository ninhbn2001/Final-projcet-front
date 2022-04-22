
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main/Main";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

import React from 'react';
import './App.scss';

// //components
// import WebBar from 'components/WebBar/WebBar';
// import BoardBar from 'components/BoardBar/BoardBar';
// import BoardContent from 'components/BoardContent/BoardContent';


function App() {
  const user = localStorage.getItem("token");
  return (
    //   <div className="web-master">
    //      <WebBar />
    //       <BoardBar />
    //         <BoardContent /> 
    // </div>
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/users" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

//   );
// }

export default App;