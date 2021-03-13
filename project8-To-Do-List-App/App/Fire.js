import firebase from 'firebase';
import "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBVGfKc-JSQy2ZpvxRI2F7kTxdIPaVc_lM",
    authDomain: "todoapp-bbd2c.firebaseapp.com",
    databaseURL: "https://todoapp-bbd2c-default-rtdb.firebaseio.com",
    projectId: "todoapp-bbd2c",
    storageBucket: "todoapp-bbd2c.appspot.com",
    messagingSenderId: "360661340089",
    appId: "1:360661340089:web:1d0dacb811064fc3967068"
}

class Fire {
    constructor(callback) {
        this.init(callback)
    }
     
    init(callback) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                callback(null, user)
            }else{
                firebase
                .auth()
                .signInAnonymously()
                .catch(error =>{
                    callback(error)
                });
            }
        });
    }
}

export default Fire;