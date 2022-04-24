
// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import List from "./pages/list/List";
// import Single from "./pages/single/Single";
// import New from "./pages/new/New";

// function App() {
//   const user = localStorage.getItem("token");

//   return (
// <div>
//   <BrowserRouter>
//     <Routes>
//       <Route path="/">
//         <Route index element={<Home />} />
//         <Route path="login" element={<Login />} />
//         <Route path="users">
//           <Route index element={<List />} />
//           <Route path=":userId" element={<Single />} />
//           <Route
//             path="new"
//             element={<New inputs={userInputs} title="Add New User" />}
//           />
//         </Route>
//         <Route path="products">
//           <Route index element={<List />} />
//           <Route path=":productId" element={<Single />} />
//           <Route
//             path="new"
//             element={<New inputs={productInputs} title="Add New Product" />}
//           />
//         </Route>
//       </Route>
//     </Routes>
//   </BrowserRouter>
// </div>
//   );
// }

import { productInputs, userInputs } from "./formSource";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import BoardContent from "./components/BoardContent/BoardContent";

import React from 'react';
import './App.scss';

// //components
// import WebBar from 'components/WebBar/WebBar';
// import BoardBar from 'components/BoardBar/BoardBar';
// import BoardContent from 'components/BoardContent/BoardContent';


function App() {
  const user = localStorage.getItem("token");
  function checkuser() {
    if (user) {

      return <Navigate to={"/dashboard"} />
    } else {
      console.log("CHeck out")
      return <Navigate to={"/login"} />
    }
  }

  function checkDashboard() {
    if (user) {
      return <Dashboard />
    } else {
      return <Navigate to={"/login"} />
    }
  }

  console.log("check user: ", user)
  return (
    //   <div className="web-master">
    //      <WebBar />
    //       <BoardBar />
    //         <BoardContent /> 
    // </div>
    <Routes>
       <Route path="/dashboard" exact element={checkDashboard()} />
      <Route path="/users" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/home" exact element={<Home />} />
      {/* <WebBar />
    /    <BoardBar />
    //         <BoardContent /> */}
     <Route path="/boardcontent" exact element={<BoardContent />} />
      <Route path="/accounts">
        <Route index element={<List />} />
          <Route path=":accountsId" element={<Single />} />
          <Route
            path="new"
            element={<New inputs={userInputs} title="Add New User" />}/>
          </Route>
        <Route path="/milestone">
          <Route index element={<List />} />
            <Route path=":milestoneId" element={<Single />} />
            <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}/>
        </Route>
      {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
      <Route path="/" exact element={checkuser()} />
    </Routes>
  );
}

//   );
// }
export default App;