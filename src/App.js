import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';
import React from 'react';

const getMedia = async ()=>  {
  const constraints = {audio: TouchRipple, video: true};

  try {
    return await navigator.mediaDevices.getUserMedia(constraints);
    /* ストリームを使用 */
  } catch(err) {
    /* エラーを処理 */
  }
}


getMedia();

const App = ()  =>{
  return <div>Hello, React!</div>;
}

export default App;
