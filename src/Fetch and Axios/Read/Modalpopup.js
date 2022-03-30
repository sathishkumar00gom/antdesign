import React, {useEffect, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap"





function Example(props) {

    const initial={
        id:props.moral.id,
        name:props.moral.name,
        
        Phonenumber:props.moral.Phonenumber
    }
    
    const [migration,setMigration]=useState(initial);
    // const [edit, setEdit] = useState(false)
   


    useEffect(()=>{
        if(props.moral)
        setMigration(props.moral)
        console.log(props.moral,"rectify")
    },[props.moral])

  

    const handleChange=(e) => {
        setMigration({...migration,[e.target.name]: e.target.value,
        })}

    const handleMethod=(e)=>{
        console.log('update data', migration)
        props.update(migration)
        // setEdit(true)

    }
    

    
  
    return (
      
  
        <Modal show={props.model} onHide={props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
                  <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" name="name" value={migration.name} onChange={handleChange}></Form.Control>
              <Form.Label>phonenumber</Form.Label>
              <Form.Control type="number" placeholder="phonenumber" name="Phonenumber" value={migration.Phonenumber}onChange={handleChange}></Form.Control>
              </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.close}>
              Close
            </Button>
            <Button variant="primary" onClick={handleMethod} >
             Update
            </Button>
          </Modal.Footer>
        </Modal>
     
    );
  }
  
export default Example;