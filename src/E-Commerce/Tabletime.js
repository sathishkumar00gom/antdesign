import React from 'react'
import { Table } from "react-bootstrap"



const Tabletime = ({ reduerData }) => {

  console.log('reducerData', reduerData)

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th>productId</th>
          <th>ProductName</th>
          <th>ProductDetails</th>

        </tr>
      </thead>
      <tbody>
        {reduerData?.map((pro, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{pro.id}</td>
            <td>{pro.name}</td>
            <td>{pro.Price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
export default Tabletime