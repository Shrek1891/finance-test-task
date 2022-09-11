import React, { useEffect } from "react";
import io from 'socket.io-client';
import { connect } from 'react-redux';
import './App.css';
import Main from "./components/main";
import { fetchData } from "./store/actions/actions";
import ShourtList from "./components/ShourtList";
import "bootstrap/dist/css/bootstrap.css";
import Speedometr from "./components/Speedometr/Speedometr";

const App = ({getTikets}) => {
  useEffect(() => {
    const socket = io('http://localhost:4000/');
    socket.on('connect', () => console.log(socket.connected));
    socket.emit('start');
    socket.on('ticker', function (quotes) {
      getTikets(quotes);
    });
  }, [getTikets]);
  return (
    <div className="container">
      <ShourtList />
      <Main />
      < Speedometr />
    </div>
      
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    getTikets : (data) => dispatch(fetchData(data))
  }
};

const mapStateToProps = (state) => (
  {
    shortList: state.shortList
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
