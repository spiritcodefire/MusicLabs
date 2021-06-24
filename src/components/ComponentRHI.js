import React, { useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import {Context} from '../hooks/ContextProvider'
import { Link } from 'react-router-dom'
import UpdateDataCB from '../api/UpdateCommande'
// import { logRoles } from "@testing-library/react";




const ComponentRHI = (props) => {
    console.log(props);


    
    const context = React.useContext(Context)



    const defaultValues = {
        id:                 context.stateCommande.id,
        Nom:                context.stateCommande.Nom,
        Prenom:             context.stateCommande.Prenom,
        Telephone:          context.stateCommande.Telephone,
        Adresse:            context.stateCommande.Adresse,
        Commentaire:        context.stateCommande.Commentaire,
    };

    const { handleSubmit, register, reset } = useForm({ defaultValues });
    const [data, setData] = useState(null);

    useEffect(async() => {
        if (data!==null) {
            console.log(data);
           var result = await UpdateDataCB(data)
           console.log(result);
        }
    }, [data])

   

    return (
    <div className="shadow-lg border border-danger rounded-lg">

        <div className="row justify-content-start">
            <div className="col-3">
                <Link to="/commande">
                    <div className="btn btn-secondary "> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    
            <form onSubmit={handleSubmit(data => {setData(data) })}>

                <div className="container">

                    <section className="row">
                        
                        <div className="col">
                            <label>ID:</label>
                            <input name="id" style={{backgroundColor: "darkgray"}} className="form-control" {...register('id')} />
                        </div>

                        <div className="col">
                            <label>Nom:</label>
                            <input name="Nom"  className="form-control" {...register('Nom')} />
                        </div>
                        
                    </section>

                    <section className="row">
                        
                        <div className="col">
                            <label>Prenom:</label>
                            <input className="form-control" {...register('Prenom')} name="Prenom" />
                        </div>

                        <div className="col">
                            <label>Telephone:</label>
                            <input className="form-control" {...register('Telephone')} name="Telephone"  />
                        </div>
                        
                    </section>
                    <section className="row">
                        
                        <div className="col">
                            <label>Adresse:</label>
                            <input className="form-control" {...register('Adresse')} name="Adresse"/>
                        </div>

                        <div className="col">
                            <label>Commentaire:</label>
                            <input className="form-control" {...register('Commentaire')} name="Commentaire" />
                        </div>
                        
                    </section>

                    <section className="row">

                        <div className="col">
                            <label>DateRdv:</label>
                            <input className="form-control" {...register('DateRdv')} name="DateRdv" />
                        </div>
                        
                    </section>
                </div>

                <button className="btn btn-secondary mx-3">
                    submit
                </button>

            </form>
    </div>
    )
}
export default ComponentRHI