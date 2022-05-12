import './employees-list.scss'
import EmployeesListItem from '../employees-list-item/employees-list-item'

const EmployeesList = ({data, onDelete, onToggleProp}) => {
    const elements = data.map(item => {
        return <EmployeesListItem {...item} 
                key={item.id}
                onDelete={() => onDelete(item.id)}
                onToggleProp={(prop) => onToggleProp(item.id, prop)}
                />
    })

    return (
        <ul className="app-list list-group">
          {elements}
        </ul>
    )
}

export default EmployeesList