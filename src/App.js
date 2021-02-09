import './App.css';
import React from 'react';
import { requestData } from './action';
import { connect } from 'react-redux';

class App extends React.Component {

  state={
    searchedId: null
  }

  handleClick = (e) => {
    e.preventDefault();

    this.props.requestData()
  }

  handleChange = (e) => {
    let value = parseInt(e.target.value);
    this.setState({
      searchedId: value
    })
  }


  render(){
    console.log(this.props.data)
    let data = this.props.data || {data: []};
    return (
      <div className="container" style={{ width: "100%", height:"500px"}}>
        hello
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleClick}> fetch </button>
        
        <table>
          <tr>
            <th>Email</th>
            <th>lat</th>
            <th>lng</th>
          </tr>
          {data.data.map(obj => {
            if(obj.id === this.state.searchedId) {
            return (
              <tr key={obj.id}>
                <td>{obj.email}</td>
                <td>{obj.address.geo.lat}</td>
                <td>{obj.address.geo.lng}</td>
              </tr>
          )}
          })}

        </table>
        
     
        
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestData: () => dispatch(requestData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);