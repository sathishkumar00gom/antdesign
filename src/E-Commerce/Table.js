import React from 'react'
import {Table} from "react-bootstrap"



const Tabletime=({reduerData})=>{

  console.log('reducerData',reduerData)

    return(
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Product Name</th>
            <th>Product Details</th>
            
          </tr>
        </thead>
        <tbody>
          {reduerData?.map(pro=>(
            <tr>
              <td>{pro.id}</td>
              <td>{pro.name}</td>
              <td>{pro.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
)
}
export default Tabletime