import { Component } from 'react'
import './app.scss'
import '../search-panel/search-panel.scss'
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
                {name: "John M.", salary: '1009', increase: true, rise: false, id: 0},
                {name: "Jack D.", salary: '500', increase: false, rise: false, id: 1},
                {name: "Alexa G.", salary: '800', increase: false, rise: false, id: 2}
            ],
            term: '',
            filterParam: '',
            minID: 3
        }
    }

    setData = (newData) => {
        this.setState({data: newData})
    }

    getCopy = () => [...this.state.data]

    onDeleteItem = (id) => {
        const newData = this.getCopy().filter((_, i) => i !== id)

       this.setData(newData)
    }

    addItem = (emp) => {
        emp.increase = false
        emp.rise = false
        emp.id = this.state.minID
        const newData = this.getCopy()
        newData.push(emp)

        this.setData(newData)
        this.setState({minID: this.state.minID + 1})
    }

    onToggleProp = (id, prop) => {
        const newData = this.getCopy()
        newData.forEach((item, i) => i === id ? item[prop] = !item[prop] : '')
        
        this.setData(newData)
    }

    searchEmp = (items, term) => {
        if(!term.length) {
            return items
        }

        return items.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1) //метод для нахождения подстроки
    }

    filterEmp = (emp, filterParam) => {
        if(!filterParam.length || filterParam === 'all') {
            return emp
        }

        if(filterParam === 'big-salary') {
            return emp.filter(item => +item.salary > 1000)
        }

        if(filterParam === 'to-rise') {
            return emp.filter(item => item.rise === true)
        }
    }

    validateEmp = (items, term, filterParam) => {
        const emp = this.searchEmp(items, term)
        return this.filterEmp(emp, filterParam)
    }

    setFilterParam = (value) => {
        this.setState({filterParam: value})
    }

    setTerm = (value) => {
        this.setState({term: value})
    }

    //разобрать, почему обновляется не сразу
    //установить айдишники
    //почитвть, почему нельзя использовать индексы в массиве как key

    render(){

        const {data, term, filterParam} = this.state

        return (
            <div className="app">
                <AppInfo
                    data={data}
                />

                <div className="search-panel">
                    <SearchPanel setTerm={this.setTerm}/>
                    <AppFilter setFilter={this.setFilterParam}/>
                </div>

                <EmployeesList 
                    data={this.validateEmp(data, term, filterParam)}
                    onDelete={this.onDeleteItem}
                    onToggleProp={this.onToggleProp}
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