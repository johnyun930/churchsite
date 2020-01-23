import React, {Component} from 'react';
import address from '../image/address.jpg';
import contact from '../image/contact.jpg';
import message from '../image/message.jpg';

import video from '../image/logo.jpg';
import video2 from '../image/logo2.jpg';


class Section extends Component{
    render(){

       return( 
        <div className="info">
            <div>
            <img src={this.props.address}/>
            </div>
            <h2>{this.props.title}</h2>
            {this.props.content}
        </div>
        )
    }




}


class Location extends Component{
    constructor(props){
        super(props);
        this.state = {
            contents:[
                {id:1,address:address,title:"address.",content:<div><p>4830 Boundary Rd,</p> <p> Burnaby, BC</p> <p>V5R 2N8</p><p>밴쿠버 생명길 교회</p></div>},
                {id:2,address:contact,title:"Contact.",content:<p>Tel: 604-333-3333</p>},
                {id:3,address:message,title:"Sermon",content:<div><a href="https://www.youtube.com/channel/UCizDtprD82GRYylkU9Vz-LQ?view_as=subscriber" onMouseOver={function(e){
                    var a = e.target;
                    a.src = video;
                    a.style.backgroundColor = "red";
                    
                }} onMouseOut={function(e){
                    var a = e.target;
                    a.src = video2;
                    a.style.backgroundColor = 'white';
                }}><img id="video" src={video2}/></a></div>}





            ]

            

        }
    }

    render(){

        var lists = [];
        for(let i=0; i<this.state.contents.length;i++){
            var data = this.state.contents[i];
            lists.push(<Section address={data.address} title={data.title} content={data.content}></Section>)
        }

        return(
            <div id="location">
                {lists}




            </div>

        )

    }


}

export default Location;