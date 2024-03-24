/* eslint-disable react/prop-types */
import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
function TodoItem(props) {
    const { task, deleteTask , editTask} = props


 
 return (
    <>
    <Card className='Card col-4'>
        <Card.Body>
        <Card.Text>
        <p>Name: {task.name}</p>
        <p>Description: {task.description}</p>
        <p>Status <Form.Select style={{fontSize:'large', backgroundColor:'#e79b9b', border:'solid 4px  #e79b9b'}}>
            <option value={"not completed"}>Not Completed</option>
            <option value={"completed"}>Completed</option>
            </Form.Select></p>
        <div className='buttons'>
        <Button onClick={() => deleteTask(task.id)} >Delete</Button>{' '}
        <Button style={{backgroundColor:'#007F73'}} onClick={()=>editTask(task.id)}>Edit</Button>{' '}        
        </div>
        </Card.Text>
        </Card.Body>
        </Card>
        </>
 );
}
export default TodoItem;