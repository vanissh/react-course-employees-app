import './app.css'
import '../search-panel/search-panel.css'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'


function App() {

    const data = [
        {name: "John M.", salary: '1000', increase: true},
        {name: "Jack D.", salary: '500', increase: false},
        {name: "Alexa G.", salary: '800', increase: false}
    ]

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App