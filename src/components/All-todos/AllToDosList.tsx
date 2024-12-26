import { ITodoItem } from "../../types"
import ToDoItem from "../Todo-item/ToDoItem";
import './AllTodos.css'
interface IProps {
    items: ITodoItem[],
    handleDelete: (index: number) => void;
    handleComplete: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const AllToDosList = (props: IProps) => {
    return (
        <div className="items">
            {
                props.items.map((item, index) => (
                        <ToDoItem 
                            key={item.id}
                            data={item}
                            handleDelete={() => props.handleDelete(index)}
                            handleComplete={props.handleComplete}
                        />
                    )
                )
            }
    </div>
    )
}

export default AllToDosList