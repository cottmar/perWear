import React, { useState } from 'react';

const AddUseButton = (props) => {
    console.log(props, 'props in add use button')
    const [ count, setCount ] = useState(0);
    console.log(count, setCount, 'COUNTING?')

    const buttonClickedCounter = () => {
        setCount(count + 1)
        props.useCount(setCount)
    }


    return (
            <div>
                {/* <button min='1' onClick={updateAmountUsedHandler}>Add Use</button> */}
                <button onClick={buttonClickedCounter}>Add Use</button>
            </div>
        )
}

export default AddUseButton;

// class AddUseButton extends React.Component {
//     constructor(props) {
//         super(props);
//     }
    
//     state = {
//         counter: 0,
//         amount: 0
//     }

//     // get number of clicks counted
//     // access the original amount
//     // skip the click / 0 and click /1

//     updateAmountUsedHandler = () => {
//         this.setState(prev => ({ counter: prev.counter + 1}))
//         console.log(this.state.counter, 'count')    

//         if (Math.abs(this.state.counter) !== 0) {
//             const dividedAmount = this.props.amount / this.state.counter
//                     console.log(dividedAmount)
//             this.setState({ amount: dividedAmount})
//         }



//     }

  

//     render() {
//         return (
//             <div>
//                 <button min='1' onClick={this.updateAmountUsedHandler}>Add Use</button>
//             </div>
//         )
//     }

    

// }

//     // need to add state for the item amount 
//     // need to add state for the amount of times used (counter)
 
//     // each time the button is clicked, add to counter
//     // each time the counter is increased, divide amount by 2.

    

// export default AddUseButton;
