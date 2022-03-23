import React from 'react'
import {Table} from "react-bootstrap"



const Tabletime=()=>{



    c


    const [state, dispatch] = useReducer(reducer, []);

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
          <tr>
            <td>1</td>
            <td>Laptop</td>
            <td>emi offer available upto 10,000</td>
            
          </tr>
          
          <tr>
            <td>2</td>
            <td>Bangle</td>
            <td>emi offer available upto 500</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Spectacles</td>
            <td>emi offer available upto 999</td>
          </tr>

          <tr>
            <td>4</td>
            <td>Cycle</td>
            <td>emi offer available upto 4999</td>
          </tr>

          <tr>
            <td>5</td>
            <td>cooker</td>
            <td>emi offer available upto 2000</td>
          </tr>

          <tr>
            <td>6</td>
            <td>Furniture</td>
            <td>emi offer available upto 10000</td>
          </tr>

          <tr>
            <td>7</td>
            <td>Bero</td>
            <td>emi offer available upto 15000</td>
          </tr>
        </tbody>
      </Table>
)
}
export default Tabletime