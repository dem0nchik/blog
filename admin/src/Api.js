import React from 'react';
import './App.css';

class Api extends React.Component {
  state = {
    inputID: '',
    deletedCount: undefined,
    updatedCount: undefined,
    up_title: '',
  }
  handleID = e => this.setState({inputID: e.currentTarget.value})
  handleUpTitle = e => this.setState({up_title: e.currentTarget.value})

  handleDelete = () => {
    this.setState({deletedCount: undefined})
    return fetch("http://localhost:8443/posts/" + this.state.inputID, { method: 'delete' })
              .then(res => res.json())
              .then(res => {
                if(res.deletedCount)
                this.setState({deletedCount: res.deletedCount})
              })
  }

  handleUpdate = () => {
    this.setState({updatedCount: undefined})

    return fetch("http://localhost:8443/posts/" + this.state.inputID, {
      method: 'PUT',
      contentType: 'application/json',
      body: JSON.stringify({ up_title: this.state.up_title}),
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
    

  render(){
    return (
      <div className="api">
        <form  action='http://localhost:8443/posts/' method="post" target="_blank">
            <input type='text' name='title'/><br/>
            <input type='text' name='text'/><br/>
            <input type='submit'/> 
        </form>
        <br/><br/>
        
        <input placeholder='ID' value={this.state.inputID} onChange={this.handleID} /><br/><br/>
        <button onClick={this.handleDelete}>Delete</button>  <br/>
        {this.state.deletedCount && <p>Удалено</p>}
        <br/><br/>

        <input onChange={this.handleUpTitle} type='text' name='up_title'/><br/>
        <input type='text' name='up_text'/><br/>
        <button onClick={this.handleUpdate}>Update</button>  <br/>
        {this.state.deletedCount && <p>Обновлено</p>}
      </div>
    );
  }
}

export default Api;
