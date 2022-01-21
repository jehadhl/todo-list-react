import React, { useState } from 'react';
import {Button,Modal, ModalBody, ModalHeader,ModalFooter} from 'reactstrap';

const CreateTaskPopup = ({modal, toggle , save}) => {
    const [taskName,setTaskName] = useState('');
    const [description,setDescription] = useState('');

    const handleChange = (e) => {
       const {name, value} = e.target;

       if (name === 'taskName'){
          setTaskName(value);
       }
       else{
          setDescription(value)
       }
    }

    const handleSave = () => {
        let task = {}
        task['Name']=taskName
        task['Description']= description
        save(task)
    }

    return (
         <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
                <ModalBody>
                    <form>
                        <div className='formGroup'>
                            <label>Task Name</label>
                            <input type="text" className='form-control' value={taskName} onChange={handleChange} name='taskName'/>
                            
                        </div>
                        <div className='formGroup mt-3'>
                            <label>Description</label>
                            <textarea rows='5' className='form-control' value={description} onChange={handleChange} name='description'></textarea>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                <Button className='btn-2'  onClick={handleSave}>Create</Button>{' '}
                <Button className='btn-3' onClick={toggle}>Cancel</Button>
                </ModalFooter>
         </Modal>
    );
};

export default CreateTaskPopup;