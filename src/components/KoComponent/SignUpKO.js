import React, { useContext, useState } from 'react';
import Particles from 'react-particles-js';
import {FirebaseContext} from '../Firebase'
import { Link } from 'react-router-dom'

const SignUp = () => {

    const firebase = useContext(FirebaseContext)
    console.log(firebase);

    const data = {
        role: "",
        pseudo: "",
        email: "", 
        password: "",
        confirmPassword: ""
    }

    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('')

    const handleChange = e => {
        setLoginData({...loginData, [e.target.id]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const {email,password} = loginData ; 
        firebase.signupUser(email, password)
        .then(user => {
            console.log(user);
            setLoginData({...data}) // avec ceci, je vide mon objet
        })
        .catch(error => {
            setError(error)
            setLoginData({...data}) // avec ceci, je vide mon objet
            
        })
    }

    const {role, pseudo, email, password, confirmPassword } = loginData ; 

   const btn = email !== "" && password !== "" && password === confirmPassword
    ? <button className="btn btn-primary">Inscription</button> : <button className="btn btn-primary" disabled>Inscription</button> 

    const errorMsg = error !== '' && <span className="text-danger">{error.message}</span>

    return (
    <>
        <div className=" text-center " id="welcomesignup">
            <div className="container">
                <div className='row justify-content-center'>
                    <div className='col-sm-8 col-md-8 col-lg-5 border rounded shadow-lg mt-5 roll-in-blurred-left bg-light pt-5' >

                        <form onSubmit={handleSubmit}>
                            

                            <h1 className="h3 mb-3 fw-normal">Créer un compte</h1>

                            {errorMsg}

                            {/* <div className="form-floating">
                                <label htmlFor="floatingInput">Pseudo</label>
                                <input type="text" id='pseudo' onChange={handleChange} value={pseudo} className="form-control" id="pseudo"  autoComplete="off"/>
                            </div>

                            <div className="form-floating">
                                <label htmlFor="floatingInput">Role</label>
                                <input type="text" id='pseudo' onChange={handleChange} value={role} className="form-control" id="role"  autoComplete="off"/>
                            </div> */}

                            <div className="form-floating">
                                <label htmlFor="floatingInput">Email address</label>
                                <input type="email" id='email'  onChange={handleChange} value={email} className="form-control" placeholder="name@example.com" autoComplete="off"/>
                            </div>
                           

                            <div className="form-floating mb-5">
                                <label htmlFor="floatingPassword">Password</label>
                                <input type="password" id="password" onChange={handleChange} value={password} className="form-control" placeholder="Password" autoComplete="off" />
                            </div>

                            <div className="form-floating mb-5">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type="password" id="confirmPassword" onChange={handleChange} value={confirmPassword} className="form-control"  placeholder="Password" autoComplete="off" />
                            </div>

                            {btn}

                            <Link className="simpleLink" to="/Artist">
                                <h6 className="text-primary">Déjà inscrit ? identifiez vous ici </h6>
                            </Link>

                            <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>


        <Particles id="particles-js"
            params={{
                "particles": {
                    "number": {
                        "value": 150
                    },
                    "size": {
                        "value": 3
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }}
        />
    </>
    )
}
export default SignUp