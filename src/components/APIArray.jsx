import React from 'react';

class APIArray extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      selectedItem: null,
      tableData:[]
    };
  }
  async componentDidMount(){
    const response =await fetch('https://zoo-animal-api.herokuapp.com/animals/rand/9');
    const responseData = await response.json();
    this.setState({
      tableData : responseData,
      selectedItem:responseData[0]
    });
  }

  render(){
    return(

    );
  })


}
export default APIArray;