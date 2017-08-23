import React, { Component } from 'react';

class AddDesign extends Component {
  constructor(props) {
    super(props);
    this.state= { name: '', designer: '', imageURL: '', material: '' };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDesignerChange = this.handleDesignerChange.bind(this);
    this.handleImageURLChange = this.handleImageURLChange.bind(this);
    this.handleMaterialChange = this.handleMaterialChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleDesignerChange(e) {
    this.setState({ name: e.target.value });
  }
  handleImageURLChange(e) {
    this.setState({ name: e.target.value });
  }
  handleMaterialChange(e) {
    this.setState({ name: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit= {this.handleSubmit} >
        <input type = 'text' placeholder = 'Design Name' value={this.state.name} onChange={ this.handleNameChange } />
        <input type = 'text' placeholder = 'Designer' value={this.state.designer} onChange={ this.handleDesignerChange } />
        <input type = 'text' placeholder = 'Image URL' value={this.state.imageURL} onChange={ this.handleImageURLChange } />
        <input type = 'text' placeholder = 'Material' value={this.state.material} onChange={ this.handleMaterialChange } />
        <input type = 'submit' value='Post' />
      </form>
    )
  }
}

export default AddDesign;
