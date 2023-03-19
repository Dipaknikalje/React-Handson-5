import { PureComponent } from "react";

class PureComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      name: "Ram",
    };
  }

  handleChangeName = () => {
    console.log("handleChangeName call");
    this.setState({ name: "Ram changed to Shyam",value:10 });
  };

  render() {
    console.log("render called");
    return (
      <div>
        <h1>Simple Component</h1>
        <h2 style={{color:"green"}} >Name: {this.state.name}</h2>
        <h3 style={{color:"red"}} >Value: {this.state.value}</h3>
        <button onClick={this.handleChangeName}>Change Name</button>
      </div>
    );
  }
}

export default PureComp;