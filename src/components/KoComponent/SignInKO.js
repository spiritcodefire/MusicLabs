import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Particles from 'react-particles-js';
import { FirebaseContext } from '../Firebase'



const SignIn = (props) => {
    console.log(props);
    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (password.length > 5 && email !== '') {
            setBtn(true)
        } else if (btn) {
            setBtn(false)
        }
    }, [password, email, btn])

    const handleSubmit = e => {
        e.preventDefault();

        firebase.loginUser(email, password)
        .then(user => {
            console.log(user.user.email);
            setEmail('');
            setPassword('');
            props.history.push('/adminArtist');
        })
        .catch(error => {
            setError(error);
            setEmail('');
            setPassword('');
        })
        
    }
    return (
    <>
        
        <div className=" text-center " id="welcomesignin">
            
            <div className="container">
                <div className='row justify-content-center'>
                    <div className='col-sm-8 col-md-8 col-lg-5 border rounded shadow-lg  roll-in-blurred-left bg-light pt-5' >
                        <form onSubmit={handleSubmit}>
                            
                            {error !== '' && <span>{error.message}</span>}
                            <h1 className="h3 mb-3 fw-normal">Se Connecter</h1>

                            <div class="inputBox">
                                <label htmlFor="floatingInput">Email address</label>
                                <input className="form-control" onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete="off" required />  
                            </div>

                            <div class="inputBox mb-5">
                                <label htmlFor="floatingPassword">Password</label>
                                <input className="form-control" onChange={e => setPassword(e.target.value)} value={password} type="password" autoComplete="off" required />
                            </div>

                            <div className="linkContainer">
                                <Link className="simpleLink" to="/forgetpassword">Mot de passe oublié? Récupérez-le ici.</Link>
                            </div>

                            {btn ? <button className="w-100 btn btn-lg btn-primary mb-5">Connexion</button> : <button className=" mb-5 w-100 btn btn-lg btn-primary" disabled>Connexion</button> }
                            
                            <Link className="simpleLink" to="/signup">
                                <h6 className="text-primary">Pas encore inscrit ? inscrivez vous ici </h6>
                            </Link>

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
export default SignIn