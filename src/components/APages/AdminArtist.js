import React, {useEffect, useState, useContext, Fragment} from 'react';
import {Context} from '../../hooks/ContextProvider'
import { FirebaseContext } from '../Firebase'
// import { Link } from 'react-router-dom'
import Logout from '../Logout/index'
import PrivateArtist from '../Private/PrivateArtist'

const AdminArtist = props => {
    console.log(props);
    const context = useContext(Context)
    
    const firebase = useContext(FirebaseContext)

    const [userSession, setUserSession] = useState(null)
    
    useEffect(() => {
       context.setNavBar(true); 
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
        <>
    
    
        <div className="flex-container">
            
          

            <div className="menu text-center mx-auto p-1">

                <Logout />
                < PrivateArtist />
                

            </div>
        </div>
        </>
    )
}
export default AdminArtist

