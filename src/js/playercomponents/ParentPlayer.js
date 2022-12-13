import React from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react';
import Player from './playersettings/Player';


function MPlayer() {

  const [songs] = useState([
    {
    title: "Ain't It Fun",
    artist: "Paramore",
    img_src: "./images/song-2.jpg",
    src: "./music/song-2.mp3"
    },
    {
    title: "Charlie Be Quiet",
    artist: "Charlie Puth",
    img_src: "./images/song-4.jpg",
    src: "./music/song-4.mp3"
    },

    {
    title: "Forget me too ft. Halsey",
    artist: "Machine Gun Kelly",
    img_src: "./images/song-1.jpg",
    src: "./music/song-1.mp3"
    },
    {
    title: "Somewhere Only We Know",
    artist: "Keane",
    img_src: "./images/song-3.jpg",
    src: "./music/song-3.mp3"
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
  </React.StrictMode>,
  document.getElementById('root')
);


export default MPlayer;
