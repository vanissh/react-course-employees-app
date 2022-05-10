import { Component } from 'react'
import './employees-list-item.css'

class EmployeesListItem extends Component {

//increase должен приходить из props
//удалить из локального state

    render(){
        const {name, salary, onDelete, onToggleProp, increase, rise} = this.props

        let classNames ="list-group-item d-flex justify-content-between"
        if (increase) {
            classNames += ' increase'
        }
        if (rise) {
            classNames += ' like'
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label"
                        onClick={() => onToggleProp('rise')} //передаем название свойства
                    >
                {name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                        className="btn-cookie btn-sm"
                        onClick={() => onToggleProp('increase')} //передаем название свойства
                        >
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button 
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem