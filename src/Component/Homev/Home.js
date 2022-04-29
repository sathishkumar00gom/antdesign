import React, { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import "./Home.css"






function Home() {
  const [Modify, setModify] = useState([])
  const [Moxify, setMoxify] = useState([])

  useEffect(() => {
    let Filteringdata = localStorage.getItem("Card")
    let Monify = JSON.parse(Filteringdata)
    setModify(Monify)
    console.log("jkjk", Filteringdata)


    let modifingdata = localStorage.getItem("dada")
    let moxify = JSON.parse(modifingdata)
    setMoxify(moxify)
    console.log("kk", modifingdata)

  }, [])
  console.log(Modify)
  return (
    <>
      <div className="Nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" ></a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Features</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-danger" type="submit">Logout</button>
              </form>

            </div>
          </div>
        </nav>
      </div>
      { }
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SI.No</th>
            <th>Fullname</th>
            <th>email</th>

          </tr>
        </thead>
        <tbody>
          {
            Moxify.map((row, index) => {

              return (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{row.fullname}</td>
                    <td>{row.email}</td>





                  </tr>
                </>
              )
            })
          }

        </tbody>
      </Table>

      {/* // <-----Home------> */}




    </>
  );
}

export default Home;