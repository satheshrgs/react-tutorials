import React from 'react';
import uuid from 'react-uuid'
import './todoApp.css';
import { MdClear } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import { FaUndoAlt } from 'react-icons/fa';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isloading: true,
            todos: [
            ],
            task: ''
        }
    }

    componentDidMount() {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.setState({
            todos
        })
    }

    addTodo = () => {
        
        const { task } = this.state;
        const todo = {
            id: uuid(),
            task: task,
            isCompleted: false,
		    isDeleted: false
        }
        const updatedTodos = [...this.state.todos, todo];
        this.setState({
            task: '',
            todos: updatedTodos
        })
    }

    handleOnChange = (event) => {        
        this.setState({
            task: event.target.value
        })
    }

    saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    completeTodo = (todoId) => {
        const { todos } = this.state;

        const updatedTodos = todos.map(todo => {
            if(todo.id === todoId) {
                return { ...todo, isCompleted: true };
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        }, () => {
            this.saveTodos();
        });
    }

    undoCompleted = todoId => {
        const { todos } = this.state;

        const updatedTodos = todos.map(todo => {
            if(todo.id === todoId) {
                return { ...todo, isCompleted: false };
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        }, () => {
            this.saveTodos();
        });
    }

    deleteTodo = todoId => {
        const { todos } = this.state;
        // const updatedTodos = todos.filter(todo => todo.id !== todoId);
        const updatedTodos = todos.map(todo => {
            if(todo.id === todoId) {
                return { ...todo, isDeleted: true };
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        }, () => {
            this.saveTodos();
        });
    }



    render() {
        const { task, todos } = this.state;
        const notdeletedTodos = todos.filter(todo => !todo.isDeleted);
        const incompleteTodos = notdeletedTodos.filter(todo => !todo.isCompleted);
        const completedTodos = todos.filter(todo => todo.isCompleted && !todo.isDeleted);
        return (
            <>
                <div className="header">TodoApp</div>
                <input type="text" value={task} onChange={this.handleOnChange}></input>
                <button onClick={this.addTodo}>Add Todo</button>
                <hr />
                <h6>Pending Todos</h6>
                <ul>
                {                    
                    !incompleteTodos.length ? <div>No Todos Pending</div> : incompleteTodos.map(todo => (
                        <li key={todo.id}>
                            {todo.task}
                            <span onClick={ () => this.completeTodo(todo.id)}><TiTick size={20}/></span>
                        </li>
                    ))
                }
                </ul>

                <h6>Completed Todos</h6>
                <ul>
                {                    
                    !completedTodos.length ? <div>No Todos Completed So Far</div> : completedTodos.map(todo => (
                        <li key={todo.id}>
                            {todo.task}
                            <span onClick={() => this.undoCompleted(todo.id)}><FaUndoAlt /></span>
                            <span onClick={() => this.deleteTodo(todo.id)}><MdClear /></span>
                        </li>
                    ))
                }
                </ul>
            </>
        )
    }
}

export default TodoApp;
