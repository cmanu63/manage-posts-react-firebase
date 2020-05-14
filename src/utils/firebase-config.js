import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAb5LFHmqrMwqJsPZlQ8S8leV6-ND4Qmtk",
    authDomain: "manage-posts-b4699.firebaseapp.com",
    databaseURL: "https://manage-posts-b4699.firebaseio.com",
    projectId: "manage-posts-b4699",
    storageBucket: "manage-posts-b4699.appspot.com",
    messagingSenderId: "78348733269",
    appId: "1:78348733269:web:148d2f708854a115ef3ddc"
};

firebase.initializeApp(config);

export default firebase;