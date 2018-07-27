import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//importing other componenets
import Todolist from './Todolist';
//end of importing other compoenents



class App extends React.Component{

constructor(props){

    super(props);

this.state={

    items:[]
}

this.delete_todo=this.delete_todo.bind(this)

}




save_todo(e){

e.preventDefault();    
let value=this.todo_input.value;
let {items}=this.state;
let new_item={

    text:value,
    key:Date.now()

}


items.push(new_item);

this.setState({items},()=>{

this.todo_input.value='';
this.todo_input.focus();

})

}



delete_todo(key){

let {items}=this.state;

let main_items=[];

items.map((item)=>{

if(item.key!==key){

   main_items.push(item)
}

})


this.setState({items:main_items})



}



render(){

return (<div className="container" style={{paddingTop:'100px'}}>

<form onSubmit={this.save_todo.bind(this)}>

<div className="row" style={{height:'50px'}}>

<div className="col-lg-3 col-md-3" style={{height:'100%'}}>
</div>


<div className="col-lg-6 col-md-6" style={{height:'100%'}}>
<input type="text" className="form-control" ref={(node)=>this.todo_input=node}/>
</div>

<div className="col-lg-2 col-md-2" style={{height:'100%'}}>
<button type="submit" className="btn btn-primary" >save</button>
</div>



</div>
</form>


<Todolist items={this.state.items} delete={this.delete_todo}/>



</div>);



}





}






export default App;