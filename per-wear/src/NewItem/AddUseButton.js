import React, { useState } from 'react';

class AddUseButton extends React.Component {
    constructor(props) {
        super(props);
    }
    
    state = {
        counter: 0,
        amount: 0
    }

    updateAmountUsedHandler = () => {
        this.setState(prev => ({ counter: prev.counter + 1}))        

        // const updatedItemAmount = {
        //     counter: this.state.counter,
        //     amount: this.props.amount, 
        // }
        if (Math.abs(this.state.counter) !== 0) {
            const dividedAmount = this.props.amount / this.state.counter
                    console.log(dividedAmount)
        }


    }

  

    render() {
        return (
            <div>
                <button min='1' onClick={this.updateAmountUsedHandler}>Add Use</button>
            </div>
        )
    }

    

}

    // need to add state for the item amount 
    // need to add state for the amount of times used (counter)
 
    // each time the button is clicked, add to counter
    // each time the counter is increased, divide amount by 2.

    

export default AddUseButton;
