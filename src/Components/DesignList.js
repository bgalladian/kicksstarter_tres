import React, { Component } from 'react';
import Design from './Designs'

class DesignList extends Component{
  render() {
      let designNodes = this.props.data.map(design => {
        return (
          <Design
             name={design.name}
             designer={design.designer}
             imageURL={design.imageURL}
             material={design.material}
             onDesignDelete={ this.props.onDesignDelete }
             onDesignUpdate={ this.props.onDesignUpdate}
             key={ design['_id']} >

          </Design>
        )
      })
      return (
        <div>
          { designNodes }
        </div>
      )
  }
}

export default DesignList;
