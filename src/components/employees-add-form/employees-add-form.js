import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({[e.target.name]: e.target.value}) //es6 - использование квадратных скобок в setstate
    }

    onSubmitData = (e) => {
        e.preventDefault()
        this.props.onAdd(this.state)
        this.clearState()
    }

    clearState = () => {
        this.setState({name: '', salary: ''}) //изменение сразу несколький свойств в state
    }

    render(){

        const {name, salary} = this.state

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        name="name"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        onChange={this.onValueChange}
                        value={name} />
                    <input type="text"
                        name="salary"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        onChange={this.onValueChange}
                        value={salary} />

                    <button type="submit"
                        onClick={this.onSubmitData}
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm