import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
      textareaInput: '',
      selectInput: 'option1',
      radioInput: 'radio1',
      checkboxInput: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: inputValue,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form values:', this.state);
  };

  render() {
    return (
      <div>
        <h1>React Form Example</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="textInput">Text Input:</label>
            <input
              type="text"
              id="textInput"
              name="textInput"
              value={this.state.textInput}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="textareaInput">Textarea:</label>
            <textarea
              id="textareaInput"
              name="textareaInput"
              value={this.state.textareaInput}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="selectInput">Select:</label>
            <select
              id="selectInput"
              name="selectInput"
              value={this.state.selectInput}
              onChange={this.handleInputChange}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div>
            <label>Radio Buttons:</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="radioInput"
                  value="radio1"
                  checked={this.state.radioInput === 'radio1'}
                  onChange={this.handleInputChange}
                />
                Radio 1
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="radioInput"
                  value="radio2"
                  checked={this.state.radioInput === 'radio2'}
                  onChange={this.handleInputChange}
                />
                Radio 2
              </label>
            </div>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                name="checkboxInput"
                checked={this.state.checkboxInput}
                onChange={this.handleInputChange}
              />
              Checkbox
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
