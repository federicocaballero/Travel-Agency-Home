import React from "react";

const Banner = () => {
    const continent = ['Asia','America', 'Africa', 'Europa','Oceania'];
    const asiaCountry = ['el colo', '231', 'doha','qatar'];
    const americaCountry = ['Argentina', 'Uruguay', 'Paraguay'];

    return(
        <>
        <div className="background-image-banner p-5 d-flex flex-column align-items-center justify-content-center">
            <p className="lh-1 text-center m-1">
                <p class="fs-2 text-light text-uppercase fw-semibold m-0">let us take you to Your</p>
                <p class="fs-1 text-light text-uppercase fw-bold">dream destinations</p>
            </p>
            <ul class="nav nav-pills nav-justified w-75">
                {/*CONTINENT*/}
                <li class="nav-item">
                    {/* boton */}
                    <div className="">
                    <div class="btn-group w-100 ">
                    <button type="button" class="btn btn-light dropdown-toggle text-start borde-izquierdo-redondo p-3" data-bs-toggle="dropdown" aria-expanded="false">
                        Continent
                    </button>
                    <ul class="dropdown-menu">
                        {continent.map((continent) =>
                        <li>{continent}</li>)
                        }                    
                    </ul>
                    </div>
                    </div>
                {/* boton */}
                </li>
                {/*COUNTRYS*/}
                <li class="nav-item">
                    {/* boton */}
                    <div>
                    <div class="btn-group w-100">
                    <button type="button" class="btn btn-light dropdown-toggle text-start bordes-rectos p-3" data-bs-toggle="dropdown" aria-expanded="false">
                        All Countrys
                    </button>
                    <ul class="dropdown-menu">
                        {asiaCountry.map((asiaCountry) =>
                        <li>{asiaCountry}</li>)
                        }                  
                    </ul>
                    </div>
                    </div>
                {/* boton */}
                </li>
                {/*BUDGET*/}
                <li class="nav-item">
                    {/* boton */}
                    <div>
                    <div class="btn-group w-100">
                    <button type="button" class="btn btn-light dropdown-toggle bordes-rectos p-3" data-bs-toggle="dropdown" aria-expanded="false">
                        Your budget ($)
                    </button>
                    <ul class="dropdown-menu">
                    <label for="customRange1" class="form-label">Budget: </label>
                    <input type="range" class="form-range" id="customRange1"/>
                    </ul>
                    </div>
                    </div>
                {/* boton */}
                </li>
                {/*SEARCH*/}
                <li class="nav-item">
                    {/* boton */}
                    <div>
                    <div class="btn-group w-100">
                    <button type="button" class="btn btn-success borde-derecho-redondo p-3" data-bs-toggle="dropdown" aria-expanded="false">
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