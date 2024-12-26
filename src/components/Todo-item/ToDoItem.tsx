import { ITodoItem } from "../../types"
import "./ToDoItem.css"
interface IProps {
    data: ITodoItem;
    handleDelete: () => void
    handleComplete: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const ToDoItem = (props: IProps) => {
    return (
        <div className="item">
            <input type="checkbox" onChange={props.handleComplete} data-id={props.data.id} checked={props.data.isDone}/>
            <div className={props.data.isDone ? "content done" : "content"}>{props.data.title}</div>
            {props.data.isUrgent && <div className="urgent">Urgent</div>}
            <button className="delete" onClick={props.handleDelete}>Delete</button>
        </div>
    )
}

export default ToDoItem