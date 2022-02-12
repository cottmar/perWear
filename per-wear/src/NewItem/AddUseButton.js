import React, { useState } from 'react';

class AddUseButton extends React.Component {
    constructor(props) {
        super(props);
    }
    
    state = {
        counter: 0,
        amount: 0
    }

    // get number of clicks counted
    // access the original amount
    // skip the click / 0 and click /1

    updateAmountUsedHandler = () => {
        this.setState(prev => ({ counter: prev.counter + 1}))        

        // const updatedItemAmount = {
        //     counter: this.state.counter,
        //     amount: this.props.amount, 
        // }
        // const amountToDivide = this.props.amount

// this.props.amount !== amountToDivide is not working
        if (Math.abs(this.state.counter) !== 0 && Math.abs(this.state.counter) !== 1 ) {
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
