import { Component } from 'react'

class SearchPanel extends Component {
    constructor(props){
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value
        this.setState({term}) //{term: term} - аналогичная запись
        this.props.setTerm(term)
    }

    render(){
        return(
            <input type="text" 
                    className="form-control search-input"
                    placeholder="Найти сотрудника"
                    onChange={this.onUpdateSearch}
                    value={this.state.term}/>
        )
    }
}

export default SearchPanel