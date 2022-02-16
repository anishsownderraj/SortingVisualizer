import React, { Component } from 'react';
import NavBar from './NavBar';
import "../styles/SortingVisualizer.css";
import "../styles/NavBar.css";
import {bubbleSort} from './BubbleSort';
class SortingVisualizer extends Component {

  state = {array: [], slider_value: 10, bar_width: 5}



  componentDidMount(){

    const genarray = []
    for (var i = 0; i <= this.state.slider_value; i++) {
      genarray.push(Math.floor((Math.random() * 750) + 18));

    }
  //  const all_bars = document.getElementByClassName('bar');
  //  all_bars.style.height='100px';
  //this.onGenerateNewArrayClick()

  this.setState({array: genarray})
  }



  onGenerateNewArrayClick = () => {

    const genarray = []
    for (var i = 0; i <= this.state.slider_value; i++) {
      genarray.push(Math.floor((Math.random() * 750) + 18));

    }
    this.setState({array: genarray})
    const all_bars = document.getElementsByClassName('bar');
    for (var e = 0; e <= this.state.array.length; e++) {
      all_bars[e].style.backgroundColor = 'turquoise';

    }


  }



  BubbleSort = () => {
    bubbleSort(this.state.array, this.state.slider_value);
    //this.setState({default_color:'turquoise'})
  }

  updateSlider = (e) => {
    this.setState({slider_value: e.target.value})
    this.bar_width()
    this.show_num()
    this.onGenerateNewArrayClick()
  }
  bar_width = () => {
    if(this.state.slider_value < 16){
      return 0.40*(100-this.state.slider_value)+ 23;
    } else {
      return (0.40*(100-this.state.slider_value)+0.5);
    }
  }



  show_num = () => {
  if(this.state.slider_value < 16){
    return 1;
  } else {
    return 0;
  }
  }

  render(){
    return(
      <div>
        <div className='NavBar'>
          <NavBar slider_value={this.state.slider_value} onClickGen={this.onGenerateNewArrayClick} new_value={this.state.value} onClickBubble={this.BubbleSort} onChangeRange={this.updateSlider} /></div>
          <div className='Background'>
            <div className='bar-container'>
              {this.state.array.map((num, index) => <div className='bar'  id={num} key={index} value={num} style={{value: num,color: this.show_num() ? 'white' : 'transparent', height: `${num}px`, width: `${this.bar_width()}px`}}>{num}</div>)}
            </div>
        </div>
      </div>
    );
  }

}

export default SortingVisualizer;