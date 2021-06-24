import React, {useState, useEffect, useContext} from 'react'
import { FirebaseContext } from '../Firebase';

const Logout = () => {

    const firebase = useContext(FirebaseContext)

 const [checked, setChecked] = useState(false);


useEffect(() => {
    if(checked){
        console.log("Déconnexion");
        firebase.signoutUser()
    }

}, [checked, firebase])

    const handeleChange = event => {
        setChecked(event.target.checked);
    }


    return (
        <div className="logoutContainer">
            <label className="switch">
                Bouton Logout {" "}
                <input 
                    onChange={handeleChange}
                    type="checkbox"
                    checked={checked}
                
                />
            </label>


            <span className="slider round"></span>
        </div>
    )
}

export default Logout
