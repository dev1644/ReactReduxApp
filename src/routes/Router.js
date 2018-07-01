
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserListTable from "../components/ReduxDemo/UserListTable"
import YoutubeDemo from "../containers/YoutubeDemo"
export default class RootRouter extends Component {
  render() {
    return (
     
        <div className="parent_container">
         <div>
          <Route path='/home/youtube' component={YoutubeDemo}/>             
          <Route path='/home/userlist' component={UserListTable}/>

           </div> 
      </div>
      
    )
  }
}
