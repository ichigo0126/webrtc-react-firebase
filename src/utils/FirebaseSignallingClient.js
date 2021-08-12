import firebase from 'firebase/app';
import 'firebase/database';

export default class FirebaseSignallingClient{
    constructor() {
        var firebaseConfig = {
            apiKey: "AIzaSyDOcWo6A6ceiPmymPWfT85QNVhXp61HS8o",
            authDomain: "webrtc-react-firebase-6f763.firebaseapp.com",
            databaseURL: "https://webrtc-react-firebase-6f763-default-rtdb.firebaseio.com",
            projectId: "webrtc-react-firebase-6f763",
            storageBucket: "webrtc-react-firebase-6f763.appspot.com",
            messagingSenderId: "525066174194",
            appId: "1:525066174194:web:8ae4924257270829411a6b"
          };
          // Initialize Firebase
          if(firebase.apps.length === 0)firebase.initializeApp(firebaseConfig);
          this.database = firebase.database();
          this.localPeerName = '';
          this.remotePeerName = '';
    }
}