import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MPlayer from './ParentPlayer';

function mplayer() {
ReactDOM.render(
  <React.StrictMode>
    <MPlayer />
  </React.StrictMode>,
  document.getElementById('root')
);
}

export default mplayer;
