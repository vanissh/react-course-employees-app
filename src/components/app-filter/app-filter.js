import { Component } from 'react'
import './app-filter.css'

//для выбранной кнопки заменяем класс btn-outline-light на btn-light
//сбросить классы для всех кнопок, навесить заново

class AppFilter extends Component {
    constructor(props){
        super(props)
        this.state = {
            filterParam: ''
        }
    }

    onToggleClasses = (target) => {
        const btns = document.querySelectorAll('#filter-btn')

        btns.forEach(item => {
            item.classList.remove('btn-light')
            item.classList.add('btn-outline-light')
        })

        target.classList.remove('btn-outline-light')
        target.classList.add('btn-light')
    }

    onSwitchFilter = (e) => {
        
        const target = e.target
        this.onToggleClasses(target)
        this.props.setFilter(target.name)
        
    }

    render(){
        return (
            <div className="btn-group">
                <button className="btn btn-light"
                        id="filter-btn"
                        type="button"
                        name="all"
                        onClick={this.onSwitchFilter}
                        >
                    Все сотрудники
                </button>
                <button className="btn btn-outline-light"
                        id="filter-btn"
                        type="button"
                        name="to-rise"
                        onClick={this.onSwitchFilter}
                        >
                    На повышение
                </button>
                <button className="btn btn-outline-light"
                        id="filter-btn"
                        type="button"
                        name="big-salary"
                        onClick={this.onSwitchFilter}
                        >
                    З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter