import React from "react";

const Banner = () => {
    const continent = ['Asia','America', 'Africa', 'Europa','Oceania'];
    const country = ['Argentina', 'Colombia', 'Ecuador','Chile'];


    return(
        <>
        <div className="background-image-banner p-5 d-flex flex-column align-items-center justify-content-center">
            <p className="lh-1 text-center m-1">
                <p className="fs-2 text-light text-uppercase fw-semibold m-0">let us take you to Your</p>
                <p className="fs-1 text-light text-uppercase fw-bold">dream destinations</p>
            </p>
            <ul className="nav nav-pills nav-justified w-75">
                {/*CONTINENT*/}
                <li className="nav-item">
                    {/* boton */}
                    <div className="">
                    <div className="btn-group w-100 ">
                    <button type="button" className="btn btn-light dropdown-toggle text-start borde-izquierdo-redondo p-3" data-bs-toggle="dropdown" aria-expanded="false">
                        Continent
                    </button>
                    <ul className="dropdown-menu">
                        {continent.map((continent) =>
                        <li>{continent}</li>)
                        }                    
                    </ul>
                    </div>
                    </div>
                {/* boton */}
                </li>
                {/*COUNTRYS*/}
                <li className="nav-item">
                    {/* boton */}
                    <div>
                    <div className="btn-group w-100">
                    <button type="button" className="btn btn-light dropdown-toggle text-start bordes-rectos p-3" data-bs-toggle="dropdown" aria-expanded="false">
                        All Countrys
                    </button>
                    <ul className="dropdown-menu p-2">
                        {country.map((country) =>
                        <li>{country}</li>)
                        }                  
                    </ul>
                    </div>
                    </div>
                {/* boton */}
                </li>
                {/*BUDGET*/}
                <li className="nav-item">
                    {/* boton */}
                    <div>
                    <div className="btn-group w-100">
                    <button type="button" className="btn btn-light dropdown-toggle bordes-rectos p-3" data-bs-toggle="dropdown" aria-expanded="false">
                        Your budget ($)
                    </button>
                    <ul className="dropdown-menu p-2">
                    <label for="customRange1" className="form-label">Budget: </label>
                    <input type="range" className="form-range" id="customRange1"/>
                    </ul>
                    </div>
                    </div>
                {/* boton */}
                </li>
                {/*SEARCH*/}
                <li className="nav-item">
                    {/* boton */}
                    <div>
                    <div className="btn-group w-100">
                    <button type="button" className="btn btn-success borde-derecho-redondo p-3" data-bs-toggle="dropdown" aria-expanded="false">
                        Find your tours!!
                    </button>
                    </div>
                    </div>
                {/* boton */}
                </li>
            </ul>  
        </div>
        
        </>
    )

}

export default Banner;