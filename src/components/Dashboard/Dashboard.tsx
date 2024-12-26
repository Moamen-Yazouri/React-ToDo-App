import { ITodoItem } from "../../types"
import './Dashboard.css'
interface IProps{
    items: ITodoItem[];
}

const Dashboard = (props: IProps) => {
    const urgents = props.items.filter(item => item.isUrgent).length;
    const completed = props.items.filter(item => item.isDone).length;
    return (
        <div className="data">
        <div>Created Tasks: <span>{props.items.length}</span></div>
        <div>Aurgent Tasks: <span>{urgents}</span></div>
        <div>Completed Tasks: <span>{completed}</span></div>
    </div>
    )
}

export default Dashboard;