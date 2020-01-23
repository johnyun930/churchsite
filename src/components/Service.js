import React, {Component} from 'react';

class Service extends Component{
    constructor(props){
        super(props);
        this.state= {
            content: "주일 예배",
            content2:"성경 공부"
        }

    }
    
    render(){

        return(
        <div className="hours">
             <h1>예배시간 안내</h1>
             <p onMouseOver={function(e){
                 this.setState({
                     content: "오전 10시"
                 })
    }.bind(this)} onMouseOut={function(e){
        this.setState({
            content: "주일 예배"
        })
    }.bind(this)}>{this.state.content}</p>

             <p onMouseOver={function(e){
                 this.setState({
                     content2: "목사님께 문의 바랍니다"
                 })
    }.bind(this)} onMouseOut={function(e){
        this.setState({
            content2: "성경 공부"
        })
    }.bind(this)}>{this.state.content2}</p>



        </div>                
        )


    }

}

export default Service;