import React from 'react'
import { useStoreApi } from './StoreApi';
import { UseWeb3 } from './GetWeb3'

const Index = () => {

    const {address, balance, message, setBalance, setAddress} = useStoreApi();
    const web3 = UseWeb3();

    const setUserAccount = async () => {
        if(window.ethereum){
            await window.ethereum.enable();  
            web3.eth.getAccounts()
                .then(accounts => {
                    setAddress(accounts[0]);
                    setUserBalance(accounts[0]);
                });
        }
    };

    const setUserBalance = async (fromAddress) => {
        await web3.eth.getBalance(fromAddress).then(value=>{
               const credit =  web3.utils.fromWei(value, 'ether')
               setBalance(credit)
            });
    };

    const sendTransaction = async (e) => {
        e.preventDefault();
        const amount = e.target[0].value;
        const recipient = e.target[1].value;
        await web3.eth.sendTransaction({
            from: address,
            to: recipient,
            value: web3.utils.toWei(amount, 'ether')

        })
        setBalance(address)
    }


    return (
        <div className="container text-center" style={{height: "80vh"}}>
            Hello MetaMask
            <p>Welcome in an decentralized application</p>
            <button className="btn btn-outline-primary" onClick={() => setUserAccount() }>Connect to MetaMask</button>
            { address && 
                <>
                <p className="h3 m-5">Your Adress : {address}</p>
                <p>Balance: {balance}</p>
                </>
            }
        </div>
    )
}

export default Index
