import React from "react";

const TopNavar = () => {
    return(
        <>
        <div className="text-center bg-color-topnavbar p-1 text-light">
        <div className="row">
            {/* DIV IZQUIERDO */}
            <div className = 'col d-flex justify-content-center align-items-center'>
                <h1 className="fs-2 text-light text-uppercase fw-bold">TRAVEL AGENCY</h1>      
            </div>

            {/* DIV DERECHO */}
            <div className="col d-flex flex-column p-1 gap-2">
                {/*FILA SUPERIOR*/}
                <div className="w-75 d-flex flex-row gap-3">
                    <div className="d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill text-warning" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>    
                    <h5 className="m-0">FIND US</h5>
                    </div>   
                    <div className="input-group rounded col">
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <span className="input-group-text border-0" id="search-addon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        </span>
                    </div>
                </div>

                {/*FILA INFERIOR*/}
                <div className="w-75">
                <h3>CALL US TO FREE <span className="text-warning">+99999999999</span></h3>
                </div>
            </div>
        </div>
        </div>
        </>
    )

}

export default TopNavar;