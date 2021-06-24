import React, {useState} from 'react'

export const Context = React.createContext()


const ContextProvider = (props) => {
    const {children} = props

    const [contextAside, setContextAside] = useState("false")
    const [contextIdReference, setContextIdReference] = useState()
    const [contextStatutEtiquette, setContextStatutEtiquette] = useState()


    const [stateCommande, setstateCommande] = useState()
    const [NavBar, setNavBar] = useState(true)


    const context = {
        contextAside,
        setContextAside,
        contextIdReference,
        setContextIdReference,
        contextStatutEtiquette,
        setContextStatutEtiquette,
        stateCommande,
        setstateCommande,
        NavBar,
        setNavBar
        
    }

    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider