import React from "react";

const Offers = (props) => {


    return(
        <>
             <img src={props.data.url} className="card-img-top h-75 w-100" alt=""/>
             <div className="card-footer d-flex justify-content-between p-3 bg-secondary bg-opacity-25">
                <small className="text-muted ">{props.data.nombre}</small>
                <small className="text-muted ">{props.data.price}</small>
             </div>        
        </>
    )
}

export default Offers;