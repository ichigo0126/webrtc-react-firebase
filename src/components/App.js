import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';
import React from 'react';
import {Button} from '@material-ui/core';

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
  return <Button color="primary" variant="text">Hello, World!</Button>;
}

export default App;
