import React from "react";





function Home() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

{/* // <-----Home------> */}
<div id="carouselExampleIndicators" classname="carousel slide" data-ride="carousel">
  <ol classname="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" classname="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div classname="carousel-inner">
    <div classname="carousel-item active">
      <img classname="d-block w-100" src="./Homev/maxresdefault.jpg" alt="best treatment"/>
    </div>
    <div classname="carousel-item">
      <img classname="d-block w-100" src="TBB+-+Website+content_DAO+derma.jpg" alt="Good treatment"/>
    </div>
    <div classname="carousel-item">
      <img classname="d-block w-100" src="XAUysYzpBx.jpg" alt="Main Treatment"/>
    </div>
  </div>
  <a classname="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span classname="carousel-control-prev-icon" aria-hidden="true"></span>
    <span classname="sr-only">Previous</span>
  </a>
  <a classname="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span classname="carousel-control-next-icon" aria-hidden="true"></span>
    <span classname="sr-only">Next</span>
  </a>
</div>
</>
    );
}

export default Home;