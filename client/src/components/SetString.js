import React from "react";
import DrizzleContext from './DrizzleContext';

class SetString extends React.Component {

  constructor(props, context) {
    super(props);
    this.state = { stackId: null };
  }

  handleKeyDown = e => {
    // if the enter key is pressed, set the value with the string
    if (e.keyCode === 13) {
      this.setValue(e.target.value);
    }
  };

  setValue = value => {
    const { accounts } = this.context.drizzleState;
    const contract = this.context.drizzle.contracts.MyStringStore;
    // let drizzle know we want to call the `set` method with `value`
    const stackId = contract.methods["set"].cacheSend(value, {
      from: accounts[0]
    });

    // save the `stackId` for later reference
    this.setState({ stackId });
  };

  getTxStatus = () => {
    // get the transaction states from the drizzle state
    const { transactions, transactionStack } = this.context.drizzleState;

    // get the transaction hash using our saved `stackId`
    const txHash = transactionStack[this.state.stackId];

    // if transaction hash does not exist, don't display anything
    if (!txHash) return null;

    // otherwise, return the transaction status
    return `Transaction status: ${transactions[txHash].status}`;
  };

  render() {
    return (
      <div>
        <input type="text" onKeyDown={this.handleKeyDown} />
        <div>{this.getTxStatus()}</div>
      </div>
    );
  }
}

SetString.contextType = DrizzleContext.Context;

export default SetString;
