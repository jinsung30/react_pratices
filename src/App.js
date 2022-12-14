import React, {useState} from "react";
import './App.css';
import List from "./Components/List"
import Form from "./Components/Form"

export default function App() {
    // const state = {
    //     todoData: [],
    //     value: "",
    // };
    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        let newTodo = {
            id: Date.now(),
            title: value,
            completed: false,
        };

        //this.setState({ todoData: [...this.state.todoData, newTodo], value:""})
        // 원래 있던 할 일에 새로운 할 일 더해주기
        setTodoData((prev) => [...prev, newTodo]);
        setValue("");
    };

    return (
        <div className="container">
            <div className="todoBlock">
                <div className="title">
                    <h1>할 일 목록</h1>
                </div>

                <List todoData={todoData} setTodoData={setTodoData}/>
                <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>

            </div>
        </div>

    );
}



