import React from "react";

const Banner = () => {
    const continent = ['Asia','America', 'Africa', 'Europa','Oceania'];
    const asiaCountry = ['el colo', '231', 'doha','qatar'];
    const americaCountry = ['Argentina', 'Uruguay', 'Paraguay'];
    // {     continent.forEach(function(element) {
    //     console.log(element);
    //     });
    // } 

    return(
        <>
        <div className="container background-image-banner">
        <ul class="nav nav-pills nav-justified">
            <li class="nav-item">
                 {/* boton */}
                <div>
                <div class="btn-group w-100">
                <button type="button" class="btn btn-light dropdown-toggle text-start" data-bs-toggle="dropdown" aria-expanded="false">
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
            <li class="nav-item">
                 {/* boton */}
                <div>
                <div class="btn-group w-100">
                <button type="button" class="btn btn-light dropdown-toggle text-start" data-bs-toggle="dropdown" aria-expanded="false">
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
            <li class="nav-item">
                 {/* boton */}
                <div>
                <div class="btn-group w-100">
                <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
                </div>
                </div>
            {/* boton */}
            </li>
            <li class="nav-item">
                 {/* boton */}
                <div>
                <div class="btn-group w-100">
                <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
                </div>
                </div>
            {/* boton */}
            </li>
        </ul>
            
            
            
            
            {/* boton */}
            <div>
            <div class="btn-group">
            <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Action
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
            </div>
            </div>
            {/* boton */}
        </div>
        
        </>
    )

}

export default Banner;