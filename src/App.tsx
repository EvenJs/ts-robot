import React from 'react';
import logo from './assets/images/logo.svg';
import style from './App.module.css';

import ShoppingCart from './components/ShoppingCart';
import Robot from './components/Robot';
import robots from './mockdata/robots.json';

interface Props {

}

interface State {
  robotGallery: any
}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      robotGallery: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({robotGallery: data}));
  }

  render() {
    return (
      <div className={style.app}>
        <div className={style.appHeader}>
          <img src={logo} alt="logo" className={style.appLogo} />
          <h1>罗伯特机器人狂拽酷炫吊炸天</h1>
        </div>
        <ShoppingCart />
        <div className={style.robotList}>
          {this.state.robotGallery.map((r) => <Robot id={r.id} email={r.email} name={r.name} />)}
        </div>
      </div>
    );
  }
}

export default App;
