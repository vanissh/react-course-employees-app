import './employees-list.css'
import EmployeesListItem from '../employees-list-item/employees-list-item'

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {
    const elements = data.map((item, i) => {
        return <EmployeesListItem {...item} 
                key={i}
                onDelete={() => onDelete(i)}
                onToggleIncrease={() => onToggleIncrease(i)}
                onToggleRise={() => onToggleRise(i)}
                />
    })

    return (
        <ul className="app-list list-group">
          {elements}
        </ul>
    )
}

export default EmployeesList