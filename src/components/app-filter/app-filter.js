import { Component } from 'react'
import './app-filter.scss'


class AppFilter extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: 'all',
            buttonsData: [
                {name: 'all', label: 'Все сотрудники'},
                {name: 'to-rise', label: 'На повышение'},
                {name: 'big-salary', label: 'З/П больше 1000$'},
            ]
        }
    }

    setActive = (e) => {
        const name = e.target.name

        this.setState({active: name})
        this.props.setFilter(name)
    }

    render(){

        const {buttonsData, active} = this.state

        const buttons = buttonsData.map((item) => {

            const clazz = active === item.name ? 'btn-light' : 'btn-outline-light'
            return (
                <button className={'btn ' + clazz} 
                        id="filter-btn"
                        type="button"
                        name={item.name}
                        onClick={this.setActive}
                        key={item.name}
                        >
                    {item.label}
                </button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

export default AppFilter