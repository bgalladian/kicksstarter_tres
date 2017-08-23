import React, { Component } from 'react';
import axios from 'axios';
import DesignList from './DesignList';
import AddDesign from './AddDesign'



class DesignContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadDesignsFromServer = this.loadDesignsFromServer.bind(this);
    this.handleDesignSubmit = this.handleDesignSubmit.bind(this);
    this.handleDesignDelete = this.handleDesignDelete.bind(this);
    this.handleDesignUpdate = this.handleDesignUpdate.bind(this);
  }
  loadDesignsFromServer() {
    axios.get(this.props.url)
    .then(res => {
      this.setState({ data: res.data})
    })
  }

  handleDesignSubmit(design) {
  let designs = this.state.data;
  design.id = Date.now();
  let newDesigns = designs.concat([design]);
  this.setState({ data: newDesigns });
  axios.post(this.props.url, design)
    .then(function (response) {
      console.log(response);
      // this.setState({ data: design });
    });
  }

  handleDesignDelete(id) {
    axios.delete(`${this.props.url}/${id}`).then(res => {
      console.log('Design Deleted')
    }).catch(err => {
      console.log(err)
    })
  }

  handleDesignUpdate(id, design) {
    axios.put(`${this.props.url}/${id}`, design)
    .catch(err => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.loadDesignsFromServer();
    setInterval(this.loadDesignsFromServer, this.props.pollInterval)
  }

  render(){
    return(
      <div >
        <h2> kickSStarter</h2>
        <AddDesign />
        <DesignList
          onDesignDelete={ this.handleDesignDelete }
          onDesignUpdate={ this.handleDesignUpdate }
          data={ this.state.data }/>

      </div>
    )
  }
}

export default DesignContainer
