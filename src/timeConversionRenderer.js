import React from 'react'
import RenderConvertedTime from './renderConvertedTime'
import { returnConvertedString } from './Util/timeConversionUtil'

class TimeConverter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      seconds: 0,
      display: ""
    }

    this.inputRef = React.createRef()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ display: returnConvertedString(this.state.seconds) })
    this.setState({ seconds: 0 })
    this.inputRef.current.value = '';
  }

  handleChange = (event) => {
    this.setState({ seconds: event.target.value })
  }

  handleReset = (event) => {
    this.setState({ display: "" })
  }

  render(){
    return(
      <div>
        <RenderConvertedTime display={this.state.display} />
        <form>
          <input ref={this.inputRef} onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Calculate</button>
          <button onClick={this.handleReset}>Clear result</button>
        </form>
      </div>
    );
  }
}

export default TimeConverter
