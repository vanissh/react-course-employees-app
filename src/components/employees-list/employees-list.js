import './employees-list.css'
import EmployeesListItem from '../employees-list-item/employees-list-item'

const EmployeesList = ({data, onDelete, onToggleProp}) => {
    const elements = data.map((item, i) => {
        return <EmployeesListItem {...item} 
                key={i}
                onDelete={() => onDelete(i)}
                onToggleProp={(prop) => onToggleProp(i, prop)}
                />
    })

    return (
        <ul className="app-list list-group">
          {elements}
        </ul>
    )
}

export default EmployeesList