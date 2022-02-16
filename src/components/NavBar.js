import React, { Component } from 'react';

class NavBar extends Component {



  render(){
    const i = document.querySelector('input')
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" onClick={this.props.onClickGen} href="#">Generate New Array</a>

        <label htmlFor="customRange2" className="form-label"></label>
        <input type="range" min="1" max="100"  value={this.props.new_value} className="form-range"  id="customRange2" onChange={this.props.onChangeRange}></input>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <a className="nav-item nav-link " onClick={this.props.onClickBubble} href="#">Bubble Sort </a>
          <a className="nav-item nav-link " onClick={this.props.onClickBubble} href="#">Quick Sort </a>
          <a className="nav-item nav-link " onClick={this.props.onClickBubble} href="#">Heap Sort </a>
          {/* <a className="navbar-brand">Click one of the sorts to sort Array</a> */}
          {/* <h1>    Click Bubble Sort to sort the array</h1> */}




          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;