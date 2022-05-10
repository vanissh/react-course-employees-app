import { Component } from 'react'
import './app.css'
import '../search-panel/search-panel.css'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

//иммутабельный объект - объект, который не может быть изменен после своего создания. Для того, чтобы
// внести изменения, создается глубокая копия объекта с уже внесенными нововведениями

// Иммутабельность в React
// В стандартном React-приложении состояние является объектом (Redux использует иммутабельный объект в качестве основы хранилища приложения). 
// Процесс согласования (reconciliation process) в React определяет, необходимо ли производить повторный рендеринг объекта, поэтому ему нужно следить за изменениями этого объекта.
// Другими словами, если React не сможет определить изменение объекта, он не обновит виртуальный DOM.
// Иммутабельность позволяет наблюдать за такими изменениями. Это, в свою очередь, позволяет React сравнивать старое и новое состояния объекта и на основе этого сравнения перерисовывать объект.
// Вот почему прямое изменение состояния в React не рекомендуется:
// React «не заметит» изменения состояния и не обновит объект.

class App extends Component {

    constructor(){
        super()
        this.state = {
            data: [
                {name: "John M.", salary: '1000', increase: true},
                {name: "Jack D.", salary: '500', increase: false},
                {name: "Alexa G.", salary: '800', increase: false}
            ]
        }
    }

    deleteItem = (id) => {
        const newData = [...this.state.data].filter((_, i) => i !== id)

        this.setState({data: newData})
    }

    addItem = (emp) => {
        const newData = [...this.state.data]
        newData.push(emp)
        
        this.setState({data: newData})
    }

    render(){
        return (
            <div className="app">
                <AppInfo/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm 
                    onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App