import React, { Component } from 'react';
// import DesignList from './DesignList'



class Designs extends Component {
  constructor(props) {
    super(props)
    this.state={
      toBeUpdate: false,
      name: '',
      designer: '',
      imageURL: '',
      material: ''
    }
    this.deleteDesign = this.deleteDesign.bind(this);
    this.updateDesign = this.updateDesign.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDesignerChange = this.handleDesignerChange.bind(this);
    this.handleImageURLChange = this.handleImageURLChange.bind(this);
    this.handleMaterialChange = this.handleMaterialChange.bind(this);
    this.handleDesignUpdate = this.handleDesignUpdate.bind(this);
  }

  updateDesign(e) {
    e.preventDefault()
    this.setState({ toBeUpdated: !this.state.toBeUpdated})
  }

  handleDesignUpdate(e) {
   e.preventDefault();
   let id = this.props.uniqueID;
   let name = (this.state.name) ? this.state.name : null;
   let designer = (this.state.designer) ? this.state.designer : null;
   let imageURL = (this.state.imageURL) ? this.state.imageURL : null;
   let material = (this.state.material) ? this.state.material : null;
   let design = { name: name, designer: designer, imageURL: imageURL, material: material};
   this.props.onDesignUpdate(id, design);
   this.setState({
     toBeUpdated: !this.state.toBeUpdated,
     name: '',
     designer: '',
     imageURL: '',
     material: ''
   })
 }

 deleteDesign(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    this.props.onDesignDelete(id);
  }

  handleNameChange(e) {
   this.setState({ name: e.target.value });
 }

  handleDesignerChange(e) {
   this.setState({ designer: e.target.value });
 }


 handleImageURLChange(e) {
  this.setState({ imageURL: e.target.value });
}
 handleMaterialChange(e) {
  this.setState({ material: e.target.value });
}


render() {
  return (
    <div>

        <p><strong>Name: </strong>{this.props.name}</p>
        <h3>Designer: {this.props.designer}</h3>
        <p><strong>Material: </strong>{this.props.material}</p>
        <img src={this.props.imageURL}></img><br/>
        <button onClick={ this.updateDesign }>Update</button>
        <button onClick={ this.deleteDesign}>Delete</button>

        { (this.state.toBeUpdated)
          ? (<form onSubmit={ this.handleDesignUpdate }>
            <input
              type='text'
              placeholder='Rename Your Kick'
              value={ this.state.name }
              onChange={ this.handleNameChange } /><br/>
              <input
                type='text'
                placeholder='Update Your Name'
                value={ this.state.designer }
                onChange= { this.handleDesignerChange } /><br/>
              <input
                type='text'
                placeholder='Update Your Image'
                value={ this.state.imageURL }
                onChange={ this.handleImageURLChange } /><br/>
              <input
                type='text'
                placeholder='Update the Material'
                value={ this.state.material }
                onChange={ this.handleMaterialChange } /><br/>
              <input
                type='submit'
                value='Update' />
            </form>)
          : null}
          </div>
    )
  }
}
export default Designs;
