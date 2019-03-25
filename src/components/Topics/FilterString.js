import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            names: ['Jorge', 'Alexandra', 'Adriana', 'Daniela', 'Lili', 'Carlos', 'Gio', 'Jacob'],
            userInput: '',
            filteredNames: []
        }
    }
    handleChange(val) {
        this.setState({userInput: val});
    }
    filterNames(arr, userInput) {
        let namesArr = this.state.names;
        let filteredNames = namesArr.filter((e) => e.includes(userInput));

        this.setState({filteredNames: filteredNames})


    }
    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Names: {JSON.stringify(this.state.names, null, 10)}</span>
                <input className='inputLine' onChange={(event)=> this.handleChange(event.target.value)}></input>
                <button className='confirmationButton' onClick={()=> this.filterNames(this.state.names, this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(this.state.filteredNames, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString;