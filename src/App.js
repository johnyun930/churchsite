import React, { Component } from 'react';
import Login from './components/Login.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Sermon from './components/Sermon.js';
import Service from './components/Service.js';
import Story from './components/Story.js';
import Location from './components/Location.js';
import main1 from "./image/main1.jpg";
import main2 from "./image/main2.jpg";
// import main3 from "./image/main3.jpg";
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: "main",
      cname: "main",
      selectedId:0,
      contents: [
        {id:1,cname:"introduction",title:"교회 소개",eng:"Introduce Lifeway church"},
        {id:2,cname:"service",title:"예배 안내",eng:"Lifeway Service"},
        {id:3,cname:"sermon",title:"주일 설교",eng:"Lifeway Sermon"},
        {id:4,cname:"story",title:"생명길 이야기",eng:"Lifeway Story"},
        {id:5,cname:"location",title:"위치 안내",eng:"Our Location"}

      ]
    }

   
  }

  
  getContent(){
    var _content = null;
    if(this.state.mode === "main"){
      _content = <Login></Login>

    }else if(this.state.mode==="read"){
      
      switch(Number(this.state.selectedId)){
        case 1:
          _content = "";
          break;
          case 2: _content = <Service></Service>
          break;

          case 3: _content = <Sermon></Sermon>
          break;
          case 4: _content = <Story></Story>;
          break;
          case 5: _content = <Location></Location>;
          break;

      }
      
 
     
  }


  return _content;

}

// getHeadContent(){

//   var head =   
//    if(this.state.selectedId!==0){ 
//   for(var i=0;i<this.state.contents.length;i++){
//     if(this.state.selectedId===this.state.contents[i].id){
//       head =  <Header cname={this.state.cname} mode={this.state.mode} data={this.state.contents}  onChangePage={
//         function(_mode,_cname){
//           this.setState({
//             mode:_mode,
//             cname: _cname,
//           })
//         }.bind(this)
//           }></Header>
//           break;
//         }
//   }
// }
//   return head;
// }

  
  
  render(){
  //   var i = 0;
  //   var a = function(){
  //       var a = document.getElementsByClassName("main")[0];
  //       var images = [main1,main2,main3];
  //       a.style.backgroundImage = `url(${images[i]})`;
  //       i++;
  //       if(i===3){
  //           i=0;
  //       }
  //       console.log(a);
  //       console.log(images[i]);
  //   }
  // if(this.state.mode==="main"){
  //   setInterval(a,3000);
  // }else{
  //   clearInterval(a);
  // }
  


  return (


    <div className="App">
    <Header cname={this.state.cname} data={this.state.contents} selectedid={this.state.selectedId} mode={this.state.mode} onChangePage={
    function(_mode,_cname,_id){
      this.setState({
        mode:_mode,
        cname: _cname,
        selectedId:_id
      })
    }.bind(this)


    }></Header>
     
      {this.getContent()};
      <Footer></Footer>
    </div>
  );
}
}

export default App;
