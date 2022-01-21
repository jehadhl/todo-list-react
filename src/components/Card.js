import React , {useState} from 'react';
import EditTask from '../moduls/EditTask';





const Card = ({task, index ,deletTask , updateListArray}) => {
    const [modal , setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]


    const toggle = () => {
        setModal(!modal)
    };

    const updateTask = (objet) => {
        updateListArray(objet, index)
    }


    const handleDelete = ()=>{
         deletTask(index)
    };

    return (
        <div class = "card-wrapper ">
            <div class = "card-top" style={{"background-color":colors[index%5].primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{ "border-radius": "10px","backgroundColor":colors[index%5].secondaryColor}}>{task.Name}</span>
                <p className = "mt-3 p">{task.Description}</p>

                <div   style={{"position": "absolute", "right" : "20px", "bottom" : "20px"} }>
                    <i class='bx bx-edit me-2 ' style={{"color": colors[index%5].primaryColor , 
                    "fontSize": "20px", "cursor":"pointer"}} onClick={() => setModal(true)}></i>
                    <i class='bx bx-trash '  style={{"color": colors[index%5].primaryColor ,"fontSize": "20px","cursor":"pointer"}} onClick={handleDelete}></i>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask}  task= {task}/>
        </div>
    );
};

export default Card;