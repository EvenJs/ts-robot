import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.svg';
import style from './App.module.css';

import ShoppingCart from './components/ShoppingCart';
import Robot from './components/Robot';
// import robots from './mockdata/robots.json';

interface Props {

}

interface State {     
  robotGallery: any [];
  count: number;
}

const App: React.FC = (props) => {
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    document.title = `click ${count} times`
  }, [count]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        // .then((response) => response.json())
        // .then((data) => setRobotGallery(data))
        const data = await response.json()
        setRobotGallery(data);
      } catch (e) {
        setError(e.message);
      }
        setLoading(false);
    };

    fetchData();
  },[]);

  return (
    <div className={style.app}>
      <div className={style.appHeader}>
        <img src={logo} alt="logo" className={style.appLogo} />
        <h1>罗伯特机器人狂拽酷炫吊炸天</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <span>count: {count} </span>
      <ShoppingCart />
      {(!error || error !== '') && <div>Error: {error} </div>}
      {!loading ? (
        <div className={style.robotList}>
          {robotGallery.map((r) => <Robot id={r.id} email={r.email} name={r.name} />)}
        </div>
      ) : (
        <h2> Loading Data </h2>
      )}
    </div>
  );
}

export default App;
