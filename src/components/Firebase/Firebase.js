import app from 'firebase/app';
import 'firebase/auth'

const Config = {
    apiKey: "AIzaSyDkfhzmCNaqD_3Qu9nVJA0g0K0SBvhE9KU",
    authDomain: "crmauth-69b0f.firebaseapp.com",
    projectId: "crmauth-69b0f",
    storageBucket: "crmauth-69b0f.appspot.com",
    messagingSenderId: "788116806062",
    appId: "1:788116806062:web:89baf3f1fa21913f52903f",
    measurementId: "G-ECDXK3K18Z"
  };



class Firebase{

    constructor(){
        app.initializeApp(Config)
        this.auth = app.auth()
    }

    //inscription
    signupUser = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password)
    

    //Connexion
    loginUser =(email, password) =>
        this.auth.signInWithEmailAndPassword(email, password)
    

    //deConnexion
    signoutUser = () => this.auth.signOut()
}


export default Firebase