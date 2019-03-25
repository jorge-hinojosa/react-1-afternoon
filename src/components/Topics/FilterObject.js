import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            games: [
                {title: 'Super Smash Bros',
                 awesomeness: 'awesometastic',
                 difficulty: 'fucking hard'},

                {title: 'Pokemon Blue and Red',
                 awesomeness: 'claaaasik',
                 difficulty: 'easy peasy',
                 musicScore: 'head bangin fun'},

                {title: 'LOZ: Ocarina of Time',
                 awesomeness: 'legendary...',
                 musicScore: 'beautiful'},

                {title: 'Mario Party 3',
                 awesomeness: 'parrrrty',
                 pairedAlcohol: 'beer'},
            ],
            userInput: '',
            filteredGames: []
        }
    }
    handleChange(val) {
        this.setState({userInput: val});
    }
    assignFilteredArray(userInput) {
        let filteredGames = this.state.games.filter((e)=>e[userInput])
        this.setState({filteredGames: filteredGames})
    }
    render () {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.games, null, 10)}</span>
                <input className='inputLine' onChange={(event) => this.handleChange(event.target.value)} />
                <button className='confirmationButton' onClick={()=> {this.assignFilteredArray(this.state.userInput)}}>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredGames, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject;