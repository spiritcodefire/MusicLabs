import React from 'react' ;
import "./TeteDaffiche.css" ;

const Tetedaffiche = () => {
    return (
        <div className="bg-light" >
           <div className="container-fluid border border-light">
               <div className="row justify-content-center">
                  <div className="col-2 m-2 Card MickaelJacksonBg">
                     <h5 className="text-white mt-3">Mickael Jackson</h5>
                  </div>

                  <div className="col-2  m-2 Card gifJayZ ">
                     <h5 className="text-white mt-3">Jay Z New Album</h5>
                  </div>

                  <div  className="col-2 bg-success m-2 Card Amir">
                  <h5 className="text-secondary mt-3">Amir</h5>
                  </div>

                  <div  className="col-2 bg-dark m-2 Card Jennifer">
                  <h5 className="text-white mt-3">jennifer</h5>
                  </div>

                  <div  className="col-2 bg-dark m-2 Card daftPunk">
                  <h5 className="text-white mt-3">Daft Punk</h5>
                  </div>

               </div>
           </div>



        </div>
    )
}

export default Tetedaffiche
