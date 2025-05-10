import React from "react";

interface TaskProps{
    title: string
}

class Task extends React.Component<TaskProps> { //pass the taskprops has a paramer 
 
    render(): React.ReactNode { //render method is render everything on screen
        
        return <div className="mx-auto w-64">{this.props.title}</div> //this keyword used to acees the props in titile 
    }
  
}

export default Task