import './app-info.css'

const AppInfo = ({data}) => {

    const total = data.length,
        toRise = data.filter(item => item.rise === true).length

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {total}</h2>
            <h2>Премию получат: {toRise} </h2>
        </div>
    )
}

export default AppInfo