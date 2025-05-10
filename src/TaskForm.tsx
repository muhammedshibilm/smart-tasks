import React, { type FormEventHandler } from "react";
import type { TaskItems } from "./types";


interface TaskFormProps {
  addTask: (task : TaskItems )=>void;
}
interface TaskFormSate {
   title : string
}
class TaskForm extends React.Component<TaskFormProps, TaskFormSate> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state={
      title: ""
    }
  }
  addTask: FormEventHandler<HTMLFormElement> = (event)=>{
      event.preventDefault();

      const newTask  = {
        title : this.state.title
      }
      this.props.addTask(newTask);
      this.setState({title: ""})
  }

  titlechanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
     console.log(`${event.target.value}`)
     this.setState({
      title: event.target.value
     })
  }
  render(): React.ReactNode {
    return <form onSubmit={this.addTask}>
        <input type="text" value={this.state.title} onChange={this.titlechanged} />
        <button type="submit">Add item</button>
    </form>;
  }
}

export default TaskForm;
