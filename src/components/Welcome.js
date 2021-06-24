import React, { useState, Fragment, useContext, useEffect } from 'react'
import { FirebaseContext } from './Firebase'
import Logout from './Logout'
import Quiz from './Quiz'

const Welcome = props => {

   const firebase = useContext(FirebaseContext)

    const [userSession, setUserSession] = useState(null)
    
    useEffect(() => {
     
       let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/');   // avec cette methode, je vérfie les evenement (listener), je vérifie si il y'a un utilisateur
        }) 

        return () => { // ici je démonte mon components
            listener()
        }
    }, [])

     return  userSession === null ? 
    (
        <Fragment>
            <div className="loader"> </div> 
            <p>Loading....</p>
        </Fragment>
    ) : (
        <div>
           <h1>Page Welcome</h1> 
           <Logout />
           <Quiz />
        </div>
    ) 


    
}

export default Welcome
