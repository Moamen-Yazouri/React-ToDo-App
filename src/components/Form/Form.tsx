import { useState } from "react";
import { ITodoItem } from "../../types";
import './Form.css';
interface IProps {
    passNewItem: (newitem: ITodoItem) => void;
}
const Form = (props: IProps ) => {
    const [error, setError] = useState<string>("");
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newItem: ITodoItem = {
            title: e.currentTarget["todoTitle"].value,
            id: Date.now(),
            isUrgent: e.currentTarget["isUrgent"].checked,
            isDone: false
        }
        if(newItem.title) {
            props.passNewItem(newItem);
            setError("");
        }
        else {
            setError("please Enter Task's content!");
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="title">
                <input type="text" id="todoTitle" name="title" placeholder="Enter Task Title"/>
            </div>
            {
                Boolean(error) && (
                    <p className="errors">{error}</p>
                )
            }
            <div className="urgent">
                <label htmlFor="isurgent">Is it Urgent</label>
                <input type="checkbox" id="isUrgent"/>
            </div>
            <div className="buttons">
                <button type="submit">Add task</button>
                <button type="reset">Clear</button>
            </div>
        </form>
    )
}

export default Form;