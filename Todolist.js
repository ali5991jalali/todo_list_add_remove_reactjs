import React from 'react';




class Todolist extends React.Component{


constructor(props){

    super(props);

   
}



delete(key){

 this.props.delete(key);
    
}


render(){

const {items}=this.props;

return(<div>

<ul>    
{items.map((item)=>{

return (<div key={item.key} style={{height:'50px',backgroundColor:'#0088cc',marginTop:'40px',borderRadius:'12px',lineHeight:'50px',paddingLeft:'10px',color:'red',fontWeight:'bold'}} onClick={()=>this.delete(item.key)}> 
{item.text} 
</div>);


})}
</ul>



</div>);


}




}





export default Todolist;