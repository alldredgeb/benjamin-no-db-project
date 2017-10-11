import React, { Component } from 'react';
import MyList from './MyList';

class ToDoList extends Component {
    constructor(props) {
        super(props);
            this.state = {
                term: '',
                items: []
        };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (event) => {
        this.setState({term: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    }

    render() {
        return (
            <div className='todoListMain'>
                <h1 className='to_do_header'>My To-Do List</h1>
                    <form className='to_do_body' onSubmit={this.onSubmit}>
                        <input value={this.state.term} onChange={this.onChange} />
                        <button>Add</button>
                    </form>
                    <MyList items={this.state.items} />
            </div>
        );
    }
}

export default ToDoList;