import logo from './logo.svg';
import React from 'react'
import './App.css';
import Home from './Home.js';
import About from './About.js';
import { Link, Route , Routes} from 'react-router-dom';
import Profile from './Profile';
import Profiles from './Profiles';

const App = () =>{
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li>
      </ul>
    <hr/>
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/about" exact  element={<About/>} />
      <Route path="/info" exact  element={<About/>} />
      <Route path="/profile/:username"  element={<Profile/>} />
      <Route path="/profiles" componen={Profiles}/>
    </Routes>
    </div>
  )
}

export default App;
