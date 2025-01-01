import { useMemo } from "react";
import { ITodoItem } from "../../types"
import './Dashboard.css'
interface IProps{
    items: ITodoItem[];
}

const Dashboard = (props: IProps) => {
    const urgents = useMemo(() => {
        return props.items.filter(item => item.isUrgent).length;
    }, [props.items])

    const completed = useMemo(() => {
        return props.items.filter(item => item.isDone).length;
    }, [props.items])
    return (
        <div className="data">
        <div>Created Tasks: <span>{props.items.length}</span></div>
        <div>Aurgent Tasks: <span>{urgents}</span></div>
        <div>Completed Tasks: <span>{completed}</span></div>
    </div>
    )
}

export default Dashboard;