/*
class Thing extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = [];
    this.addInput();
  }

  addInput() {
    //this.inputs.push('dwa');
    console.log(this.inputs);

    this.inputs.push(
      <WordsearchInput
        parent={this} key={this.inputs.length}
      />
    );

    this.forceUpdate();
  }

  render() {
    console.log('render');
    return (
      <div>
        {Math.random()}
        {this.inputs}
      </div>
    );
  }
}
*/

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '..'};
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  // Save the value to state
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleKeypress(event) {
    this.setState({value: event.charCode});
    console.log(this.state.value);
  }

  render() {
    return (
      <div>
        <label>Type to see charcode</label>
        <br />
        <input
          type="text"
          value={this.state.value}
          onKeyPress={this.handleKeypress}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
