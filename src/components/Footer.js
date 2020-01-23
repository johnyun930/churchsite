import React, {Component} from 'react';

class Footer extends Component {
    render(){
        return(
            <footer>
                
            <div className="column">
                <h2>생명길 교회</h2>
                <h5>Site By <a href="https://www.facebook.com/johnyun930">John Yun</a></h5>
            </div>
             <div className="column">
             <h3> address </h3>
             <p>4830 Boundary Rd</p>
             <p>Burnaby, BC V5R 2N8</p>
                
            </div>
             <div className="column">
                <h3>Info</h3> 
                <p>Tel: 604-333-333</p>      
            </div>
            <div className="column">
                <h3>Channel</h3>       
            </div>
            


            </footer>




        )
    }
}
export default Footer;