import React, { Component } from 'react';
import axios from 'axios';
import RecepTable from './RecepTable';
export default class ViewRecep extends Component {

  constructor(props) {
      super(props);
      this.state = {receptionist: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/api/receptionist/view')
        .then(response => {
          this.setState({receptionist : response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.receptionist.map(function(object, i){
          return <RecepTable obj={object} key={i} />;
      });
    }

    render() {
      return (
        
        <div className="container" style={{border:"2px",borderRadius:"5px",backgroundColor:"white",padding:'10px',marginTop:'20px', width:"900px"}}>
          <h3 align="center">Receptionist List</h3>
          
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>DOB</th>
                <th>Phone Number</th>    
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }