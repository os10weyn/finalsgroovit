import React from 'react';
import '../../css/homepage.css'

function Display() {
  return (    
    <div>
    <h1 className="popular-txt">Popular Songs</h1>
    <div className="popular-songs">
    
    <img src="https://images-na.ssl-images-amazon.com/images/I/91lhfmy5cYS._SL1500_.jpg"  alt=""/>
    {/* height={100} width={100} */}
    <img src="https://http2.mlstatic.com/harry-styles-fine-line-cd-nuevo-D_NQ_NP_781942-MLM40135904277_122019-F.jpg"  alt=""/>
    {/* height={100} width={100} */}
    <img src="https://tse4.mm.bing.net/th?id=OIP.mHtdBgEje9N2ucTmdaIx0gHaHa&pid=Api&P=0"  alt=""/>
    {/* height={100} width={100} */}
    </div>
    <h1 className="top-txt">Top Hits</h1>
    <div className="top-hits">
    <img src="https://tse1.mm.bing.net/th?id=OIP.BtfqOZ0CwQnRrcC_b1e3ZwHaHa&pid=Api&P=0" height={100} width={100} alt=""/>
    <img src="https://tse3.mm.bing.net/th?id=OIP.oCddAAMzHREifFBtskfmKAHaHa&pid=Api&P=0" height={100} width={100} alt=""/>
    <img src="https://wallpapercave.com/wp/wp5993904.jpg" height={100} width={100} alt=""/>
    </div>
    </div>
  );
}

export default Display;