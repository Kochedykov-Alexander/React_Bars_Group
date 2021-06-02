import React from 'react'
import './mainPage.css'
import Slogan from '../components/mainPage/Slogan';
import Bragging from '../components/mainPage/Bragging';
import Reclame from '../components/mainPage/Reclame';

function MainPage() {
  return (
    <div className="mainPage">
      <Slogan/>
      <Bragging/>
      <Reclame/>
    </div>
  );
}

export default MainPage;