import React from "react";
import DrizzleContext from './DrizzleContext';

class ReadString extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataKey: null
    }
    
  }

  componentDidMount() {
    const contract = this.context.drizzle.contracts.MyStringStore;
    // let drizzle know we want to watch `myString` method
    // todo: will dataKey gets updated?
    const dataKey = contract.methods["myString"].cacheCall();

    this.setState({ dataKey });
  }

  render() {
    const contract = this.context.drizzleState.contracts.MyStringStore;

    const myString = contract.myString[this.state.dataKey];

    return <p>My stored string: { myString && myString.value }</p>;
  }
}

ReadString.contextType = DrizzleContext.Context;

export default ReadString;
