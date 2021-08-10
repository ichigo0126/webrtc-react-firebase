import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';
import React, {useState} from 'react';
import InputFormLocal from './InputFormLocal';
import InputFormRemote from './InputFormRemote';

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
  const [localPeerName, setLocalPeerName] = useState('');
  const [remotePeerName, setRemotePeerName] = useState('');
  console.log({localPeerName, remotePeerName})
  return (
  <>
    <InputFormLocal 
    localPeerName={localPeerName}
    setLocalPeerName={setLocalPeerName}
    />
    <InputFormRemote 
    localPeerName={localPeerName}
    remotePeerName={remotePeerName}
    setRemotePeerName={setRemotePeerName}
    />
  </>
  );
};

export default App;
