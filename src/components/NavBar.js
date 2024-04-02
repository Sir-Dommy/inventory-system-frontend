import React from 'react'

// This component contains navbar to be shown to users after login
const NavBar = () => {

  // return navigation bar for users
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <a className="navbar-brand btn btn-primary text-light" href="/">Home</a>

                <a className="navbar-brand btn btn-primary text-light" href="/allProducts">All Products</a>
                
                
                
                </div>
            </div>
        </nav>

    </div>
  )
}

export default NavBar
