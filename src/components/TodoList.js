import React, {useState ,useEffect} from 'react';
import CreateTask from '../moduls/CreateTask';
import Card from './Card';


const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])


    useEffect(() => {
        let arr = localStorage.getItem("taskList");
        
        if(arr){
            let obj =JSON.parse(arr)
            setTaskList(obj)
        }
      
    }, [])


    const deletTask = (index) => {
       let tempList = taskList
       tempList.splice(index, 1)
       localStorage.setItem("taskList", JSON.stringify(tempList))
       setTaskList(tempList)
       window.location.reload()
    }
    
    const updateListArray = (objet ,index) => {
        let tempList = taskList
        tempList[index]= objet
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (task) => {
        let tempList = taskList
        tempList.push(task)
         localStorage.setItem("taskList" ,JSON.stringify(tempList))
         setTaskList(tempList)
        setModal(false)
    }

    return (
        <>
        <div className='header text-center'>
            
            <h3>ToDo List</h3>
            <button  className='btn mt-2' onClick= {() => setModal(true)}>Create Task</button>
        </div>

        <div className='task-container'>
           {taskList.map((objet ,index) => <Card task = {objet}  index = {index} deletTask = {deletTask} 
           updateListArray = {updateListArray}/>)}
        </div>
         <CreateTask toggle ={toggle} modal ={modal}  save = {saveTask} />
        </>
    );
};

export default TodoList;