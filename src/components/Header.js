import React, {Component} from 'react';



class Header extends Component{
    
   
        
       
        


    
    render(){
        var list = [];
        var data = this.props.data;
        
        for(let i=0; i<data.length;i++){
        list.push(     <li key={data[i].id}><a href={"/content/"+data[i].id} data-cname={data[i].cname} data-id={data[i].id} onClick={function(e){
                e.preventDefault();
            this.props.onChangePage('read',e.target.dataset.cname,e.target.dataset.id);}.bind(this)}>{data[i].title}</a></li> 
        );
        }

        var content = null;
        var currentid = Number(this.props.selectedid);
        console.log(currentid);
        console.log(typeof(currentid));
        if(currentid>0){
            for(let i=0;i<data.length;i++){
                if(currentid===data[i].id){
                    content=
                <div className="head">
        <h2>{data[i].title}</h2>
            <p>{data[i].eng}</p>
            </div>
                }
            }
        }
    

    return(
            <div className={this.props.cname} >
        <h2><a href="/main">밴쿠버 생명길 교회</a></h2>
        <nav className="navigation">
            <ul className="nav-contents">
                {list}
               {/* <li><a href="/introduction" onClick={function(e){
                e.preventDefault();
                this.props.onChangePage('read','introduction');}.bind(this)}>교회소개</a></li> 
            <li><a href="/service" onClick={function(e){
                e.preventDefault();
                this.props.onChangePage('read','service');
            }.bind(this)}>예배안내</a></li>
            <li><a href="/sermon" onClick={function(e){
                e.preventDefault();
                this.props.onChangePage('read','sermon');
            }.bind(this)}>주일설교</a></li>
            <li><a href="/story" onClick={function(e){
                e.preventDefault();
                this.props.onChangePage('read','story');
            }.bind(this)}>생명길 이야기</a></li>
            <li><a href="/location" onClick={function(e){
                e.preventDefault();
                this.props.onChangePage('read','location');
            }.bind(this)}>위치 안내</a></li>
             */}
            </ul>
        </nav>

        {content}

        </div>

    )
    }
}

export default Header;