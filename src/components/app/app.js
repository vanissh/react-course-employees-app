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
                {name: "John M.", salary: '1000', increase: true, rise: false},
                {name: "Jack D.", salary: '500', increase: false, rise: false},
                {name: "Alexa G.", salary: '800', increase: false, rise: false}
            ]
        }
    }

    setData = (newData) => {
        this.setState({data: newData})
    }

    getCopy = () => [...this.state.data]

    deleteItem = (id) => {
        const newData = this.getCopy().filter((_, i) => i !== id)

       this.setData(newData)
    }

    addItem = (emp) => {
        emp.increase = false
        const newData = this.getCopy()
        newData.push(emp)

        this.setData(newData)
    }

    onToggleIncrease = (id) => {
        const newData = this.getCopy()
        newData.forEach((item, i) => i === id ? item.increase = !item.increase : '')
        
        this.setData(newData)
    }

    onToggleRise = (id) => {
        const newData = this.getCopy()
        newData.forEach((item, i) => i === id ? item.rise = !item.rise : '')
        
        this.setData(newData)
    }

    render(){
        return (
            <div className="app">
                <AppInfo
                    data={this.state.data}
                />

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                    />
                <EmployeesAddForm 
                    onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App

//подьем состояние -  state-lifting - подъем данных вверх по иерархии в главный компонент, 
//где хранятся все данные