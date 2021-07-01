import React, {useEffect} from 'react';
import { Context } from '../../../hooks/ContextProvider'
import CreateAll from '../CreateNft/CreateNft'

const Index = () => {

const context = React.useContext(Context)

useEffect(() => {

    context.setNavBar(false); 
    alert('confirmation mail requise')

}, [])


    return (
        <>
            
            <CreateAll />

        </>
    )
}

export default Index
