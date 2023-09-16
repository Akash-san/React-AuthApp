// // import React from 'react'
// // import { Footer, Blog, Possibility, Feature, GPT3, Header } from './containers'
// // import { Cta, Brand, Navbar } from './components'
// // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
// // import './App.css'
// // import { useState,useEffect } from 'react'
// // import './index.css'
// // import Login from './pages/login'
// // const App = () => {


// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     const getUser = () => {
// //       fetch("http://localhost:5000/auth/login/success", {
// //         method: "GET",
// //         credentials: "include",
// //         headers: {
// //           Accept: "application/json",
// //           "Content-Type": "application/json",
// //           "Access-Control-Allow-Credentials": true,
// //         },
// //       })
// //         .then((response) => {
// //           if (response.status === 200) return response.json();
// //           throw new Error("authentication has been failed!");
// //         })
// //         .then((resObject) => {
// //           setUser(resObject.user);
// //         })
// //         .catch((err) => {
// //           console.log(err);
// //         });
// //     };
// //     getUser();
// //   }, []);
// //   return (

// //     <BrowserRouter>

// //       <div>

// //         <Routes>
// //           {/* <Route path="/" element={<Login/>} /> */}
// //           <Route path="/" element={<Home />} />
// //           <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
// //         </Routes>

// //       </div>
// //     </BrowserRouter>

// //   )
// // }
// // const Home = (user) => (
// //   <div className='App'>
// //     <div className='gradient__bg'>
// //     <Navbar user={user}  />
// //       <Header />
// //     </div>
// //     <Brand />
// //     <GPT3 />
// //     <Feature />
// //     <Possibility />
// //     <Cta />
// //     <Blog />
// //     <Footer />
// //   </div>
// // );

// // export default App

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
// import './index.css';
// import Login from './pages/login';
// import {
//   Footer,
//   Blog,
//   Possibility,
//   Feature,
//   GPT3,
//   Header,
// } from './containers';
// import { Cta, Brand, Navbar } from './components';

// const App = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const getUser = () => {
//       fetch('http://localhost:5000/auth/login/success', {
//         method: 'GET',
//         credentials: 'include',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//           'Access-Control-Allow-Credentials': true,
//         },
//       })
//         .then((response) => {
//           if (response.status === 200) return response.json();
//           throw new Error('Authentication has failed!');
//         })
//         .then((resObject) => {
//           setUser(resObject.user);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
//     getUser();
//   }, []);

//   return (
//     <BrowserRouter>
//       <div>
//         <Navbar user={user} />
//         <Routes>
//           <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
//           <Route
//             path="/"
//             element={user ? <Home /> : <Navigate to="/login" />}
//           />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// const Home = () => (
//   <div className="App">
//     <div className="gradient__bg">
//       <Header />
//     </div>
//     <Brand />
//     <GPT3 />
//     <Feature />
//     <Possibility />
//     <Cta />
//     <Blog />
//     <Footer />
//   </div>
// );

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './index.css';
import Login from './pages/login';
import {
  Footer,
  Blog,
  Possibility,
  Feature,
  GPT3,
  Header,
} from './containers';
import { Cta, Brand, Navbar } from './components';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch('http://localhost:5000/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error('Authentication has failed!');
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <div>
        {/* <Navbar user={user} /> */}
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route
            path="/"
            element={user ? <Home user={user} /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const Home = ({ user }) => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar user={user} />
      <Header />
    </div>
    <Brand />
    <GPT3 />
    <Feature />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
  </div>
);

export default App;
