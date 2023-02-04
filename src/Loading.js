import React, { Component } from 'react'
import './Loading.css'
 class Loading extends Component {
  render() {
    return (
        <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
  }
}
export default Loading
