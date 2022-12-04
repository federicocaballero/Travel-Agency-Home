import React from "react";

const Offers = (props) => {


    return(
        <>
             <img src={props.data.url} class="card-img-top" alt="..."/>
             <div class="card-footer d-flex justify-content-between p-3 bg-secondary bg-opacity-25">
                <small class="text-muted ">{props.data.nombre}</small>
                <small class="text-muted">{props.data.price}</small>
             </div>        
        </>
    )
}

export default Offers;