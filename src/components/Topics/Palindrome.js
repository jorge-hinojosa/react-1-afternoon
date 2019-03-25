import React, {Component} from 'react';

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    handleChange(val) {
        this.setState({userInput: val});
    }
    findPalindrome(userInput) {
        let inputArr = this.state.userInput.split('');
        let bool = false;

        for (let i = 0; i < inputArr.length; i++) {
            if (inputArr[i] === inputArr[inputArr.length-(i+1)]) {bool=true}
            else {bool=false}
        }
        this.setState({palindrome: bool})
    }
    render() {
        return (
            <div className='puzzleBox PalindromePB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(e)=> this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={()=> this.findPalindrome(this.state.userInput)}>Check</button>
                <span className='resultsBox'>Palindrome: {JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }
}

export default Palindrome;