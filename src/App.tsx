import React from 'react';
import logo from './logo.svg';
import style from './App.module.css';

import Robot from './components/Robot';
import robots from './mockdata/robots.json';

function App() {
  return (
    <div className={style.app}>
      <div className={style.robotList}>
        {robots.map((r) => <Robot id={r.id} email={r.email} name={r.name} />)}
      </div>
    </div>
  );
}

export default App;
